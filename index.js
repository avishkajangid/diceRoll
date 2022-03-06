var randomNumber = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomImageSource);

document.querySelector("button").addEventListener("click", reloadPage);

function reloadPage(){
    window.location.reload();
}