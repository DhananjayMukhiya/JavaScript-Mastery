const fullName = "Dhananjay Mukhiya"
const repoCount = 50

// console.log(fName + repoCount +"value");

//string interpolation
console.log(`Hello my name is ${fullName} and my repo count is ${repoCount}`);

let name = "Rahul";
let city = 'Patna';
let msg = `Hello`;

let fName = new String('       Dhananjay   ');

// 2. String Methods (MOST IMPORTANT)

// (1) length
// console.log(fName.length); // 9

// (2) toUpperCase() / toLowerCase()
// console.log(fName.toUpperCase()); // DHANANJAY
// console.log(fName.toLowerCase()); // dhananjay

// (3) trim() (spaces remove)
// console.log(fName.trim());

// (4) slice()
// let str = "JavaScript";
// console.log(str.slice(0, 4)); // Java
// console.log(str);

// (5) substring()
// let str = "JavaScript";
// console.log(str.substring(0, 4)); // Java

// (6) replace()
// let str = "Hello World";
// console.log(str.replace("World", "JS"));
// console.log(str);

// (7) includes()
// console.log(str.includes("World")); // true

// (8) startsWith() / endsWith()
// let str = "JavaScript";
// console.log(str.startsWith("Java")); // true
// console.log(str.endsWith("Script")); // true

// (9) split() (string → array)
// let str = "apple,banana,mango";
// console.log(str.split(","));

// String Concatenation

let a = "Hello";
let b = "World";

// console.log(a + " " + b);
// console.log(`${a} ${b}`);

//String Interpolation (Important)
let myName = "Rahul";
// console.log(`Hello ${myName}`);

// Escape Characters

// let str = "He said \"Hello\"";
// console.log(str);

// Access Characters
// let str = "Hello";
// console.log(str[0]); // H
// console.log(str.charAt(1)); // e

// Immutability (IMPORTANT)
let str = "hello";
str[0] = "H"; // change nahi hoga
console.log(str); // hello