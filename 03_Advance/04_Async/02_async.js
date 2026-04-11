// setInterval(() => {
//     // console.log("Dhananjay", Date.now());
// }, 1000)

let intervalId; // global variable

const sayDate = () => {
    console.log("Dhananjay", new Date().toLocaleTimeString());
}

// START button
document.querySelector('#start').addEventListener('click', () => {
    if (!intervalId) { // already running na ho
        intervalId = setInterval(sayDate, 1000);
    }
});

// STOP button
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null; // reset important hai
});