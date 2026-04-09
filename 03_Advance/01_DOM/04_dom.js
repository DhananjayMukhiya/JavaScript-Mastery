// add element

function addLanguage(language) {
    const li = document.createElement('li')
    li.textContent = language

    document.querySelector('.language').appendChild(li)
}

addLanguage("Java")
addLanguage("Python")
addLanguage("Typescript")

function addOptiLanguage(langName) {
    const li = document.createElement('li')
    const addText = document.createTextNode(langName)
    li.appendChild(addText)

    document.querySelector('.language').appendChild(li)
}

addOptiLanguage("C")

// edit element

const secondLang = document.querySelector("li:nth-child(2)")

secondLang.style.color = "red"

const newli = document.createElement('li')
newli.appendChild(document.createTextNode("Swift"))

secondLang.replaceWith(newli)

// remove element

const lastLang = document.querySelector('li:last-child')
lastLang.remove()