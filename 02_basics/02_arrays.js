const marvel = ["thor", "ironman", "spiderman", "hulk", "captain america"];
const dc = ["superman", "batman", "flash", "aquaman", "wonder"];
// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeroes = marvel.concat(dc);
// console.log(allHeroes);

const allnewHeroes = [...marvel, ...dc];
// console.log(allnewHeroes);

const another_array = [1,3,5,6, [2,4,6,5], 55, [5,6,7,3,[56,7]]]; 
const real_array = another_array.flat(Infinity);
console.log(real_array);


console.log(Array.isArray("Raees"));
console.log(Array.from("Raees"));
console.log(Array.from({name: "Raees", age: 23})); //interesting 

let score1 = 100
let score2 = 200
let score3 = 300        

console.log(Array.of(score1, score2, score3));