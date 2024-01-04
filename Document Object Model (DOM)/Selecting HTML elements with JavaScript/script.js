// Selecting HTMl elements using JavaScript:

// Getting elements using tag name.
console.log(document.getElementsByTagName("li"));

// Changing color of the third 'li' element.
document.getElementsByTagName("li")[2].style.color = "chartreuse";

// Getting element using class name.
console.log(document.getElementsByClassName("btn")[0]);

// Getting element using id name.
// console.log(document.getElementById("title"));
document.getElementById("title").innerHTML = "Good Bye";

// Getting an element of any selector type.
document.querySelector("#title").style.color = "purple";
document.querySelector(".btn").style.color = "orange";
document.querySelector("html").style.backgroundColor = "bisque";
document.querySelector("a").style.color = "green";
console.log(document.querySelector("li a"));
console.log(document.querySelector("li.list")); // shows first 'li' element with class 'list'.
console.log(document.querySelector("h1#title"));
console.log(document.querySelectorAll(".list")); // show all elements with class 'list'.
