let input = document.querySelector("#input")
let select = document.querySelector("#select")
let save = document.querySelector("#save")
let reset = document.querySelector("#reset")
let text = document.querySelector("#text")
let classText = document.querySelector(".text")


save.addEventListener("click", () => {
    if(input.value === ""){
        alert("Enter the user name")
        return
    }
    let box = {}
    box.name = input.value
    box.tema = select.value
    let json1 = JSON.stringify(box)
    localStorage.setItem("user", json1)
    let json2 = localStorage.getItem("user")
    let user = JSON.parse(json2)
    text.textContent = user.name
    classText.className = `text ${user.tema}`
})

reset.addEventListener("click", () => {
    localStorage.clear()
})
