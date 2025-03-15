
// // const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]

const a = new Object() // singleton object is created
const b = {} // singleton object is created using object literal

const user = {   // object literal object is created
    name: "kuldeep",
    studiedAt : {
        school: "Dr Mrs Erin N Nagarvala School",
        college: "Nowrosjee Wadia College",
        PG: "Garware College",
    },
    age : 21
};

const state = {
    state1: "Maharashtra",
    state2: "Rajasthan"
}

//console.log(user.studiedAt);

let newobj=(Object.assign({},user,state)) //merge two objects
//console.log(newobj);

//console.log({...user, ...state}); //spread operator = merge two objects

// console.log(Object.keys(state)); //return keys of object
// console.log(Object.values(state)); //return values of object
console.log(Object.entries(state)); //return entries of object, meaans it return key value pair in array
// console.log((user.hasOwnProperty("studiedAt"))); //return true if key is present in object

let {state1, state2} = state; //destructuring
// console.log(state1);  //this is easy way to get value of key from object

let {state1 : s1, state2 : s2} = state; //we can also rename key while destructuring
console.log(s2); 

