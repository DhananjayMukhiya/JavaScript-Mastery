//JavaScript me type conversion (conversion operations) ka matlab hota hai ek data type ko dusre type me convert karna.

// 2 Types of Conversion
// 1. Implicit Conversion (Type Coercion)
// JS automatically convert karta hai

// 2. Explicit Conversion
// Hum manually convert karte hain

//1. Implicit Conversion (Auto)

let result = "5" + 2;
//console.log(result); // "52" (string ban gaya)
//console.log(typeof result);

let firstName = "Dhananjay";
let lastName = " Mukhiya";

// console.log(firstName + lastName); //Dhananjay Mukhiya
// console.log(firstName - lastName); //NaN
// console.log(firstName * lastName); //NaN
// console.log(firstName / lastName); //NaN

// console.log(2 + "3" + 4); // 234
// console.log("2" + 3 + 4); // 234
// console.log("2" - 3 + 4); // 3
// console.log("2" + 3 - 4); // 19

let resultTwo = "5" - 2;
//console.log(resultTwo); // 3 (number ban gaya)
//console.log(typeof resultTwo);

// + → mostly string bana deta hai
// - * / → number bana dete hain

// 2. Explicit Conversion (Manual)

// (1) String to Number

let str = "123";

let num1 = Number(str);
let num2 = parseInt(str);
let num3 = parseFloat("12.5");

//// let strTwo = "123abc"
// let strTwo = null
// let strTwo = undefined

// console.log(num1);
// console.log(typeof num1, typeof num2, typeof num3);

let strTwo = true

let valueNum = Number(strTwo)
//console.log(typeof valueNum);
//console.log(valueNum);

// "22" => 22
// "22abc" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN

// (2) Number to String

let num = 100;

let str1 = String(num);
let str2 = num.toString();

// console.log(str1, str2);
// console.log(typeof str1, typeof str2);

// (3) To Boolean

//console.log(Boolean(1));      // true
//console.log(Boolean(0));      // false
//console.log(Boolean(""));     // false
//console.log(Boolean("hello"));// true

//Truthy & Falsy Values

//Falsy Values:

// false
// 0
// ""
// null
// undefined
// NaN

//Baaki sab Truthy hai