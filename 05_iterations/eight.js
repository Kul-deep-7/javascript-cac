/*.reduce() is one of the most powerful array methods in JavaScript. It helps you 
accumulate values from an array and return a single result

SYNTAX: 
array.reduce((accumulator, currentValue) => {
    return newAccumulatorValue;
}, initialValue);

accumulator → Stores the accumulated result.

currentValue → The current element in the iteration.

initialValue → The starting value (optional but recommended).

*/
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0 )
//console.log(totalPrice);


//Find MAximum VAlue in an Array 

const numbers = [5, 12, 8, 21, 7];

const max = numbers.reduce( function (acc,curr){
    if(curr>acc){
        return curr
    }else{
        return acc
    }
} ,0 )

console.log(max); 

/*2️⃣ Iteration Breakdown: 
Step	acc (Max So Far)	curr (Current Number)	Condition (curr > acc)	Updated acc
1️⃣	    0	                    5	                ✅ Yes (5 > 0)	        5
2️⃣	    5	                    12	                ✅ Yes (12 > 5)	        12
3️⃣	    12	                    8	                ❌ No (8 < 12)	        12
4️⃣	    12	                    21	                ✅ Yes (21 > 12)	        21
5️⃣	    21	                    7	                ❌ No (7 < 21)	        21

/*  When to Use .reduce()?
Use .reduce() when: ✅ You want a single result (sum, max, count, object, etc.).
✅ You need to transform data (group, count, flatten).
✅ Other array methods (map, filter) won’t work efficiently.
*/