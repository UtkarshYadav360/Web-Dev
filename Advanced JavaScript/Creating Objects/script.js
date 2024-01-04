// CREATING OBJECTS:
var programmer = {
	name: "Angela",
	age: 39,
	experience: "10 years",
};
console.log(typeof programmer);

// Accessing Objects.
console.log(programmer.name);
console.log(programmer.age);
console.log(programmer.experience);

// Constructor Function (used to initialize new objects).
function HouseKeeper(name, age, experience, languages) {
	this.name = name;
	this.age = age;
	this.experience = experience;
	this.languages = languages;
	this.cleaning = function () {
		alert("Cleaning in Progress!"); // 'cleaning' is a method of 'HouseKeeper' object.
	};
}

// Initializing 'houseKeeper1' from the Constructor Function 'HouseKeeper'.
var houseKeeper1 = new HouseKeeper("Timmy", 45, "4 years", [
	"English",
	"French",
]);
console.log(houseKeeper1);

// Initializing 'houseKeeper2' from the Constructor Function 'HouseKeeper'.
var houseKeeper2 = new HouseKeeper("Jon", 59, "20 years", [
	"English",
	"French",
]);

console.log(houseKeeper2);

// Initializing 'houseKeeper3' from the Constructor Function 'HouseKeeper'.
var houseKeeper3 = new HouseKeeper("Meo", 30, "3 years");
houseKeeper3.cleaning();
