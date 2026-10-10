import { createPost, deletePost, postsBlock} from './posts.js';

const addPostBtn = document.getElementById("addPostBtn");

export function setupEventListeners() {

    addPostBtn.addEventListener("click", createPost);


    postsBlock.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteBtn")) {
            let id = Number(event.target.dataset.id);
            deletePost(id);
        }
    });
}