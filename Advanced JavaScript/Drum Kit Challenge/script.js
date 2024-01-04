// Getting number of buttons.
var numberOfButtons = document.querySelectorAll(".drum").length;

// Looping through each button.
for (var i = 0; i < numberOfButtons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		// Checking the pressed Key.
		// 'this' refers to the context in which a function is called.
		var buttonInnerHtml = this.innerHTML;
		makeSound(buttonInnerHtml); // making sound, when the key shown in the drum image is pressed.
		buttonAnimation(buttonInnerHtml); // show animation when button is pressed.

		// Directing keyboard press.
		document.addEventListener("keypress", function (event) {
			makeSound(event.key);
		});

		// Function to play the sound only on the correct key press.
		function makeSound(key) {
			// Switch Statements.
			switch (key) {
				case "w":
					// Playing sound.
					var crash = new Audio("./sounds/crash.mp3");
					crash.play();
					break;

				case "a":
					// Playing sound.
					var kick = new Audio("./sounds/kick-bass.mp3");
					kick.play();
					break;

				case "s":
					// Playing sound.
					var snare = new Audio("./sounds/snare.mp3");
					snare.play();
					break;

				case "d":
					// Playing sound.
					var tom1 = new Audio("./sounds/tom-1.mp3");
					tom1.play();
					break;

				case "j":
					// Playing sound.
					var tom2 = new Audio("./sounds/tom-2.mp3");
					tom2.play();
					break;

				case "k":
					// Playing sound.
					var tom3 = new Audio("./sounds/tom-3.mp3");
					tom3.play();
					break;

				case "l":
					// Playing sound.
					var tom4 = new Audio("./sounds/tom-4.mp3");
					tom4.play();
					break;

				default:
					console.log(buttonInnerHtml);
			}
		}
	});
}

// Function that makes a animation on button press and remove it after 1 second.
function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");
	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}
