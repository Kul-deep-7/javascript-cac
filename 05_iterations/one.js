/* for loop example

for (let j = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
    
What's Happening:
let index = 0. Starts with index at 0.
index < 10. As long as index is less than 10, the loop runs.
index++. After each loop, index increases by 1 (post-increment)

*/

//printing array
const arr=[2,3,4,5,6,7,1,8,3,5]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  //  console.log(element);
    
}


//understanding nested loops
for (let i = 0; i < 5; i++) {
  //  console.log(`Outer loop value is ${i}`);
    
    for (let j = 0; j < 3; j++) {
      //  console.log(`Inner loop value is ${j} & inner loop ${i}`);
              
    }    
}

//printing tables
for (let i = 0; i < 5; i++) {
   // console.log(`Outer loop value is ${i}`);
    
    for (let j = 0; j < 3; j++) {
        // console.log(i + "X" + j + "=" + i*j);
                      
    }    
}

//break & continue
//break — Stops the loop completely (“I’m done! Stop the loop!”)

for (let index = 0; index < 5; index++) {
    if(index==2){
      //  console.log("hey, 2 reached");
        break;
    }
    //console.log(index);
    
}


//continue = “Skip this one, go to next!

for (let index = 0; index <=5; index++) {
    if (index == 2) {
        console.log("Hey, 2 reached");
        continue
    }
    console.log(index);
    
}

/*break: You're in a boring class, teacher asks you to stay till 5 PM, but at 3 PM you're like “I’ve had enough” and you leave the room 🏃💨

continue: You stay in class but just skip answering one question the teacher asked — you're like “Not this one, next!” 
*/

/*
            Summary Table
Concept	        What it does	            Use case
for loop	    Repeats a block of code	    When you know how many times to loop
break	        Stops the loop entirely	    Exit early
continue	    Skips one iteration,        Skip specific conditions
                goes to next round	

*/