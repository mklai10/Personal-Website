const body = document.querySelector("body");
const arrow = document.getElementById("arrow");
// const navBar = document.getElementById("front-nav");
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
    }
}

arrow.addEventListener("click", () => {
    if (window.pageYOffset > 0) {
        window.scrollTo({top: 0, behavior: "smooth"});
    } else {
        window.scrollTo({top: nextPagePosition, behavior: "smooth"});
    }
});