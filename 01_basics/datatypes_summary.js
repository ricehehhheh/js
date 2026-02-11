// javascript is dynamically typed language

// Primitive types
/*
7 types (call by value)
string 
number
boolean
null
undefined 
symbol 
bigint
 */
const score = 100;
const scoreValue = 100.1;
const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false
const bigNumber = 9007199254740991n;

// Reference types or Non primitive (call by reference)
/*
object
array
function
 */
const heros = ["shaktiman", "naagraj", "doga"]; //array
let myObj = {
  name: "sachin", //object
  age: 48,
};

const myFunction = function () {
  console.log("hello world");
};

console.log(typeof outsideTemp);
console.log(typeof myFunction);
