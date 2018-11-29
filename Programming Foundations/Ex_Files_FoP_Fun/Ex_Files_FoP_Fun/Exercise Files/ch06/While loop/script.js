/* VIDEO ONE
var a = 1;
 */
/*if the a++ wasn't withint the curly brackets {} then
then it would go on infinitely.
while (a <= 10) {
	alert (a);
	a++;
}*/
/*VIDEO TWO: Example of an off by one error. The bellow
will produce 900, when trying to get to 1,000. Solution
would be to begin with either i = 0 or set the
condition while ( i <= 10 [vs i < 10]). Important to
note that applying both solutions would again result
in being off by one.
var amount = 0
// create index
var i = 1;
//check condition
while (i < 10 ){
	amount = amount + 100;
//increment index
	i++;
}
alert("The value is: " + amount);
*/
/*Each index follows the pattern of having an index,
checking a condition, and incrementing the index. Therefore
a shorter, clearer and more trackable way of writing a successful loop by
using the for loop:
for ( var i = 1 ; i < 10 ; i++ ) {
 //do stuff
 //do stuff
 }

 //Do... While Loop's have the condition at the end of the code:
 var a = 1;
 do {
 //your code
 a++;
 } while ( a < 10);
 //As a result the code will always happen once,
 before it checks if it's value is a thing.

 Notice for chapter 7 NaN means Not a Number

Regular Expressions: the /slashes/ mark it as an regular expression.
var myRE = /hello/;
// is equivalent to below, but is the short hand
var myRE = new RegExp ("hello");
//if had a:
^hello (carrot) then it is saying the word has to be at the start.
hello$ at the end
hel+o SEE 3rd VIDEO CH 7 for more
*/