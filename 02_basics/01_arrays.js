//array
const myArry = [0, 1, 2, 3, 4, 5];
const myHeros = ["Batman",  "Superman", "Spiderman", "Ironman"];
const myArry2 = new Array(1, 2, 3, 4, 5);
console.log(myArry[0]);

//Array methods 

myArry.push(9); //add the element in end 
myArry.push(5); 
myArry.pop(); //remove the last element in array
myArry.unshift(78); //add the element in start of array
myArry.shift(); //remove the element in start
console.log(myArry);

console.log(myArry.includes(3)); //checks if this element is present in array or not
console.log(myArry.indexOf(4)); //returns the index of element if it is present in array otherwise returns -1

const newArr = myArry.join()
console.log(newArr);
console.log(typeof(newArr));

//slice and splice

console.log("A", myArry);

const myArry3 = myArry.slice(2, 5); //slice(start, end) it will return the new array from start index to end index-1 and it will not change the original array
console.log("B", myArry);

const myArry4 = myArry.splice(1,3); //splice(start, deleteCount) it will return the deleted elements and it will change the original array by removing the elements from start index to start index + deleteCount - 1
console.log("C", myArry);
console.log(myArry4)