/* For each Loop
It’s a built-in array method used to loop through elements of an array and run a function on each one.
forEach() is an Array method that executes a callback function once for each element in an array.

syntax: 
 array.forEach(function(element, index, array) {
  // code to run on each element
});

🔹 element → current item
🔹 index (optional) → position in array
🔹 array (optional) → the entire array itself
*/

const myArray = ["Kuldeep", "Sahil", "Cr7", "Messi"];
myArray.forEach(function (names,i,arr){ // names are the element if the array, i is index, arr is whole array
     //   console.log(names) // prints the names in the array
       // console.log(i);//prints index of the array
       // console.log(arr) //prints the whole array
})

//Arraw function syntax

myArray.forEach((item,i,arr) => {
   // console.log(`index: ${i}, name: ${item}, Array: ${arr}`);
    
})

//Using for each with objects ***IMP***

const Hey = [
    {
        name : "kuldeep",
        age : 21,
    },

    {   
        name : "kuldeep",
        age : 21,
    },

    {   
        name : "kuldeep",
        age : 21
    }
]

Hey.forEach( (item, i, arr) => {
    console.log(item) // prints the whole object in the array
    //console.log(item.name) // prints the name of the object in the array
    //console.log(item.age) // prints the age of the object in the array
   // console.log(`Person ${i + 1}: ${item.name} is ${item.age} years old`);
  //  console.log(arr); // prints the whole array of objects
    
});



/*forEach()

Loops through arrays
Doesn’t return anything
Can’t break or continue
Super readable for simple tasks
*/