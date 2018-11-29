// define several functions
function firstFunction() {
	alert("Just about to call the second function, insuring the first works");
    secondFunction();
}
function secondFunction() {
	alert("Just about to call the third function, insuring the second works");
    thirdFunction();
}
function thirdFunction() {
	alert("Just about to call the fourth function, insuring the third works");
    fourthFunction();
}
function fourthFunction() {
	alert("About to change the headline");
    headline.innerHTML = "You clicked the headline!";
}

//LOOKING FOR ERROR: check that it's linked to the file
alert("Yes the script is linked to the html")
// grab the headline element
var headline = document.getElementById("mainHeading");
// add a click event handler
headline.onclick = function() {
    alert("Just about to call the first function, insuring the event handler works");
    firstFunction();
    alert("Checking this event handler or the functions for the error by calling the first function");
};





