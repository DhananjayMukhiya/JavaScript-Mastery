// create new element

const div = document.createElement('div')
console.log(div);

div.className = 'main'
div.id = Math.floor(Math.random() * 10 + 1)
div.setAttribute("title", "generate title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
div.style.borderRadius = "10px"
// div.innerText = "Code Astron"

const addText = document.createTextNode("Code Astron")
div.appendChild(addText)

document.body.appendChild(div)