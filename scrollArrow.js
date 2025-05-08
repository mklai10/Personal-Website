const body = document.querySelector("body");
const arrow = document.getElementById("arrow");
const nextPagePosition = window.innerHeight;

window.onscroll = (event) => {
    if (window.pageYOffset > 0) {
        arrow.textContent= "keyboard_arrow_up";
    } else {
        arrow.textContent= "keyboard_arrow_down";
    }

    // todo refactor this function
    if (navBar.className == "navBar") {
        navBar.classList.toggle("close");
        navOpenButton.textContent = openIcon;
    }
}

arrow.addEventListener("click", () => {
    let rect = aboutSection.getBoundingClientRect();

    if (window.pageYOffset > 0) {
        window.scrollTo({top: 0, behavior: "smooth"});
    } else {
        window.scrollTo({top: rect.top, behavior: "smooth"});
    }
});