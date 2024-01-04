// Manipulating HTMl Elements using JavaScript.
document.querySelector("h1").style.color = "orange";
document.querySelector("h1").style.backgroundColor = "pink";
document.querySelector("h1").style.margin = "0";
document.querySelector(".btn").style.backgroundColor = "yellow";
document.querySelector(".btn").style.borderRadius = "10px";

// Getting all classes of an element.
console.log(document.querySelector("button").classList);

// Adding class to an element.
document.querySelector("button").classList.add("invisible");

// Removing class from an element.
// document.querySelector("button").classList.remove("invisible");

// Toggle the property of the specified class.
document.querySelector("button").classList.toggle("invisible"); // button becomes visible and invisible.

// CHALLENGE:
document.querySelector("h1").classList.add("huge");
