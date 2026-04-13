// const { createElement } = require("react");

// function multipleByFive(num) {
//     return num * 5
// }

// multipleByFive.power = 2

// console.log(multipleByFive(5));
// console.log(multipleByFive.power);
// console.log(multipleByFive.prototype);

function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 200)


chai.printMe()