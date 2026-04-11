// document.querySelector('#image1').onclick = function() {
//     alert("Hell JS")
// }

const image1 = document.querySelector("#image1")
const image2 = document.querySelector("#image2")

// image1.addEventListener('click', (e) => {
//     // alert("image1 clicked")
//     // console.log(e);
// }, false)

// types, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clintX, clintY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

const images = document.querySelector('#images')

// images.addEventListener('click', (e) => {
//     console.log("click inside the ul");
// }, false)

// image1.addEventListener('click', (e) => {
//     console.log("image1 clicked");
//     e.stopPropagation()
// }, false)

const google = document.getElementById('google')

// google.addEventListener('click', (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clicked");
// })

images.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.parentNode);

    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    // let removeIt = e.target.parentNode
    // // removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt)
})