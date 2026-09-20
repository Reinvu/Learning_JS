let textName = document.querySelector("#name")
let textCity= document.querySelector("#city")

let object = {
    name: "Alex",
    age: 20,
    city: "Almaty"
}

localStorage.setItem("user", JSON.stringify(object))
let user = localStorage.getItem("user")
user = JSON.parse(user)
textName.textContent = user.name
textCity.textContent = user.city
