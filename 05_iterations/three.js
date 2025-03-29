                    //HIGH ORDER ARRAY LOOPS

/*   for of loop
syntax: 
for (const item of iterable) {
    // code to run
  }

item: each element in the iterable (like a value in an array) // we can give it name
iterable: anything you can go through one by one (like an array or string)
  */

const arr = ["Kuldeep","Sahil", "Cr7", "Messi"];
for(const names of arr){
   // console.log(names);
}

const name ="Cooldeep"
for(const naam of name){
    if(naam == "o"){
      //  console.log(`"o" detected`)
        continue // skips the rest of the loop for this iteration (if we dont use this O will be printed )
    }
  //  console.log(naam)
}


const name2 ="Cool deep"
for(const naam of name2){
    if(naam == " "){
        continue // skips the rest of the loop for this iteration (if we dont use this O will be printed )
    }
   // console.log(naam)
}


/* 
What is a Map in JavaScript?
A Map is a collection of key-value pairs where:
Keys can be of any type: strings, numbers, objects, even functions.
It maintains the order in which elements are added.
It offers optimized performance for frequently adding, deleting, or searching for data.


Key Characteristics:
Keys are unique. If you add a key that already exists, it will overwrite the value.
Order is preserved. Unlike plain objects {}, the order in which you add items is the same when you retrieve them.
Keys can be strings, numbers, booleans, objects, even functions!
This is different from objects, where keys are always converted to strings.


Objects vs Maps: In Depth
Feature	                   Object	                Map
Key Types	    Strings & Symbols only	        Any type (objects, functions)
Order	        No guaranteed order	            Preserves insertion order
Performance	    Slower for large datasets.	    Faster for adding/removing data
Iteration	    Requires manual methods         Directly iterable
                (Object.keys, Object.values)	
Default         Yes (toString, etc.)	        No default methods in keys
prototype	


Use Maps When...
You need keys of any type (not just strings)
You want faster lookups & insertions
You need ordered data
*/

//creation 
const map = new Map()

map.set(1,"kuldeep")
map.set("kuldeep", 7)

for (const [key, value] of map) {
    console.log(key, '=>' , value);
    
}