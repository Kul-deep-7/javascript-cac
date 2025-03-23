
// Immediately Invoked Function Expressions (IIFE)
//It’s a function that runs as soon as it’s defined.


/*                         Why Use IIFE?
                    Reason	            Simple Explanation
            Avoid global pollution	    Keeps your variables private and safe inside the function
            Run code immediately	    Good for initial setup or one-time logic*/



//function/named iife. It has a name (chai), but you can't call it later.
(function chai(){    
    console.log(`DB CONNECTED`);
})();


//Anonymous iife It has no name. Most commonly used.
(function() {
    console.log("Anonymous IIFE");
  })();
  

//unnamed/arrow function iife. Uses ES6 arrow function syntax. Shorter and cleaner
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('kuldeep')


