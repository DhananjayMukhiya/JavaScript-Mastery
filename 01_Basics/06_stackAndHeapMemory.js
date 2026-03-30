// Stack (Primitive)
// Heap (Non Primitive)

let myYoutubeName = "CodeAstraX"

let anotherName = myYoutubeName
anotherName = "JayCodeAstra"

// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    email: "codeastra@jay.com",
    upi: "codeastra@jay"
}

let userTwo = userOne

userTwo.email = "jay@code.com"

console.log(userOne.email);
console.log(userTwo.email);