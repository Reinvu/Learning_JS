// Экспортируем переменные, чтобы к ним был доступ из других модулей
export const postsBlock = document.querySelector(".posts");
export const titleInput = document.getElementById("titleInput");
export const bodyInput = document.getElementById("bodyInput");
let posts = [];
const url = "https://jsonplaceholder.typicode.com/posts";

export async function loadPosts() {
    try {
        postsBlock.innerHTML = "<p>Loading...</p>";
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to load...");
        }

        let data = await response.json();
        posts = data.slice(0, 10);
        renderPosts(posts);
    } catch (error) {
        console.log(error);
        postsBlock.innerHTML = "<p>Failed to load</p>";
    }
}

function renderPosts(array) {
    postsBlock.innerHTML = "";
    array.forEach(function (post) {
        postsBlock.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="deleteBtn" data-id="${post.id}">Delete</button>
            </div>
        `;
    });
}

export async function createPost() {

    if (titleInput.value === "" || bodyInput.value === "") {
        alert("Please fill all fields!");
        return;
    }

    let newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    };

    try {
        let response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) throw new Error("Failed to create post...");

        let data = await response.json();
        posts.unshift(data);
        renderPosts(posts);

        titleInput.value = "";
        bodyInput.value = "";
        
    } catch (error) {
        console.log(error);
        alert("Failed to create post...");
    }
}

export async function deletePost(id) {
    try {
        let response = await fetch(`${url}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Failed to delete post...");

        // Обновляем массив, отфильтровывая удаленный пост
        posts = posts.filter(post => post.id !== id);
        renderPosts(posts);
    } catch (error) {
        console.log(error);
        alert("Failed to delete post...");
    }
}