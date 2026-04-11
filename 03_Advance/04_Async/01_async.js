// setTimeout(() => {
//     console.log("Dhananjay");
// }, 2000)


const sayName = () => {
    console.log("Dhananjay");
}

const changeText = () => {
    document.querySelector('h1').innerHTML = "Dhananjay Mukhiya"
    console.log("CHANGED");
}

// setTimeout(sayName, 2000)
const changeMe = setTimeout(changeText, 2000)

const stopBtn = document.querySelector('#stop')

stopBtn.addEventListener('click', () => {
    clearTimeout(changeMe)
    console.log("STOPPED");
})