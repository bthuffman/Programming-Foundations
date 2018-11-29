/*function addTwoNumbers() {
   	var a = 5;
	var b = 10;
	var result = a + b;
	alert(result);
}
//The below calls the function which is required for functions.
addTwoNumbers();
/*The return result causes the function to stop there and jump back
to whatever called it.

If you want to display the "result" of a function you
should create a variable and set it equal to the call.
Otherwise simply calling it without an alert won't display it.
 */
function addTwoNumbers(a,b) {
	var result = a + b;
	return result;
}
//The below calls the function which is required for functions.
var x = addTwoNumbers(5,10);
alert (x);
