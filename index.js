let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0
function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let savedNumber = count + "-"
    saveEl.textContent += savedNumber
    console.log(count)
    // we want countEl variable to go back to 0
    count = 0
    countEl.textcontent = 0
}

