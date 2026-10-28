async function getOneProduct() {
    try{
    const response = await fetch("https://dummyjson.com/products/1")

    const product = await response.json()

    console.log(product.title)
    console.log(product.price)
    console.log(product.stock)

    } catch (error){
        console.log(error.message)
    }    
}


async function getProducts() {
    try{
    const response = await fetch("https://dummyjson.com/products?limit=5")

    const data = await response.json()

    console.log(data)
    data.products.forEach(product => {
        console.log(`Название: ${product.title}, Цена: ${product.price}, Количество: ${product.stock}`)
    }) 
    
    } catch (error){
        console.log(error.message)
    }    
}



async function addProduct() {
    try{
    const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Gaming Mouse",
            price: 150,
            stock: 20
        })
    })

    const data = await response.json()

    console.log(`ID: ${data.id}, Название: ${data.title}, Цена: ${data.price}, Количество: ${data.stock}`)
    } catch (error){
        console.log(error.message)
    }    
}



async function addPost() {
    try{
    const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Изучаем JavaScript",
            body: "Сегодня мы научились работать с API",
            userId: 5
        })
    })

    const data = await response.json()

    console.log("Пост создан!")
    console.log("ID:", data.id)
    console.log(data.title)
    } catch (error){
        console.log(error.message)
    }    
}



async function putProduct() {
    try{
    const response = await fetch("https://dummyjson.com/products/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Gaming Keyboard",
            price: 450,
            stock: 30
        })
    })

    const data = await response.json()

    console.log(`ID: ${data.id}, Название: ${data.title}, Цена: ${data.price}, Количество: ${data.stock}`)
    } catch (error){
        console.log(error.message)
    }    
}



async function pachProduct() {
    try{
    const response = await fetch("https://dummyjson.com/products/2", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            price: 999,
        })
    })

    const data = await response.json()

    console.log(`ID: ${data.id}, Название: ${data.title}, Цена: ${data.price}, Количество: ${data.stock}`)
    } catch (error){
        console.log(error.message)
    }    
}




async function deleteProduct() {
    try{
    const response = await fetch("https://dummyjson.com/products/3", { method: "DELETE", })

    const data = await response.json()

    if(data.isDeleted === true) {
        console.log("Товар успешно удалён")
        console.log(`ID удалённого товара: ${data.id}`)
    }


    } catch (error){
        console.log(error.message)
    }    
}



// deleteProduct()
// pachProduct()
// putProduct()
// addPost()
// addProduct()
// getProducts()
// getOneProduct()