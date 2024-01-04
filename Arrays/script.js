// ARRAYS.
var guestList = ["Angela", "Jack", "James", "Lara", "Jameson"];

// Accessing arrays.
console.log(guestList[0]);
console.log(guestList[1]);
console.log(guestList[2]);
console.log(guestList[3]);
console.log(guestList[4]);

// Getting length of the arrays.
console.log("Guest List : " + guestList.length);

// '.includes()' method is used to check whether the given item is present in the array or not.
console.log(guestList.includes("Morris"));
console.log(guestList.includes("Angela"));

// '.push()' method push/add item to the end of the array.
// '.pop()' method takes the last item of the array and remove it from the array.

var output = [];
var num = 1;

function fizzBuzz() {
	if (num % 3 === 0 && num % 5 === 0) {
		output.push("Fiz Buzz");
	} else if (num % 3 === 0) {
		output.push("Fizz");
	} else if (num % 5 === 0) {
		output.push("Buzz");
	} else {
		output.push(num);
	}
	num++;
	console.log(output);
}

fizzBuzz();
