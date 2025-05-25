const navBar = document.getElementById("front-nav");
const navOpenButton = document.getElementById("nav-open-button");

const closeIcon = "arrow_back_ios";
const openIcon = "arrow_forward_ios";

const aboutButton = document.getElementById("about-button");
const aboutSection = document.getElementById("about-section");
const projectsButton = document.getElementById("projects-button");
const projectsSection = document.getElementById("projects-section");
const contactsButton = document.getElementById("contacts-button");
const contactsSection = document.getElementById("contacts-section");

navOpenButton.addEventListener("click", () => {
    navBar.classList.toggle("close");
    if (navOpenButton.textContent == closeIcon) {
        navOpenButton.textContent = openIcon;
    } else {
        navOpenButton.textContent = closeIcon;
    }
});

aboutButton.addEventListener("click", () => {
    window.scrollTo({top: aboutSection.offsetTop, behavior: "smooth"});
});

projectsButton.addEventListener("click", () => {
    window.scrollTo({top: projectsSection.offsetTop, behavior: "smooth"});
});

contactsButton.addEventListener("click", () => {
    window.scrollTo({top: contactsSection.offsetTop, behavior: "smooth"});
});