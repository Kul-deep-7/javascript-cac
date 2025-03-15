// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Kuldeep",
//     "full name": "Kuldeep Jangid",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Pune",
//     email: "kuldeep@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Tuesday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "kuldeep@vs.com"
// Object.freeze(JsUser)
// JsUser.email = "cool&deep.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const person = {
    name : "kuldeep",
    age : 21,
    gc : function(){
        console.log("Hello this is Urga")
    }
};

console.log(person.gc());