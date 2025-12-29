// --- CONFIG & STATE ---
const menuContent = document.getElementById("menu-content");
const categoryNav = document.getElementById("category-nav");
const cartFab = document.getElementById("cart-fab");
const cartCountBadge = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalPriceEl = document.getElementById("cart-total-price");

let cart = []; // Array of { ...item, qty }

// --- MENU RENDERING ---

// 1. Уникальные категории (исключая "Все" т.к. теперь у нас просто список)
// Сохраняем порядок появления в menuData
const categories = [...new Set(menuData.map(item => item.category))];

function initMenu() {
    renderCategoryNav();
    renderAllSections();
    setupScrollSpy();
    setupCartUI();

    // Check for hash to scroll to
    if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const el = document.getElementById(id);
        if (el) setTimeout(() => scrollToCategory(id), 500);
    }
}

function renderCategoryNav() {
    categoryNav.innerHTML = "";
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.dataset.target = cat;
        btn.addEventListener("click", () => scrollToCategory(cat));
        categoryNav.appendChild(btn);
    });
}

function renderAllSections() {
    menuContent.innerHTML = "";

    categories.forEach(cat => {
        // Section Container
        const section = document.createElement("section");
        section.id = cat; // для навигации
        section.classList.add("menu-section");

        // Title
        const title = document.createElement("h2");
        title.classList.add("category-section-title");
        title.textContent = cat;
        section.appendChild(title);

        // Items contained in this category
        const items = menuData.filter(item => item.category === cat);

        items.forEach(item => {
            const card = createCard(item);
            section.appendChild(card);
        });

        menuContent.appendChild(section);
    });
}

function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    let imageHtml = "";
    if (item.img) {
        imageHtml = `<img src="${item.img}" alt="${item.name}" loading="lazy">`;
    }

    card.innerHTML = `
        ${imageHtml}
        <div class="card-body">
            <div class="card-title">
                <span>${item.name}</span>
                <span class="price">${item.price}</span>
            </div>
            <div class="card-footer-row">
                <p class="desc">${item.desc}</p>
                <button class="add-btn-plus" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

function scrollToCategory(catId) {
    const el = document.getElementById(catId);
    if (!el) return;

    // Offset for sticky header
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// --- SCROLL SPY ---
function setupScrollSpy() {
    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Trigger when section is near top
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                updateActiveNav(id);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".menu-section").forEach(section => {
        observer.observe(section);
    });
}

function updateActiveNav(activeId) {
    document.querySelectorAll("#category-nav button").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.target === activeId) {
            btn.classList.add("active");
            // Scroll nav to keep active button in view
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    });
}

// --- CART LOGIC ---
// Make accessible globally
// --- CART LOGIC ---
// Make accessible globally
window.addToCart = function (id) {
    console.log("Adding to cart, ID:", id);
    const item = menuData.find(i => i.id === Number(id));
    if (!item) {
        console.error("Item not found:", id);
        return;
    }

    const existing = cart.find(i => i.id === Number(id));
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    showFeedback();
}

function updateCartUI() {
    // Count
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCountBadge.textContent = totalCount;

    if (totalCount > 0) {
        cartFab.classList.add("pulse");
        setTimeout(() => cartFab.classList.remove("pulse"), 500);
    }

    renderCartModalItems();
}

function renderCartModalItems() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Корзина пуста</p>';
        cartTotalPriceEl.textContent = "0 ₸";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        // Parse price (remove non-digits or handle ranges)
        // Если цена диапазон "590 / 1790", берем первую или как?
        // Для упрощения, если есть слеш, берем первую часть.
        // Или если это строка "13 990 ₸", чистим.

        let numericPrice = 0;
        let priceStr = item.price.toString();

        // Если двойная цена, берем первую для расчета
        if (priceStr.includes("/")) {
            priceStr = priceStr.split("/")[0];
        }

        numericPrice = parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
        total += numericPrice * item.qty;

        const el = document.createElement("div");
        el.className = "cart-item";
        el.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">${numericPrice} ₸ x ${item.qty}</span>
            </div>
            <div class="cart-controls">
                <button onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(el);
    });

    cartTotalPriceEl.textContent = total.toLocaleString() + " ₸";
}

window.changeQty = function (id, delta) {
    const idx = cart.findIndex(i => i.id === id);
    if (idx === -1) return;

    cart[idx].qty += delta;

    if (cart[idx].qty <= 0) {
        cart.splice(idx, 1);
    }

    updateCartUI();
}

function setupCartUI() {
    cartFab.addEventListener("click", () => {
        cartModal.classList.add("open");
    });

    closeCartBtn.addEventListener("click", () => {
        cartModal.classList.remove("open");
    });

    cartModal.addEventListener("click", (e) => {
        if (e.target === cartModal) cartModal.classList.remove("open");
    });
}

function showFeedback() {
    // Simple toast or vibration?
    // navigator.vibrate can work on mobile
    if (navigator.vibrate) navigator.vibrate(50);
}


// --- START ---
initMenu();
