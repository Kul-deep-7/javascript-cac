/* The .map() method is used to create a new array by applying a function to each element of an existing array.

SYNTAX:
array.map((element, index, array) => {
    return transformedValue;
});

element → The current element of the array
index → The index of the current element
array → The original array (optional)
Returns a new array without modifying the original array

*/

//Convert an array of student objects into an array of their names

const students = [
    { name: "Raj", age: 22 },
    { name: "Simran", age: 21 }
];

// Your `.map()` solution here...
const newStd = students.map( (names) => names.name )
// console.log(newStd)

/* 
Difference Between .map() and .filter()


Feature         	.map()	                         .filter()
Purpose	            Transforms each element	         Filters elements based on condition
Return Value	    Returns a new array of the       Returns a new array with fewer elements 
                    same length (with modified       (only the ones that match the condition)
                    values)	                         

                    
Modifies Original 
Array?	            ❌ No	                        ❌ No
Always Returns 
Same Length?	    ✅ Yes	                        ❌ No (filtered elements are removed)



 .map() → Transforms Each Element
.map() creates a new array by modifying every element in the original array.

.filter() → Filters Based on a Condition
.filter() creates a new array with only the elements that match the condition.
*/

/*
Chaining in JavaScript
Chaining means combining multiple array methods (like .map(), .filter(), and .reduce()) to perform multiple operations in a single line. It makes your code cleaner and more readable.
*/

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

const myProducts = products
                    .filter( (item) => item.price > 1000) // filter products with price greater than 1000   
                    .map( (item)=> item ) // map to get the new array of products with filtered properties

console.log(myProducts)
