const accountId = 6789;
let accountEmail = "rae@gmail.com";
accountPassword = "12345";
accountCity = "Karachi";
let accountState;
// accountId = 1234; not allowed because accountId is a constant

/* 
Prefer not to use var, because of its function scope. 
It can lead to unexpected behavior.
*/
accountEmail = "raees@gmail.com";
accountPassword = "54321";
accountCity = "Lahore";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/* number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined 
symbol => unique
*/
console.log(typeof "raees");
