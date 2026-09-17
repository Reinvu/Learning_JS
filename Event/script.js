// // №1
// let card = document.querySelector("#card")
// let text = document.querySelector("#text")


// card.addEventListener("click", () => {
//     text.textContent = "Clicked!"
// })

// card.addEventListener("dblclick", () => {
//     text.textContent = "Double click!"
// })

// card.addEventListener("mouseenter", () => {
//     card.className = "card"
// })

// card.addEventListener("mouseleave", () => {
//     card.className = ""
// })

// // №2
// let input = document.querySelector("#in")
// let out = document.querySelector("#out")

// input.addEventListener("keydown", (event) => {
//     console.log(event.key)
//     if(event.key === "Enter"){
//         out.innerHTML += `
//             <h1>${input.value}</h1>
//         `
//     }
//     if(event.key === "Escape"){
//         input.value = ""
//     }
// })

// // №3
// let reg = document.querySelector("#reg")
// let name = document.querySelector("#name")
// let email = document.querySelector("#email")
// let message = document.querySelector("#message")

// reg.addEventListener("submit", (event) => {
//     event.preventDefault()

//     if(name.value === "" || email.value === ""){
//         alert("Пожалуйста заполните все поля!")
//     }else{
//         message.innerHTML = `
//             <h1>Registration successful!</h1>
//         `
//     }
// })

// №4

let students = [
    {
        id: 1,
        name: "Alex",
        age: 16,
        isActive: true
    },
    {
        id: 2,
        name: "Max",
        age: 18,
        isActive: false
    },
    {
        id: 3,
        name: "Ali",
        age: 20,
        isActive: true
    },
]

const addStudent = (name, age) => {
    let student = {
        id: students.length + 1,
        name: name,
        age: age,
        isActive: false
    }
    students.push(student)
}
addStudent("Kevin", 22)

students.forEach((student) => {
    console.log(student.name)
})


let activeStudents = students.filter((student) => {
    return student.isActive === true
})
console.log("Активные: ")
activeStudents.forEach((student) => {
    console.log(student.name)
})

const findStudent = (id) => {
    let studentFind = students.find((student) => {
        return student.id == id
    })
    console.log(studentFind)
}

findStudent(2)

