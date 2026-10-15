export function renderMovies(movies) {
    const container = document.querySelector("#movies");
    container.innerHTML = "";

    if (movies.length === 0) {
        container.innerHTML = "<p>Фильмы не найдены...</p>";
        return;
    }

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("product");

        let shortOverview = ''
        if (movie.overview && movie.overview.length > 120) {
            shortOverview = movie.overview.substring(0, 120) + "..."
        } else {
            shortOverview = (movie.overview || "Описание отсутствует");
        }

        card.innerHTML = `
            <img src="${movie.poster_path}">
            <h3>${movie.original_title}</h3>
            <p>Рейтинг:  ${movie.vote_average}</p>
            <p class="movie-desc">${shortOverview}</p>
        `;

        container.append(card);
    });
}