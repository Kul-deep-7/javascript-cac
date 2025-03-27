/*      What is Control Flow?
Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated.
By default, JS runs code top to bottom, but control flow lets you make decisions, repeat actions, or jump around in your code.


Comparison Operators: 
Comparison operators are used in logical statements to determine equality or difference between variables or values.

Operator	    Description 	    Example (x = 5, y = "5")	    Result
==	            Equal (loose)	    x == y	                        true
===	            Equal (strict)	    x === y	                        false
!=	            Not equal (loose)	x != y	                        false
!==	            Not equal (strict)	x !== y	                        true
>	            Greater than	    x > 3	                        true
<	            Less than	        x < 10	                        true
>=	        Greater than or equal	x >= 5	                        true
<=	        Less than or equal	    x <= 4	                        false




Logical Operators:
Logical operators are used to determine the logic between variables or values.

Operator    	Description	            Example
&&	            and	                    (x < 10 && y > 1) is true
||	            or	                    (x == 5 || y == 5) is false
!	            not	                    !(x == y) is true

*/


//Basic Control Flow Tools: if, else if, else – for decisions

const temp=15;

if(temp>15){
    console.log("temp is above 15")
}else if(temp===15) {
    console.log("Temp is 15")
}else{
    console.log("Temp is less than 15")
}

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=true;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard && 2==3){ // && needs every conditions to be true
    console.log("User can make a purchase")
}
if(loggedInFromGoogle || loggedInFromEmail){ // || needs one condition to be true
    console.log("User can log in")
}

/* Nullish Coalescing Operator: ??
Used to provide a default value only when the left-hand side is null or undefined.

Difference from || (OR)
|| returns the first truthy value

?? returns the first defined (not null/undefined) value
*/

//let val1 = 3 ?? 5 // Since 3 is not null or undefined, it returns 3
//let val1 = null ?? 6 // Since null is one of the two nullish values (null or undefined), the operator returns the right-hand side, which is 6
let val1 = null ?? 10 ?? 20 //The ?? operator evaluates left to right, stopping at the first non-null/undefined value.
console.log(val1);


/*What is the Ternary Operator?
It's a short way to write an if-else condition:

syntax: condition ? valueIfTrue : valueIfFalse
*/

let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";

console.log(canVote);  // ➝ "Yes"


//Equivalent if else
let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in";

console.log(message);  // ➝ "Please log in"

// Nested ternary
let score = 85;

let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "D";

console.log(grade);  // ➝ "B"
