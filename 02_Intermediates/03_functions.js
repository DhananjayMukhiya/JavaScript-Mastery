function sayGreeting() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayGreeting()
// sayGreeting // Reference

function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2

    // console.log("Dhananjay"); // never executes
}

// addTwoNumbers(2, 3) // 5
// addTwoNumbers(2, "3") // 23
// addTwoNumbers(2, "a") // 2a
// addTwoNumbers(2, null) //2

// addTwoNumbers(4, 6);
const result = addTwoNumbers(4, 6);
// console.log(result);


function loginUserMessage(username = "Shyam") {
    if (!username) {
        console.log("Please enter a username!");
        return
    }
    return `${username}, just logged in`
}

// console.log(loginUserMessage("Dhananjay"));
// console.log(loginUserMessage());


// ********************************* Part - 02 *****************************************

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(100, 400, 200, 300, 999, 99));

const user = {
    userName: "Dhananjay",
    price: 999
}

function handleObject(anyObject) {
    // console.log(anyObject);
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     userName: "jay",
//     price: 99
// })

const myNewArray = [200, 300, 100]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

// ************************************* Part - 03 ******************************************

// let a = 10
// const b = 20
// var c = 30

// var c = 300

let a = 100

if (true) {
    let a = 10
    const b = 20
    // var c = 30

    // console.log(a);

}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const userName = "Dhananjay"

    function two() {
        const website = "Youtube"
        console.log(userName);
    }

    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Dhananjay"
    if (username === "Dhananjay") {
        const website = "Youtube"
        // console.log(username, website);
    }
    // console.log(website);
}

// console.log(username);


// *********************** Interesting *****************************************
// console.log(addOne(5)); 

function addOne(num) {
    return num + 1
}

// console.log(addTow(5)); error

const addTow = function (num) {
    return num + 2
}

// console.log(addTow(5));


// ************************************* Part - 04 **************************************

const newUser = {
    userName: "Dhananjay",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

// newUser.welcomeMessage()
// newUser.userName = "Jay"
// newUser.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Dhananjay"
//     console.log(this.username);
// }

// chai()


const chai = () => {
    let username = "Dhananjay"
    // console.log(this.username);
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return
const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(2, 4));

