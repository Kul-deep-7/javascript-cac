const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // this will add dc_heros as a single element in marvel_heros

// console.log(marvel_heros); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]);   // flash

// const allHeros = marvel_heros.concat(dc_heros) // this will add dc_heros as a single element in marvel_heros
// console.log(allHeros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros] // this will add dc_heros as a single element in marvel_heros

// console.log(all_new_heros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  // this is a nested array

const real_another_array = another_array.flat(Infinity) // this will flatten the nested array
console.log(real_another_array);    // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("KULDEEP")) // false
console.log(Array.isArray(["KULDEEP"])) // true

console.log(Array.from("Kuldeep")) // ["K", "u", "l", "d", "e", "e", "p"]
console.log(Array.from({name: "kuldeep"})) // interesting ["undefined"]/ empty array/ []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]