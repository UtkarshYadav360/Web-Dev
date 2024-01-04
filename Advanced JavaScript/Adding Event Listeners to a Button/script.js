// Adding event listeners to a button.
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
	alert("I got Clicked!");
}

// Anonymous Function (functions that don't have a name).
document.querySelectorAll("button").addEventListener("click", function () {
	alert("I got Clicked!");
});

// Adding click events to all buttons.
var buttons = document.querySelectorAll("button");
for (var i = 0; i <= buttons.length; i++) {
	buttons[i].addEventListener("click", handleClick);
}
