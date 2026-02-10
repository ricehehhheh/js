let score = "raees";
console.log(typeof score); // string
console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN (Not a Number)

/*"33" => 33
"33fgb" => NaN
true => 1
false => 0
"" => false
null => 0
undefined => NaN
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

let someNumber = 98765;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); 
