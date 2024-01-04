// CHALLENGE 3
// LEAP YEAR. (Take a year as input from the user and show it is a leap year or not.)

// DON'T CHANGE THE CODE BELOW.
function isLeap(year) {
	// WRITE YOUR CODE HERE.
	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				return "Leap Year";
			} else {
				return "Not Leap";
			}
		} else {
			return "Leap Year";
		}
	} else {
		return "Not Leap";
	}
}

// DON'T CHANGE THE CODE BELOW.
var checkLeap = isLeap(prompt("Which year do you want to check : "));

alert(checkLeap);
