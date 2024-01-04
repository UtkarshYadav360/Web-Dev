// EXERCISE 2
// BMI Calculator.

function bmiCalculator(height, weight) {
	// Math.pow() method is used to power up the number.
	var bmi = weight / Math.pow(height, 2);
	// Math.round() method is used to round a number.
	return Math.round(bmi);
}

var bmi = bmiCalculator(1.8, 65);
alert(bmi);
