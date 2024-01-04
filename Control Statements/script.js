// CONTROL STATEMENTS (if-else).

var yourName = prompt("What is your name? ");
var theirName = prompt("What is their name? ");

loveScore = Math.floor(Math.random() * 100) + 1;

if (loveScore > 70) {
	alert("Your love score is " + loveScore + "%. You both are love birds");
} else if (loveScore < 30) {
	alert(
		"Your love score is " + loveScore + "%. Situations might be crazy for you."
	);
} else {
	alert("Your love score is " + loveScore + "%.");
}
