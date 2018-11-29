var headline = document.getElementById("mainHeading");

headline.onclick = function() {
	headline.innerHTML = "You clicked the headline!";
};
/*Notice the ; semicolon after this one. For event handlers
you will have this. Usually when you have a function you don't'
(such as if or while statements). It is because this entire thing is a statement
and not a function.*/
//The function() has no name which is common for event handlers (called anonymous functions)
