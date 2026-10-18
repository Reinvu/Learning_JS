const inputName = document.querySelector("#inputName")
const inputPrice = document.querySelector("#inputPrice")
const btnAddWish = document.querySelector("#btnAddWish")
const numberRecords = document.querySelector("#numberRecords")
const wishList = document.querySelector("#wishList")

let wishs = getWishs()

function getWishs() {
    return JSON.parse(localStorage.getItem("wishs")) || []
}

function setWishs(wishs) {
    localStorage.setItem("wishs", JSON.stringify(wishs))
}

function renderWishs() {

    numberRecords.textContent = `Записей ${wishs.length}`

    if(wishs.length === 0) {
        wishList.innerHTML = `<p class="empty-msg">Список желаний пуст</p>`
    } else{
        wishList.innerHTML = ""
    }

    wishs.forEach((wish) => {
        wishList.innerHTML += `
            <div class="box ${wish.isBought ? "bought" : ""}">
                <h3>${wish.name}</h3>
                <p>${wish.price}</p>
                <div class="actions">
                    <button class="payBtn" data-id="${wish.id}">${wish.isBought ? 'Отменить' : 'Куплено'}</button>
                    <button class="deleteBtn" data-id="${wish.id}">Удалить</button> 
                </div>   
            </div>
        `
    })
}

btnAddWish.addEventListener("click", () => {
    const name = inputName.value.trim()
    const price = Number(inputPrice.value)

    if(name.length === 0) {
        alert("Ошибка: Название не может быть пустым или состоять только из пробелов!")
        return
    }

    if(price <= 0 ) {
        alert("Ошибка: Цена не может быть меньше нуля или отсутствовать!")
        return
    }

    const newWish = {
        id: crypto.randomUUID(),
        name: name,
        price: price,
        isBought: false
    }

    wishs.push(newWish)
    setWishs(wishs)
    renderWishs()

    inputName.value = ""
    inputPrice.value = ""
})

wishList.addEventListener("click", (event) => {
    if(event.target.classList.contains("deleteBtn")) {
        const id = event.target.dataset.id
        wishs = wishs.filter((wish) => {
            return wish.id != id
        })

        setWishs(wishs)
        renderWishs()
    }

    if(event.target.classList.contains("payBtn")) {
        const id = event.target.dataset.id
        const wish = wishs.find((wish) => {
             return wish.id === id
        })
        if(wish) {
            wish.isBought = !wish.isBought
            setWishs(wishs)
            renderWishs()
        }
    }
})

renderWishs()
