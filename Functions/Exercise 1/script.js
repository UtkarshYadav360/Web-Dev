// EXERCISE 1
// Life In Weeks. (Take user age as input and show them how many months, weeks and days are left in their life till they are 90.)

// DON'T CHANGE THE CODE BELOW.
function lifeInWeeks(age) {
	// WRITE YOUR CODE HERE.
	var ageLeft = 90 - age;
	var monthsLeft = 12 * ageLeft;
	var weeksLeft = 52 * ageLeft;
	var daysLeft = 365 * ageLeft;
	alert(
		"You have " +
			daysLeft +
			" days, " +
			weeksLeft +
			" weeks and " +
			monthsLeft +
			" months left, till you are 90 years old."
	);
}

// DON'T CHANGE THE CODE BELOW.
lifeInWeeks(56);
