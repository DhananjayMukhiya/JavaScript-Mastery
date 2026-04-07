// Details knowledge about objects

 // singleton
//  Object.create

 // object literals

 const mySym = Symbol("key1")
 
 const jsUser = {
    name: "Dhananjay",
    "full Name": "Dhananjay Mukhiya",
    age: 21,
    location: "Patna",
    email: "dhan@jay.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "mykey1"
 }

//  console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.full Name); // not possible
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "Dhananjay@kumar.ai"
// Object.freeze(jsUser)

jsUser.name = "Raushani"

// console.log(jsUser.email);
// console.log(jsUser.name);
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS User");
}
jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// ********************************************* Part - 02*************************************************

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Jay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@dhananjay.ai",
    fullName: {
        userFullName: {
            firstName: "Dhananjay",
            lastName: "Mukhiya"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName?.userFullName);
// console.log(regularUser?.fullName?.userFullName?.firstName);
// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "jay1@patna.in"
    },
    {
        id: 2,
        email: "jay2@patna.in"
    },
    {
        id: 3,
        email: "jay3@patna.in"
    },
    {
        id: 4,
        email: "jay4@patna.in"
    }
]

// console.log(users[0].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));


// ************************ Part - 03 ***********************************************************

const course = {
    courseName: "JS in hindi",
    price: 999,
    courseInstructor: "Dhananjay"
}

// course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);