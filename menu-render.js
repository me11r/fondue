const menuContent = document.getElementById("menu-content");
const categoryNav = document.getElementById("category-nav");

// Получаем уникальные категории
const categories = ["Все", ...new Set(menuData.map(item => item.category))];

// Рендерим кнопки категорий
categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.classList.add("category-btn");
    if (cat === "Все") btn.classList.add("active");

    btn.addEventListener("click", () => {
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderMenu(cat);
    });

    categoryNav.appendChild(btn);
});

// Функция рендера меню по категории
function renderMenu(category) {
    menuContent.innerHTML = ""; // очищаем

    const filtered = category === "Все" ? menuData : menuData.filter(item => item.category === category);

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="card-body">
                <div class="card-title">
                    <span>${item.name}</span>
                    <span class="price">${item.price}</span>
                </div>
                <p class="desc">${item.desc}</p>
            </div>
        `;

        menuContent.appendChild(card);
    });
}

// Первый рендер (все блюда)
renderMenu("Все");
