let card = document.querySelector(".card")
let text = document.querySelector("#text")
let boxButton = document.querySelector(".boxButton")
let calm = document.querySelector("#calm")
let attention = document.querySelector("#attention")
let stop = document.querySelector("#stop")

function reset() {
    card.className = "card default"
    text.textContent = "text"
}

boxButton.addEventListener("click", (event) => {
    let state = event.target.dataset.state
    text.textContent = state
    card.className = `card ${state}`
})

card.addEventListener("dblclick", () => {
    reset()
})

card.addEventListener("contextmenu", (event) => {
    event.preventDefault()
    card.className = "card menu"
})

document.addEventListener("keydown", (event) => {
   if(event.key == "Escape"){
        reset()
   }
})