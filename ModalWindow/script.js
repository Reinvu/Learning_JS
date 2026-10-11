const main = document.querySelector(".main")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector("#closeBtn")
const modalName = document.querySelector("#modalName")
const modalAge = document.querySelector("#modalAge")
const modalHobby = document.querySelector("#modalHobby")


const users = {
    "1": { name: "Alex", age: "23 года", hobby: "chess" },
    "2": { name: "Ali", age: "18 лет", hobby: "football" },
    "3": { name: "Dafna", age: "20 лет", hobby: "dances" }
}

function openModal(event) {
    const userId = event.target.dataset.id
    const user = users[userId]

    if(user) {
        modalName.textContent = user.name
        modalAge.textContent = user.age
        modalHobby.textContent = user.hobby

        modal.classList.add("show")
    }
}

function closeModal() {
    modal.classList.remove("show")
}



main.addEventListener("click", (event) => {
    if(event.target.classList.contains("button")) {
        openModal(event)
    }
})

closeBtn.addEventListener("click", closeModal)

window.addEventListener("click", (event) => {
    if(event.target === modal) {
        closeModal()
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape") {
        closeModal()
    }
})
