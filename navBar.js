const navBar = document.getElementById("front-nav");
const navOpenButton = document.getElementById("nav-open-button");
const aboutButton = document.getElementById("about-button");
const aboutSection = document.getElementById("about-me");
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

aboutButton.addEventListener("click", () => {
    let rect = aboutSection.getBoundingClientRect();
    window.scrollTo({top: rect.top, behavior: "smooth"});
});