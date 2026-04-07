// (1) for loop

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         console.log("5 is best number");
//     }
//     // console.log("i = ", i);

// }

// for (let i = 1; i <= 10; i++) {

//     // console.log(`Outer loop value ${i}`);
//     console.log(`Table of ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(`${i} * ${j} = ${i * j}`);
//     }

// }

// let myArray = ["Dhananjay", "Shyam", "Sachin", "Devnath"]

// // console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);

// }

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i === 10) {
//         console.log("Detected 10");
//         // break
//         continue
//     }
//     console.log(`Value of i = ${i}`);
// }

// (2) while loop

// let i = 1
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// (3) do while

// let i = 11
// do {
//     console.log(i);
//     i++
// } while (i <= 20);


// *************************** Higher Order Array Loop ****************************************

// (4) for of

const arr = [0, 1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greeting = "Namaste"

// for (const greet of greeting) {
//     console.log(greet);
// }

// Maps

const map = new Map()

map.set("IN", "India")
map.set("USA", "America")
map.set("FR", "France")
map.set("IN", "India")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, '-', value);
// }

// Objects

const myObject = {
    "game1": "NFS",
    "game2": "Spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, '-', value); // TypeError: myObject is not iterable
// }

// (5) for in

const myLanguage = {
    JS: "Javascript",
    CPP: "C++",
    PY: "Python",
    RB: "Ruby"
}

// for (const key in myLanguage) {
//     // console.log(myLanguage[key]);
//     // console.log(`${key} Filename is for ${myLanguage[key]}`);

// }


let meriDuniya = ["Ram", "Sita", "Laxman"]

// for (const key in meriDuniya) {
//     console.log(key);
//     console.log(meriDuniya[key]);
// }

// for (const key in greeting) {
//     console.log(key, greeting[key]);
// }

// for (const key in map) {
//    console.log(key); // not working and no error
// }

// (6) for each

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((element, index, fullArray) => {
//     console.log(element);
//     console.log(index);
//     console.log(fullArray);
// });

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// })


// *********************************** Filter, Map and Reduce ***************************************

const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

// (7) Filter

// const myNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter( (num) => {
//     return num > 5
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter( (book) => {
//     return book.genre === "History"
// })

// const userBooks = books.filter( (book) => {
//     return book.publish >= 1995 && book.genre === "History";
// })

// console.log(userBooks);

// (8) Map

// const myNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.map( (num) => {
//     return num + 10
// })

// console.log(newNums);

// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num > 50);

// console.log(newNums); // [51, 61, 71, 81, 91]

// (9) Reduce

const myNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const sumArray = myNums.reduce((accumulator, currentValue) => {
    // console.log("accumulator:", accumulator);
    // console.log("currentValue:", currentValue);
    return accumulator + currentValue
}, 0)

console.log(sumArray);