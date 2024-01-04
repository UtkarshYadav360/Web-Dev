// CHALLENGE 2:

// .toUpperCase() method is used to change the string case to upper case.
// .toLowerCase() method is used to change the string case to upper case.

var userName = prompt("What is your name? ");
alert(
	"Hello, " +
		userName.slice(0, 1).toUpperCase() +
		userName.slice(1, userName.length + 1).toLowerCase()
);
