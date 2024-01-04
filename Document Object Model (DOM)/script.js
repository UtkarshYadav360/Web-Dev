// Document Object Model(DOM):

// shows the html part.
console.log(document.firstElementChild);

// shows the body part.
console.log(document.firstElementChild.lastElementChild);

// shows the h1 element.
console.log(document.firstElementChild.lastElementChild.firstElementChild);

// Getting hold of h1 element.
var heading = document.firstElementChild.lastElementChild.firstElementChild;
// console.log(heading);

// Manipulating the inner HTML of the h1 element.
heading.innerHTML = "Good Bye!";
heading.style.color = "green";

document.querySelector("input").click();
