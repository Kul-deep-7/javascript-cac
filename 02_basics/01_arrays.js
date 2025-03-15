//let arr=[1,"kuldeep",true,3.14]
//console.log(typeof(arr)) // object

const arr1=new Array(1,2,3,4,5);
console.log(arr1) // [1,2,3,4,5] 

//Array  methods
const arr=[1,2,3,4,5];
arr.push(6)
//console.log(arr) // [1,2,3,4,5,6]
arr.pop() // 6
//console.log(arr) // [1,2,3,4,5]
arr.unshift(9)
//console.log(arr) // [9,1,2,3,4,5]
arr.shift()
//console.log(arr) // [1,2,3,4,5]

// console.log(arr.includes(9)); // false
// console.log(arr.indexOf(3)); // 2

// const newArr = arr.join() // 1,2,3,4,5 (converts array to string)
// // const newArr = arr.join('') // 12345
// // const newArr = arr.join('-') // 1-2-3-4-5

// console.log(arr);
// console.log( newArr);


// slice & splice

console.log("A: ",arr)
const A = arr.slice(1,4)

console.log("Array Slice: ", A) // [2,3,4]

console.log("B: ",arr)
const B = arr.splice(1,4) 
console.log("Array Splice: ", B) // [2,3,4,5]

console.log("C: ",arr) // [1]  modifies the original array