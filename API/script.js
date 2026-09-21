let listUsers = document.querySelector("#listUsers")
let load = document.querySelector("#load")

async function fetchUsers() {
    const url = "https://jsonplaceholder.typicode.com/users"
    
    try{
        listUsers.innerHTML = "Loading..."
        const response = await fetch(url)

        if(!response.ok) {
            console.log("Ошибка с ответом")
        }
        const users = await response.json()

        renderUsers(users)

        

    }catch(error){
        console.log("Ошибка загрузки данных:", error)
    }
}

function renderUsers(array) {
    listUsers.innerHTML = ""
    array.forEach((user) => {
        listUsers.innerHTML += `
            <div class="user">
                <p>Имя: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <p>Номер телефона: ${user.phone}</p>
            </div>
        `
    })
}

load.addEventListener("click", () => {
    fetchUsers()
})
