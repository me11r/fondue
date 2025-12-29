// Плавный скролл к меню
document.querySelectorAll(".hero-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(btn.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
