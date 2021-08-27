const API_KEY = "api_key=279f9c04a9fb558091da42e646a3e5e2";
const BASE_URL = "https://api.themoviedb.org/3/";

function moviesAPI() {
    const urlAPI = BASE_URL + "movie/popular?" + API_KEY + "&language=pt-BR&page=1";

    $.ajax({
        url: urlAPI,
        async: false,
        error: function (erro) {
            console.log("Erro ao consultar API:");
            console.log(erro.responseJSON.message);
        },
        success: function (dados) {
            movies = dados.results;
        },
    });
}

moviesAPI();

function MovieCart(image, name, rating, link) {
    let cart = "";
    cart += "<div class='movie-cart col-sm-6 col-md-4 col-lg-3 mb-2'>";
    cart += "<a href='" + link + "' target = 'a_blank'>";
    cart += "<img src='" + image + "'>";
    cart += "<p>" + name + "<br>Nota: " + rating + "</p></a>";
    cart += "</div>";
    return cart;
}

function LoadMovies() {
    let urlImg = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";
    let preLink = "https://www.themoviedb.org/movie/";

    let moviesList = document.querySelector(".movies-list");
    let carts = "";
    movies.forEach(movie => {
        link = preLink + movie.id;
        carts += MovieCart(urlImg + movie.poster_path, movie.title, movie.vote_average, link)
    });
    moviesList.innerHTML = carts;
}

window.onload = function () {
    LoadMovies();
}