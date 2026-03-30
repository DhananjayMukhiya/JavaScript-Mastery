// 1. Number Basics
// let num = 10
// let float = 10.5

const scrore = 400
// console.log(scrore);

const balance = new Number(100)
// console.log(balance);

// console.log(typeof num);
// console.log(typeof float);

// 2. Special Numbers
// console.log(1 / 0);

// 3. Number Methods

// (1) toFixed()
// let num = 12.345;
// console.log(num.toFixed(2)); // "12.35"

// (2) toPrecision()
// console.log(num.toPrecision(3)); // "12.3"

// (3) toString()
// let num = 100;
// console.log(num.toString()); // "100"
// console.log(typeof num.toString());

// 4. Convert to Number

// console.log(Number("123"));     // 123
// console.log(parseInt("123px")); // 123
// console.log(parseFloat("12.5")); // 12.5

// *************************Math*******************************

// console.log(Math);

// 1. Basic Methods
// console.log(Math.abs(-5)); // 5
// console.log(Math.round(4.6)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.1));  // 5
// console.log(Math.trunc(4.9)); // 4

// 2. Min / Max

// console.log(Math.min(1, 2, 3)); // 1
// console.log(Math.max(1, 2, 3)); // 3

// 3. Random Number

// console.log(Math.random()); // 0 to 1

let random = Math.floor(Math.random() * 10) + 1;
// console.log(random); // 1 to 10

let min = 5;
let max = 15;

// let num = Math.floor(Math.random() * (max - min + 1)) + min;

let otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);

// 4. Power & Root
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.sqrt(16));  // 4