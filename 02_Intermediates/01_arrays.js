const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["saktiman", "balveer"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[0]); // 0
// console.log(myHeros[1]); // balveer
// console.log(myArr2[3]); // 4

let arr = [10, 20, 30, 40, 50];

console.log(arr);

// Basic Properties

// (1) length
// console.log(arr.length);

// Add / Remove Elements

// (1) push() → end me add
arr.push(60);
console.log(arr);

// (2) pop() → end se remove
arr.pop();
console.log(arr);

// (3) unshift() → start me add
arr.unshift(0)
console.log(arr);

// (4) shift() → start se remove
arr.shift();
console.log(arr);

// Array methods

// (1) map() (transform array)
let result = arr.map(num => num * 2);
console.log(result);

// (2) filter() (condition based)
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = array.filter(num => num % 2 === 0)
console.log(even);

// (3) reduce() (sum, total)
let arrayTwo = [1, 2, 3]

let sum = arrayTwo.reduce((acc, curr) => acc + curr, 0)
console.log(sum);

// (4) find()

const marks = [80, 83, 89, 88, 84]

let val = marks.find(num => num > 85);
console.log(val);

// (5) includes()
let fruts = ["apple", "banana"];

console.log(fruts.includes("apple")); // true
console.log(fruts.includes("orange")); // flase

// (6) slice() vs splice()

let num = [0, 1, 2, 3, 4, 5]

console.log(num.slice(1, 3))
console.log(num);

num.splice(1, 2)
console.log(num);

// (7) Sorting

const numTwo = [2, 1, 4, 5, 0]

console.log(numTwo);
numTwo.sort();

console.log(numTwo);

// (8) Array Destructuring
let number = [10, 20];

let [a, b] = number;

console.log(a, b);

// (8) Spread Operator
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

console.log(arr2);

// (8) Nested Arrays

let OriArr = [[1, 2], [3, 4]];

console.log(OriArr[0][1]); // 2