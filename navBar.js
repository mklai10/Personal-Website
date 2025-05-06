const navBar = document.getElementById("front-nav");
const navOpenButton = document.getElementById("nav-open-button");
const closeIcon = "arrow_back_ios";
const openIcon = "arrow_forward_ios";

navOpenButton.addEventListener("click", () => {
    navBar.classList.toggle("close");
    if (navOpenButton.textContent == closeIcon) {
        navOpenButton.textContent = openIcon;
    } else {
        navOpenButton.textContent = closeIcon;
    }
});