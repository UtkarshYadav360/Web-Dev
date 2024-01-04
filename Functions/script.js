// FUNCTIONS:
// Making a function.
function greet() {
	var userName = prompt("Enter your name? ");
	alert("Hello, " + userName + ". Wishing you a happy life.");
}

// calling the function
greet();

// Making a function with arguments.
function fullGreeting(name, age) {
	alert("Hello " + name + " your age is " + age + ".");
}

fullGreeting(prompt("What is your name? "), prompt("What is your age? "));

// Making a function with return statement.
function helloUser(userName) {
	return "Hello, " + userName;
}

var greet = helloUser("Utkarsh Yadav");
alert(greet);
