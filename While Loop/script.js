// WHILE LOOPS.
var output = [];
var num = 1;

function fizzBuzz() {
	while (num <= 100) {
		if (num % 3 === 0 && num % 5 === 0) {
			output.push("FizzBuzz");
		} else if (num % 3 === 0) {
			output.push("Fizz");
		} else if (num % 5 === 0) {
			output.push("Buzz");
		} else {
			output.push(num);
		}
		num++;
	}
	return output;
}

var callFunc = fizzBuzz();
console.log(callFunc);
