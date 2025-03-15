
// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); 
console.log(newDate.getDay()); 

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
}) // "Sunday"


//------------------------------------------------------------------------------



let mydate = new Date()
console.log(mydate.toDateString()) // "Sun Aug 15 2021"
console.log(mydate.toTimeString()) // "21:09:08 GMT+0530 (India Standard Time)"
console.log(mydate.toLocaleDateString()) // "8/15/2021"
console.log(mydate.toLocaleTimeString())  // "9:09:08 PM"

