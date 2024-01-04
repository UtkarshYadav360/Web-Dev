// STRING SLICING:
// '.slice()' method is used to slice a string.
var lang = "JavaScript";
console.log(lang.slice(0, 1)); // J
console.log(lang.slice(-1)); // t
console.log(lang.slice(0, 4)); // Java

// UPDATED VERSION OF EXERCISE 2.
alert(prompt("Write your tweet(140 letters) : ").slice(0, 141));
