// Random Number for dice 1.
var randomNumber1 = Math.floor(Math.random() * 6);

// Random Number for dice 2.
var randomNumber2 = Math.floor(Math.random() * 6);

// Images to be used in the website.
var images = [
	"./images/dice1.png",
	"./images/dice2.png",
	"./images/dice3.png",
	"./images/dice4.png",
	"./images/dice5.png",
	"./images/dice6.png",
];

// Changing 'player1' dice on every page reload.
document.querySelector(".img1").setAttribute("src", images[randomNumber1]);

// Changing 'player2' dice on every page reload.
document.querySelector(".img2").setAttribute("src", images[randomNumber2]);

// Game Conditions.
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
	document.querySelector("h1").innerHTML = "Draw!";
}
