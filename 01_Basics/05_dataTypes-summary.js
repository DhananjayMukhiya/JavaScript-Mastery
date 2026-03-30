// Primitive
// 7 types  : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.34

const loggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

const bigNumber = 5454648748765465487987n

// Reference Types(Non Primitive)
//Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]

const myObject = {
    fullName: "Dhananjay Mukhiya",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber); // bigint
console.log(typeof heros); //object
console.log(typeof myObject); //object
console.log(typeof myFunction); //function