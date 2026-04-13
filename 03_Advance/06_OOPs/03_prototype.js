// let myName = "Dhananjay      "

let fullName = "Dhananjay Mukhiya"

// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dhananjay = function(){
    console.log(`Dhananjay is present in all objects`);
}

Array.prototype.heyDhananjay = function() {
    console.log(`Dhananjay say hello`);
}

// heroPower.dhananjay()
// myHeros.dhananjay()
// fullName.dhananjay()


// myHeros.heyDhananjay()
// heroPower.heyDhananjay()

// ******************************************************

let myName = "Dhananjay      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
"Shyam ".trueLength()
"Shivam".trueLength()