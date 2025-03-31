/* filter() → Filters elements based on a condition

Returns a new array with elements that pass a condition
Does not change the original array
It loops through the array and runs a callback function on each element.
If the callback returns true, the element is kept.
If it returns false, the element is removed.

SYNTAX: 
const newName = array.filter((element, index, array) => {
    return condition; // If true, element is kept; if false, it’s removed
});

Parameters:

element → The current element of the array
index (optional) → Index of the current element
array (optional) → The full array (not commonly used)
*/

const Arr=[1,2,3,4,5,6,7,8,9,10]
const newArr = Arr.filter( (num) => {return num % 2 === 0}) // if using a block scope, return is required. IF we remove  {}, return is not required.
// console.log(newArr);


const users = [
    { name: "Amit", role: "user" },
    { name: "Neha", role: "admin" },
    { name: "Raj", role: "user" },
    { name: "Simran", role: "admin" }
];

// Your code here...
const admin = users.filter(   ( item ) => item.role != "admin" )
//console.log(admin)


//example 2
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let myBooks = books.filter( (item) => item.publish > 2000) //didnt use return because no there is no scope
  
  myBooks = books.filter( (item) => 
     item.genre ==="Fiction" || item.genre === "Non-Fiction" 
 )
  

 myBooks = books.filter( ( item)=>{
    return item.genre ==="History" && item.publish > 1995 
})
  console.log(myBooks);
  