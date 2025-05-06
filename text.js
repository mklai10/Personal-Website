let titleElement = document.getElementById("title-text");
let titleText = "Welcome To <br> Matthew's Website";

function typeText(element, text) {
    let place = 1;
    window.setInterval(function () {
        element.innerHTML = text.substring(0, place);
        place++;
    }, 50);
}

typeText(titleElement, titleText);


