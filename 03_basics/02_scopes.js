                            // LOCAL & GLOBAL SCOPES
                
    /* Scope in JavaScript defines where a variable can be accessed. There are two main types:

                            Global Scope – Accessible anywhere in the program  
                            Local Scope – Only accessible inside a function or block  
                        {} - a block of code enclosed in curly braces also called block scope (let n const are block scoped, var is function scoped).
                        Lexcial Scope - A function can access variables from its parent function or global scope. This is called lexical scoping.
                                            If a function is written inside another function, it can access variables from outer scopes 
                                            (including global scope), but outer functions can't access the inner variables.
                           
                            */
                            

//Global Scope refers to variables declared outside any function or block. These variables can be accessed anywhere in the program, including inside functions


let name = "Outer: Kuldeep" // Global Scope
function myName(){
    let name = "Cooldeep" // Local Scope
    console.log(name); // Cooldeep
}
console.log(name) // Kuldeep. This prints the global variable name
//myName() // Cooldeep. This calls the function myName and prints the local variable name

// Local Scope refers to variables declared inside a function or block. These variables can only be accessed within the function or block where they are declared

function myName1(){
    let name = "Cooldeep" // Local Scope
    console.log("INNER:", name); // 
}
//console.log(name)  // Kuldeep. This prints the global variable name
myName1() // Cooldeep. This calls the function myName1 and prints the local variable name

____________________________________________________________________________________________________________________


var c = 30;   // Global scope
let a = 300;  // Global scope

if (true) {
    let a = 10;  // Block scope (New 'a' inside if-block)
    const b = 20; // Block scope
    console.log("INNER: ", a); // 10 (Local 'a' inside block)
    
    var c = 1;   //  REDECLARING 'c' in GLOBAL scope! (var is NOT block-scoped) 
}

console.log(b); //  `b` is not accessible here because it's block-scoped (const)
console.log(a); // 300 (Global 'a' remains unchanged)
console.log(c); // 1 (Global 'c' got overwritten!)
                //var doesn’t care about {} (block scope).
                //👉 When you use var c = 1; inside if, it modifies the global c = 30; instead of creating a new c.


_____________________________________________________________________________________________________________________________________
                                                             /*Key Takeaways:                                                        |
                                var ignores block scope → It affects the global or function scope instead.                           |
                        let and const are block-scoped → They don’t modify global variables if redeclared inside {}                  |                        
                                                            The Rule to Remember:                                                    |                  
                                        var = Doesn’t care about {} → Changes the global variable.                                   |
                                        let & const = Respect {} → Keep variables separate inside blocks.                            |
_____________________________________________________________________________________________________________________________________|
*/

function one(){
    const username = "kuldeep"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "kuldeep"
    if (username === "kuldeep") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting(Hoisting) ++++++++++++++++++

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
