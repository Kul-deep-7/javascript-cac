

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // default value of username is sam
    if(!username){ // (The ! (NOT operator) inverts the truthiness of username. (means if username is not provided)
                     // If username is empty, undefined, null, false, or 0, then execute the code inside the if block
         console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kuldeep")) // kuldeep just logged in
// console.log(loginUserMessage("")) // PLease enter a username (because "" is empty string  & empty string is falsy value)
// console.log(loginUserMessage()) // sam just logged in



function add(a,b){ // a & b are parameters
    return a+b // return is used to return the value of the function & 
               // It stops the function execution means after return statement no code will be executed
}
let result = add(2, 4) // 2 & 4 are arguments
// console.log(result) // 6



                        //PASSING OBJECTS TO FUNCTION

const obj ={
    name:"Cooldeep",
    age:21
}

function passingObj(Object){
    console.log(`My name is ${Object.name} & i am ${Object.age} years old`)
}

console.log(passingObj(obj)) // My name is Cooldeep & i am 21 years old

// OR we can create object directly in argument

console.log(passingObj({
    name:"Kuldeep", 
    age:21})) // My name is Kuldeep & i am 21 years old

 
                            //PASSING ARRAY TO FUNCTION
 
const arr = [2,3,5,1,7,8];

function passingArray(Array){
    return Array[5];
}

console.log(passingArray(arr)) // 8

// OR we can create array directly in argument

console.log(passingArray([3,2,3,2,32,3,4,2])) // 3 (because 3 is at 5th index)