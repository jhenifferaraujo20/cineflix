const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=279f9c04a9fb558091da42e646a3e5e2";
const API_URL_POPULAR = BASE_URL + "movie/popular?" + API_KEY + "&language=pt-BR&page=1";
const API_URL_SEARCH = BASE_URL + "search/movie?" + API_KEY + "&language=pt-BR&query=";
/*const IMG_URL = "https://image.tmdb.org/t/p/w500/";*/
const IMG_URL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";
const BASE_LINK = "https://www.themoviedb.org/movie/";

const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");

function getMovies(url) {
    fetch(url).then((response) => response.json()).then(data => {
        LoadMovies(data.results);
    });
}

function LoadMovies(data) {
    let moviesList = document.querySelector(".movies-list");
    
    data.forEach(movie => {
        linkMovieDetail = BASE_LINK + movie.id;

        moviesList.innerHTML += `
            <div class="movie-card col-6 col-md-4 col-lg-3 mb-2">
                <a href="${linkMovieDetail}" target="a_blank">
                    <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
                    <p>${movie.title}<br>Tmdb:  ${movie.vote_average}</p>
                </a>
            </div>
        `;
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let moviesList = document.querySelector(".movies-list");
    moviesList.innerHTML = "";
    let search = input.value;
    
    getMovies(API_URL_SEARCH + search);
});

/*window.addEventListener('DOMContentLoaded', getMovies(API_URL_POPULAR));*/