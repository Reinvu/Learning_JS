class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }

    showInfo() {
        alert(`Название: ${this.title}, Автор: ${this.author}`)
    }
}

class Library {
    books = []

    addBook(book) {
        this.books.push(book)
        alert("Книга добавлена")
    }

    showBooks() {
        if(this.books.length != 0){
            for(let i = 0; i < this.books.length; i++){
            this.books[i].showInfo()
            }
        }else{
            alert("Список книг пуст")
        }
    }
}

let library = new Library()

let i = 0
while(i != 3) {
    alert("1 - Добавить книгу\n2 - Показать книги\n3 - Выход")
    i = Number(prompt("Выберите действие: "))
    
    if(i === 1){
        let title = prompt("Введите название книги: ")
        let author = prompt("Введите автора книги: ")
        let book = new Book(title, author)
        library.addBook(book)
    }else if(i == 2){
        library.showBooks()
    }else if(i == 3){
        break
    }else{
        alert("Неверный код!")
    }
}