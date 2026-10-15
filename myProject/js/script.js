import { getMovies } from "./api.js";
import { renderMovies } from "./film.js";
import { getCurrentUser, registerUser, loginUser, logoutUser } from "./user.js";

let allMovies = [];

const authModal = document.querySelector("#authModal");
const authForm = document.querySelector("#authForm");
const errorMessage = document.querySelector("#errorMessage");
const searchInput = document.querySelector("#searchInput");
const messageEl = document.querySelector("#message");
const logoutBtn = document.querySelector("#logoutBtn");
const moviesContainer = document.querySelector("#movies");
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");

function checkAuthState() {
    const user = getCurrentUser();

    if (user) {
        authModal.classList.remove("active");
        document.body.classList.remove("modal-open");
        logoutBtn.classList.remove("hidden");
        
        loadMovies();
    } else {
        authModal.classList.add("active");
        document.body.classList.add("modal-open");
        userNameEl.textContent = "";
        logoutBtn.classList.add("hidden");
        moviesContainer.innerHTML = "";
    }
}

async function loadMovies() {
    messageEl.textContent = "Загрузка фильмов...";
    allMovies = await getMovies();
    messageEl.textContent = "";
    renderMovies(allMovies);
}

authForm.addEventListener("submit", function(event) {
    event.preventDefault();
    errorMessage.textContent = "";

    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
        if (event.submitter && event.submitter.id === "registerBtn") {
            registerUser(username, password);
        } else if(event.submitter) {
            loginUser(username, password);
        }
        authForm.reset()
        checkAuthState();
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});

logoutBtn.addEventListener("click", function() {
    logoutUser();
    checkAuthState();
});

searchInput.addEventListener("input", function(event) {
    const query = event.target.value.toLowerCase();
    
    const filtered = allMovies.filter(function(movie) {
        return movie.original_title.toLowerCase().includes(query);
    });

    renderMovies(filtered);
});

checkAuthState();