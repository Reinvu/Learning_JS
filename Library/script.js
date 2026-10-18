class Book {
    #title;

    constructor(id, title, author, isRead=false) {
        this.id = id;
        this.#title = title;
        this.author = author;
        this.isRead = isRead;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        const newTitle = value.trim();
        if (newTitle === "") {
            throw new Error("Название книги не может быть пустым");
        }
        this.#title = newTitle;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }

    // JSON.stringify 
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            isRead: this.isRead
        };
    }
}

const bookForm = document.querySelector("#bookForm");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const bookList = document.querySelector("#bookList");
const message = document.querySelector("#message");

const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");

const totalCountSpan = document.querySelector("#totalCount");
const readCountSpan = document.querySelector("#readCount");
const unreadCountSpan = document.querySelector("#unreadCount");

let books = loadBooks();
let searchQuery = "";
let currentFilter = "all";

updateCounters();
renderBooks();


bookForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title.length < 2 || author.length < 2) {
        message.textContent = "Ошибка: Название и имя автора должны содержать минимум 2 символа!";
        return;
    }

    message.textContent = "";

    const book = new Book(
        crypto.randomUUID(),
        title,
        author
    )
    books.push(book);

    titleInput.value = "";
    authorInput.value = "";

    saveBooks();
    updateCounters()
    renderBooks();
})


searchInput.addEventListener("input", function(event) {
    searchQuery = event.target.value.toLowerCase().trim();
    renderBooks();
});

statusFilter.addEventListener("change", function(event) {
    currentFilter = event.target.value;
    renderBooks();
});

function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

function loadBooks() {
    const savedBooks = localStorage.getItem("books");

    if (savedBooks === null) {
        return [];
    }

    const data = JSON.parse(savedBooks);

    
    return data.map(function (item) {
        return new Book(
            item.id,
            item.title,
            item.author,
            item.isRead
        );
    });
}

function updateCounters() {
    const total = books.length;
    const read = books.filter((book) => {
        return book.isRead
    }).length;
    const unread = total - read;
    
    totalCountSpan.textContent = total;
    readCountSpan.textContent = read;
    unreadCountSpan.textContent = unread;
}

function renderBooks() {
    bookList.innerHTML = "";

    if (books.length === 0) {
        bookList.textContent = "Книг нет...";
    }

    const filteredBooks = books.filter(book => {
        if (currentFilter === "read" && !book.isRead) return false;
        if (currentFilter === "unread" && book.isRead) return false;
        if (!book.title.toLowerCase().includes(searchQuery)) return false;
        
        return true;
    });

    if (filteredBooks.length === 0) {
        bookList.textContent = "Книг нет...";
        return; 
    }

    filteredBooks.forEach(function (book) {
        const card = document.createElement('div');
        card.classList.add("book");

        if (book.isRead) {
            card.classList.add("read");
        }

        const title = document.createElement("h2");
        title.textContent = book.title;
        
        const author = document.createElement("p");
        author.textContent = book.author;

        const status = document.createElement("p");
        if (book.isRead) {
            status.textContent = "Статус: прочитано";
        } else {
            status.textContent = "Статус: не прочитано";
        }

        const readButton = document.createElement("button");
        readButton.type = "button";

        if (book.isRead) {
            readButton.textContent = "Отметить непрочитанной";
        } else {
            readButton.textContent = "Отметить прочитанной";
        }

        readButton.addEventListener("click", function() {
            book.toggleRead();

            updateCounters();
            saveBooks();
            renderBooks();
        })

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Удалить";

        deleteButton.addEventListener("click", function() {
            books = books.filter(function(item) {
                return item.id !== book.id;
            })
            updateCounters();
            saveBooks();
            renderBooks();
        })

        card.append(
            title,
            author,
            status,
            readButton,
            deleteButton
        );
        bookList.append(card);
    })
}

