// CHALLENGE 4.
// Who's buying the lunch?

function whoIsPaying(names) {
	var numberOfPeople = names.length;
	var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
	var randomPerson = names[randomPersonPosition];
	return randomPerson + " is going to pay the bill today.";
}

var payee = whoIsPaying(["Angela", "Lara", "Mike", "Kim"]);
alert(payee);
