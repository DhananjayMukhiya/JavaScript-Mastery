// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        // console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    // console.log("Promise consumed");
})


// ********************************************************


new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task 2 is complete');
        resolve()
    }, 1000)
}).then(function () {
    // console.log("Promise 2 consumed");
})

// ********************************************************

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {

        resolve({ username: "jay", email: "jay@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    // console.log(user);
})

// ********************************************************

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Dhananjay", email: "dhananjay@example.com" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        // console.log(username);
    })
    .catch((error) => {
        // console.log(error);
    })
    .finally(() => {
        // console.log("The promise is either resolve or rejected");
    })


// ********************************************************

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", password: 123 })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const responce = await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()