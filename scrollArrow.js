const body = document.querySelector("body");
const arrow = document.getElementById("arrow");
const nextPagePosition = window.innerHeight;

window.onscroll = (event) => {
    if (window.pageYOffset > 0) {
        arrow.textContent= "keyboard_arrow_up";
    } else {
        arrow.textContent= "keyboard_arrow_down";
    }
}

arrow.addEventListener("click", () => {
    if (window.pageYOffset > 0) {
        window.scrollTo({top: 0, behavior: "smooth"});
    } else {
        window.scrollTo({top: nextPagePosition, behavior: "smooth"});
    }
});