// (1) if

// if(condition) {
//     // expretion
// }

const isUserLoggedIn = true

if (isUserLoggedIn) {
    // console.log(`Yes, user is logged in`);
}

if (2 == "2") {
    // console.log("executed");
}
if (2 === "2") {
    // console.log("executed"); // not executed
}

if (2 != 3) {
    // console.log("executed");
}

// (2) if-else

const temperature = 60

if (temperature < 50) {
    // console.log("less than 50");
} else {
    // console.log("Temperature is greater than 50");
}

const score = 200

if (score > 100) {
    let power = "fly"
    // console.log(`User power: ${power}`)
}

// (3) else-if

const balance = 400

// if(balance > 500) console.log("test"); // not reccomend

if (balance < 500) {
    // console.log("less than 500");
} else if (balance < 750) {
    // console.log("less than 750");
} else if (balance < 1000) {
    // console.log("less than 1000");
} else {
    // console.log("equal or greater than 1000");
}

// real example

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmial = true

if (userLoggedIn && debitCard) {
    // console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmial) {
    // console.log("User logged in");
}

// (4) switch

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3

// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// (5) Nullish coalescing operator (??): nill undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

// console.log(val1);


// (6) Terniary operator

// condition ? true : false

const teaPrice = 100
// teaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");