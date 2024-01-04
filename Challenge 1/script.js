// CHALLENGE 1:

// Take a tweet as input under 140 letters from the user and, alert them how many characters they have left and how many characters they have written.

// '.length' method is used to count the number of characters in a string.
var tweet = prompt("Write your tweet(140 letters) : ");
var chars_written = tweet.length;
var chars_left = 140 - chars_written;
alert(
	"You've written " +
		chars_written +
		" characters" +
		", you've " +
		chars_left +
		" characters left."
);
