const tinderUser = new Object();   //Singleton Object
const tinderUser2 = {};   //Object Literal Syntax 
tinderUser.id = 123456789;
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email: "soma@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Soma", 
            lastName: "Sarkar"
        }   
    }
}
console.log(regularUser.fullname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)
 
const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course ={
    coursename: "js in",
    price: "6789",
    courseInstructor: "rae"
}

//course.courseInstructor
 
const {courseInstructor} = course
console.log(courseInstructor); 

