/* Context  	                    this Refers To

Global Scope	                    window (or globalThis in Node.js)
Object Method	                    The object that owns the method
Regular Function	                window (or undefined in strict mode)
Arrow Function	                    Lexical scope (inherits from surrounding)
Constructor Function	            The new object being created
Event Listener	                    The element that triggered the event
call(), apply(), bind()	            Explicitly set value */

// ______________________________________________________________________________________________________________________________________________________

//this in object method

const obj = {
  username : "kuldeep",
  age : 21,
  greet: function(){
    console.log(`Hello ${this.username}`);  // this is not hardcoded value, it's current context value so the value may chnage if we change the value of username
    //console.log(this) // o/p: { username: 'kuldeep', age: 21, greet: [Function: greet] }
  }
  //console.log(this) // This line is wrongly placed. You can't put code directly inside an object literal

}
 
//console.log(obj.greet()); // o/p: Hello kuldeep
// obj.username ="Sahil"
// console.log(obj.greet()); // o/p: Hello Sahil

//console.log(this); // o/p: {} // empty object

// ____________________________________________________________________________________________________________________________________________________  

// this in function 

const test= function() {
  let username = "cooldeep";
  console.log(this); 
  }

// console.log(test()) // o/p: <ref *1> Object [global] { ... } // global object

  /*What it means: In Node.js, when you call a regular function (not tied to an object), 
  this inside that function refers to the global object. 
  The long object dump is the actual structure of Node’s global object.
  
  So what's this global object?
  In the browser → global object is window
  In Node.js → global object is global
  */

// ____________________________________________________________________________________________________________________________________________________

// this in arrow function

const test2 = () => {
  let username = "cooldeep";
  console.log(this); // o/p: [Object: null prototype] {} // empty object
  }

 console.log(test2()) // o/p: undefined


/*
_____________________________________________________________________________________________________________________________________
                                                             Key Takeaways:                                                        |
                               /* Arrow functions don’t work well with this in objects bcuz they don’t have their own this.
                               They take this from where they were defined.
                                 In Node.js, the top-level this is just {} (empty object). 

                                Regular functions have their own this.  When called normally, this becomes the 
                                global object in Node (global).


                                Type	                                              What is this?
                                Arrow function	                            Inherits from outside → {}
                                Regular function	                          Own this → global in Node
                                                  
_____________________________________________________________________________________________________________________________________|
*/                                        
                                                   // ARROW FUNCTION BASIC SYNTAX



// Explicit return in arrow function

const add = (n1, n2)=>{
  return n1+n2;     // explicit return. 
}
// console.log(add(2,3)); // o/p: 5


// Implicit return in arrow function

const add2  = (n1,n2) => (n1 + n2)
console.log(add2(2,3));  // o/p: 5

//Obj in arrow function

const add3  = (n1,n2) => ({username : "kuldeep", age : 21})
console.log(add3(2,3));  // o/p: { username: 'kuldeep', age: 21 }

