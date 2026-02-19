//object literal
const mySym = Symbol('key1');
 
const person = {
    name: 'Raees',
    "full name": 'Raees Fatima',
    [mySym]: "value",
    age: 22, 
    location: 'New York',
    email: 'raees@google.com',
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday'],
}
console.log(person.email);
console.log(person["full name"]);
console.log(person[mySym]);
console.log(typeof person.mySym); 


person.email = "raeesfatima@google.com"
//Object.freeze(person); //freeze the object, no changes allowed
person.email = "raees@addbe.com";

console.log(person);


//functions 
person.greeting = function() {
    console.log("Hello, welcome to my profile");
}

person.greeting2 = function() {
    console.log(`Hi, I am ${this['full name']} and I am ${this.age} years old.`);
}

console.log(person.greeting);
console.log(person.greeting2());