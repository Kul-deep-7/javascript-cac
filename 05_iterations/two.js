/*while loop
syntax:

while (condition) {
    
}

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

How it works:
Checks the condition first

If true ✅ → runs the block

If false ❌ → skips the loop entirely
*/


let a=2 //initialization
while (a<=20) {
   // console.log(`Table of 2 = ${a}`);
    a= a+2  //increment by 2
}


//printing an array
let b=[2,4,3,5,3,6,7,1]
let i=0
while (i<=b.length) {
   // console.log(b[i]);
    i=i+1
}

/* do while
do {
    
} while (condition);

How it works:
Runs the code block first, even if the condition is false

Then checks the condition

If true ✅ → loops again

If false ❌ → stops
*/

let score = 11; //will print 11 cuz do while runs first then checks the condition
do {
    console.log(`score is ${score}`);
    score=score+1
} while (score<=10);


/* 
Key Difference:

Feature     	        while	                        do...while
Condition check	        Before running the loop	        After running the loop
Runs at least once?	    ❌ Only if condition is true	  ✅ Always runs once
*/
