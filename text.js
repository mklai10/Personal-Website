let titleElement = document.getElementById("title-text");
let titleText = "Welcome To <br> Matthew's Website";

function typeText(element, text) {
    let place = 1;
    let interval = window.setInterval(function () {
        element.innerHTML = text.substring(0, place) + " <";
        place++;
        if (place == text.length + 1) {
            clearInterval(interval);
            element.innerHTML = text;
        }
    }, 50);
    
    
}

typeText(titleElement, titleText);


