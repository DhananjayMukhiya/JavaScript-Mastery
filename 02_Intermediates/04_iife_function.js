// *************************** Part - 05 ****************************************

// Immediately Invoked Function Expressions(IIFE)

(function myChai() {
    console.log(`DB CONNECTED`);
})();

// (let aurChai = function() {
//     console.log(`DB CONNECTED TWO`);
// })();

((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("Dhananjay")
