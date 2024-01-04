// Adding jQuery to Web Pages.
// Recommended.
$("h1").css("color", "red");

// jQuery code will execute when the entire page is loaded.
// Not Recommended.
// $(document).ready(function () {
// $("h1").css("color", "red");
// });

// Manipulating Styles using jQuery.
$("h1").css("color", "green");
$("h1").css("font-size", "10em");

$("h1").addClass("big-title margin-50"); // Adding style using class
$("h1").removeClass("big-title"); // Removing class

// Checking for the specified class in the element.
console.log($("h1").hasClass("margin-50"));

// Manipulating text using jQuery.
$("h1").text("Hello World!"); // Changing text
$("button").html("<u>Click Me</u>"); // Adding text

// Manipulating attributes using jQuery.
console.log($(".link").attr("href")); // Getting value of the attribute
console.log($(".link").attr("href", "https://www.yahoo.com")); // Changing attribute value

// Adding even listeners using jQuery.
$("button").click(function () {
	$("h1").css("color", "purple");
});

$("input").keypress(function (event) {
	$("h1").text(event.key);
});

$("h1").on("mouseover", function () {
	$("h1").css("color", "yellow");
});

// Adding and Removing Elements using jQuery.
$("h1").before("<button>New Button</button>"); // Adding button before the 'h1' element.
$("h1").after("<button>New Button</button>"); // Adding button after the 'h1' element.
$("h1").prepend("<button>New Button</button>"); // Adding button inside the 'h1' element(after h1 opening tag).
$("h1").append("<button>New Button</button>"); // Adding button inside the 'h1' element(before h1 closing tag).

// Animations using jQuery.
$(".hide").on("click", function () {
	// $("h1").hide(); // hide the 'h1' element.
	// $("h1").fadeOut(); // fade and hide the 'h1' element.
	$("h1").slideUp(); // slide up and hide the 'h1' element.
});

$(".show").on("click", function () {
	// $("h1").show(); // hide the 'h1' element.
	// $("h1").fadeIn(); // fade in and show the 'h1' element.
	// $("h1").fadeToggle(); // toggle the fade in and fade out property.
	$("h1").slideDown(); // slide down and show the 'h1' element.
	// $("h1").slideToggle(); // toggle the slide up and side down property.
});

// Adding custom animations using jQuery.
// Only those CSS can be specified which have a numeric value.
$("h1").on("click", function () {
	$("h1").animate({ opacity: 0.5 }); // half the opacity when click in 'h1'.
	$("h1").animate({ margin: "20px" }); // set margin 20px when click in 'h1'.
});

$("h1").on("click", function () {
	$("h1").slideUp().slideDown().animate({ opacity: 0.5 }); // setting multiple animations at same time
});
