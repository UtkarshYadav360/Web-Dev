// Getting all attributes of an element.
console.log(document.querySelector("a").attributes);

// Getting value of an attribute.
console.log(document.querySelector("a").getAttribute("href"));

// Changing the value of an attribute.
console.log(
	document.querySelector("a").setAttribute("href", "https://www.youtube.com")
); // link redirects to the YouTube page.
