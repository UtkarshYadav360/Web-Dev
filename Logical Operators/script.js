// LOGICAL OPERATORS.
// 1) AND &&
// 2) OR ||
// 3) ! NOT

var yourName = prompt("What is your name? ");
var theirName = prompt("What is their name? ");

loveScore = Math.floor(Math.random() * 100) + 1;

if (loveScore > 70) {
	alert("Your love score is " + loveScore + "%. You both are love birds.");
}

if (loveScore > 30 && loveScore <= 70) {
	alert(
		"Your love score is " +
			loveScore +
			"%. You both are always going to be together."
	);
}

if (loveScore <= 30) {
	alert("Your love score is " + loveScore + "%.");
}
