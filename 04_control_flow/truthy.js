/* Falsy Values: These are values that JS treats as false in a condition

Value	        Description
false	        The boolean false
0	            Zero
-0	            Negative zero (yes lol)
""	            Empty string
null	        Null value
undefined	    Not defined
NaN	            Not a Number



Truthy Values: These are values that JS treats as true in a condition

Value	        Explanation
"hello"	        Non-empty string (" "- this is non-empty string cuz it has space)
42	            Any non-zero number
-7	            Negative numbers too
{}	            Empty object
[]	            Empty array
function(){}	Any function
Infinity	    Special number (not falsy!)
new Date()	    Valid object 
*/

const a= " "
if(a){
    console.log("Truth")
}else{
    console.log("false");
}

//to check if array is empty    
const userEmail = []

if (userEmail.length === 0) {
        console.log("Array is empty");
}


//to check if obj is empty
const objEmpty={}

if(Object.values(objEmpty).length===0){ //returns an array of the object's values (we can replace keys with values too)
    console.log("Object is empty");
}


