// Add animation to input field on focus
const searchInput = document.querySelector("main input");

searchInput.addEventListener("focus", () => {
    searchInput.style.transition = "transform 0.2s ease";
    searchInput.style.transform = "scale(1.05)";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.transform = "scale(1)";
});

// Add a subtle logo animation on hover
const logo = document.querySelector("main img");

logo.addEventListener("mouseenter", () => {
    logo.style.transition = "transform 0.4s ease";
    logo.style.transform = "rotate(360deg)";
});

logo.addEventListener("mouseleave", () => {
    logo.style.transform = "rotate(0deg)";
});
