/* for in loop
used to loop over the properties of an object

for (const key in object) {
   code to be written
}

*/


const person =  {
    name: "kuldeep",
    age : 21,
    footballers : ["Ronaldo", "Messi", "Neymar"]
}

for (const key in person) {
   // console.log(key); // prints the key of the above object
   //console.log(person[key]); //prints the value of the key in the obj
   //console.log(`${key} => ${person[key]}`); // prints the keys and values
   
}

/* What it does:
for...in grabs each key (property name) in the object
Then you can use obj[key] to access the value
*/
 
// Using with arrays

const arr = ["Kuldeep","Sahil", "Cr7", "Messi"];

for (const key in arr) {
   // console.log(key); // prints the index of the array
    //console.log(arr[key]); //prints the value of the index in the array
}

/* For..in is Not for Arrays or Maps
It Works, but not recommended — use for...of for arrays instead.
Maps are not iterable with for...in.  */

// Maps

const map = new Map()
map.set(1, "kuldeep");
map.set("kuldeep", 1);

for (const key in map) {
  //  console.log(key) //wont work cuz  maps are not iterable with for ... in
}


// for..of loop for maps
for(const [key,value] of map){
  //  console.log(key) // prints the keys of the map
   // console.log(key,value) // prints keys n values
}

for (const myMap of map) {
    console.log(myMap); // prints the keys n values in the map in array format like [key, value]
}