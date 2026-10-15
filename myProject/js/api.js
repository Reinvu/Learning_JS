const API_URL = "https://jsonfakery.com/movies/paginated";

export async function getMovies() {
    try {
        const response = await fetch(`${API_URL}?limit=20`);

        if (!response.ok) {
            throw new Error("Ошибка загрузки данных");
        }

        const data = await response.json();
        
        return data.data; 
    } catch (error) {
        console.error(error);
        return [];
    }
}