// Higher Order Functions (functions that take another functions as input).
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

// Making a higher order function.
function calculator(num1, num2, operator) {
	return operator(num1, num2);
}

var solutionAdd = calculator(3, 4, add);
alert(solutionAdd);

var solutionSubtract = calculator(3, 4, subtract);
alert(solutionSubtract);

var solutionMultiply = calculator(3, 4, multiply);
alert(solutionMultiply);

var solutionDivide = calculator(3, 4, divide);
alert(solutionDivide);
