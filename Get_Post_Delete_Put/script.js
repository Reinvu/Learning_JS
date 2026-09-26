let titleInput =
  document.getElementById("titleInput");

let bodyInput =
  document.getElementById("bodyInput");

let addPostBtn =
  document.getElementById("addPostBtn");

let postsBlock =
  document.querySelector(".posts");


let posts = [];


// ========================================
// GET
// Получаем посты
// ========================================

async function loadPosts() {

  try {

    postsBlock.innerHTML = "<p>Loading...</p>";


    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );


    if (!response.ok) {

      throw new Error("Failed to load posts");

    }


    let data = await response.json();


    // Берём только первые 10 постов
    posts = data.slice(0, 10);


    renderPosts(posts);

  } catch (error) {

    console.log(error);

    postsBlock.innerHTML =
      "<p>Failed to load posts</p>";

  }

}


// ========================================
// Вывод постов
// ========================================

function renderPosts(array) {

  postsBlock.innerHTML = "";


  array.forEach(function (post) {

    postsBlock.innerHTML += `
        
            <div class="post">

                <h3>
                    ${post.title}
                </h3>

                <p>
                    ${post.body}
                </p>

                <button
                    class="deleteBtn"
                    data-id="${post.id}"
                >
                    Delete
                </button>
                <button
                    class="updateBtn"
                    data-id="${post.id}">
                    Update
                </button>

            </div>
        
        `;

  });

}


// ========================================
// POST
// Создание нового поста
// ========================================

async function createPost() {

  if (
    titleInput.value === "" ||
    bodyInput.value === ""
  ) {

    alert("Please fill all fields!");

    return;

  }


  let newPost = {

    title: titleInput.value,

    body: bodyInput.value,

    userId: 1

  };


  try {

    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(newPost)

      }
    );


    if (!response.ok) {

      throw new Error("Failed to create post");

    }


    let data = await response.json();


    console.log("Created post:");
    console.log(data);


    // Добавляем новый пост в наш массив
    posts.unshift(data);


    renderPosts(posts);


    // Очищаем поля
    titleInput.value = "";
    bodyInput.value = "";


  } catch (error) {

    console.log(error);

    alert("Failed to create post");

  }

}


// ========================================
// Кнопка Add post
// ========================================

addPostBtn.addEventListener(
  "click",
  createPost
);


// ========================================
// DELETE
// ========================================

async function deletePost(id) {

  try {

    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {

        method: "DELETE"

      }
    );


    if (!response.ok) {

      throw new Error("Failed to delete post");

    }
    let data = await response.json()
    console.log(data)

    console.log(
      `Post ${id} deleted`
    );


    // Удаляем из нашего массива
    posts = posts.filter(function (post) {

      return post.id !== id;

    });


    renderPosts(posts);


  } catch (error) {

    console.log(error);

    alert("Failed to delete post");

  }

}


async function updatePost(id) {

  let newTitle = prompt("Введите новый title: ")
  let newTest = prompt("Введите новый text: ")

  let updatePost = {
    id: id,
    title: newTitle,
    body: newTest,
    userId: 1
  }

  try{
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(updatePost)

    })

    if(!response.ok) {
      throw new Error("Failed to update")
    }

    let data = await response.json()

    console.log(`Post ${id} update`, data)

    let newPost = posts.findIndex((post)=> {
      if(post.id === id) {
        return id
      }
    })
    if(newPost !== -1){
      posts[newPost] = data
      renderPosts(posts)
    }
    

    
  }catch (error) {
    console.log(error)
  }
}




// ========================================
// События внутри posts
// ========================================

postsBlock.addEventListener(
  "click",
  function (event) {

    if (
      event.target.classList.contains(
        "deleteBtn"
      )
    ) {

      let id = Number(
        event.target.dataset.id
      );


      deletePost(id);

    }
    if(event.target.classList.contains("updateBtn")) {
      let id = Number(event.target.dataset.id)

      updatePost(id)

    }

  }
);



// ========================================
// Загружаем посты при запуске
// ========================================

loadPosts();