// Callbacks (functions that are passed into another function as argument.):
// this is a callback function.
function greet(name) {
	console.log("Hello, " + name);
}

function introduce(name, callback) {
	console.log("This is " + name + ". Let me introduce you.");
	callback(name);
}

introduce("Alice", greet);
