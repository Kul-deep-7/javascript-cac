// numbers

let num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toPrecision(4)); // "123.5"
num1 = console.log(num.toString(2)); // "1111011" (binary)
console.log(isFinite(num1)); //false
console.log(isNaN(num1)); //true    

// Math 

console.log(Math.abs(-23)) // 23
console.log(Math.ceil(num)) //124
console.log(Math.floor(num)) //123
console.log(Math.random()) // random number between 0 and 1
console.log(Math.random() * 10) // random number between 0 and 10
console.log(Math.floor(Math.random() * 10 + 1)) // random number between 1 and 10

let max=6;
let min=1

console.log(Math.floor(Math.random()*(max-min+1))+min) // random number between 1 and 6