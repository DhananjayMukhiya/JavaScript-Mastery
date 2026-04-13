
/*
╔══════════════════════════════════════════════════════════════════╗
║           OBJECT-ORIENTED PROGRAMMING (OOP) IN JAVASCRIPT        ║
╚══════════════════════════════════════════════════════════════════╝

CLASS
    - Blueprint for creating objects
    - Introduced in ES6

OBJECT
    - Instance of a class
    - Contains properties and methods

CONSTRUCTOR
    - Special method called when object is created
    - Used to initialize properties

KEY OOP CONCEPTS:

    1. ENCAPSULATION
        - Bundling data (properties) and methods together
        - Using 'this' keyword to access object properties

    2. INHERITANCE
        - Child class inherits from parent class
        - Uses 'extends' keyword
        - Uses 'super()' to call parent constructor

    3. POLYMORPHISM
        - Method overriding in child class
        - Same method behaves differently

    4. ABSTRACTION
        - Hiding complex implementation details
        - Showing only essential features

📌 OTHER FEATURES:

    - STATIC METHODS: Called on class, not instances
    - GETTERS/SETTERS: Control access to properties
    - PRIVATE FIELDS: #fieldName (ES2022)

📌 WAYS TO CREATE OBJECTS:
    1. Object Literal: {}
    2. Factory Function
    3. Constructor Function
    4. ES6 Class

*/


// **************************************************************

// const user = {
//     userName: "Dhananjay",
//     loginCount: 10,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.userName}`);
//         console.log(this);
//     }
// }

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function user(username, loginCount, loggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.loggedIn = loggedIn

    return this
}

const userOne = new user("Dhananjay", 10, true)
const userTwo = new user("CodeAstron", 11, false)

console.log(userOne);
console.log(userTwo);

