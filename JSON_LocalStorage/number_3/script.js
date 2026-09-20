let studentsList = document.querySelector("#studentsList")
let addStudent = document.querySelector("#addStudent")
let clear = document.querySelector("#clear")

let students = [
    {name: "Alex"},
    {name: "Ali"},
    {name: "Max"}
]

function addArrayInStorage(array) {
    localStorage.setItem("students", JSON.stringify(array))
}

function getArray() {
    studentsList.innerHTML = ""

    let students = localStorage.getItem("students")
    students = JSON.parse(students)

    students.forEach((student) => {
        studentsList.innerHTML += `
        <p>${student.name}</p>
        `
    })
}

addStudent.addEventListener("click", () => {
    let newName = prompt("Введите имя студента:")
    let newStudent = {
        name: newName
    }
    students.push(newStudent)
    addArrayInStorage(students)
    getArray()
})

clear.addEventListener("click", () => {
    localStorage.clear()
    studentsList.innerHTML = ""
})

addArrayInStorage(students)
getArray()
