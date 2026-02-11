// javascript is dynamically typed language

const { use } = require("react");

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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 
Stack (Primitive) = we get a copy of the variable we declare. It is stored in the stack memory.
Heap (Reference/Non primitive) = we get a reference of the og value 
*/

let myYouTubeChannel = "ricehehhheh";
let anotherChannel = myYouTubeChannel;
anotherChannel = "coddecode"; //stack
console.log(anotherChannel);
console.log(myYouTubeChannel);

let userOne = {
  email: "user@gmail.com",
  upi: "user@okaxis", //heap
};

let userTwo = userOne;
userTwo.email = "userTwo@google.com";
console.log(userOne.email);
console.log(userTwo.email);
