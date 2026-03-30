"use strict"; //treat all js code as newer version

//alert("hello"); //we are using nodejs, not browser

// console.log(5 + 4)
// console.log("Dhananjay")

//1. Primitive Data Types

let name = "Dhananjay"
let age = 21
let isLoggedIn = false

//number => 2 to power 53

//bigint
let bigNumber = 12345678901234567890n;

let x;
// console.log(x);
//undefined

//Null
let data = null;

//Symbol
let id = Symbol("id");

//2. Non-Primitive (Reference Types)

//(1) Object
let user = {
  name: "Rahul",
  age: 25
};

//(2) Array
let fruits = ["apple", "banana", "mango"];

//(3) Function
function greet() {
  console.log("Hello");
}

//Important Concept: typeof

console.log(typeof "hello"); // string
console.log(typeof 123);     // number
console.log(typeof true);    // boolean
console.log(typeof null);    // object (JS bug)
console.log(typeof undefined); //undefined

// Quick Summary Table

// | Type      | Example       |
// | --------- | ------------- |
// | Number    | 10, 3.14      |
// | String    | "Hello"       |
// | Boolean   | true / false  |
// | Undefined | let x;        |
// | Null      | null          |
// | BigInt    | 123n          |
// | Symbol    | Symbol()      |
// | Object    | {name: "A"}   |
// | Array     | [1,2,3]       |
// | Function  | function() {} |
