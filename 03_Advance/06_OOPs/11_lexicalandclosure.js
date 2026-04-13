

function outer() {
    let username = "Dhananjay"

    function inner() {
        let lastname = "Mukhiya"
        console.log("inner", username);
    }

    inner()

    // console.log("outer", lastname);
}

// outer()

// console.log(username);

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

// const myFunc = makeFunc();
// myFunc();


// ********************************************

// document.getElementById("black").addEventListener('click', () => {
//     document.body.style.backgroundColor = "black"
// })

// document.getElementById("green").addEventListener('click', () => {
//     document.body.style.backgroundColor = "green"
// })

function clickHandler(color){
    // document.body.style.backgroundColor = color

    return function(){
        document.body.style.backgroundColor = color
    }
}

document.getElementById("black").addEventListener('click', clickHandler("black"))
document.getElementById("green").addEventListener('click', clickHandler("green"))