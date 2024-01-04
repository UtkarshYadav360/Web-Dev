// CHALLENGE 5
// FIBONACCI SEQUENCE.

// DON'T CHANGE THE CODE BELOW.
function fibonacciGenerator(n) {
	var output = [0, 1];
	for (var i = 2; i < n; i++) {
		output[i] = output[i - 2] + output[i - 1];
	}
	console.log(output);
}

// DON'T CHANGE THE CODE BELOW.
fibonacciGenerator(10);
