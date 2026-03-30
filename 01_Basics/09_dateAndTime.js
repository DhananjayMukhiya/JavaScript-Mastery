let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 3, 4);
// let myCreatedDate = new Date("2023-01-13");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


// Date Get Methods
// let date = new Date();

// console.log(date.getFullYear()); // 2026
// console.log(date.getMonth());    // 0–11
// console.log(date.getDate());     // day
// console.log(date.getDay());      // 0–6 (Sunday=0)

//Time Get Methods
// console.log("Time start here");

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());