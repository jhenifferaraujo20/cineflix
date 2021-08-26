function LoadMovies() {
    let movies = [
        {
            image: "img/infiltrado.jpg",
            name: "Infiltrado",
            synopsis: "Em Infiltrado, um misterioso homem conhecido como Harry (Jason Statham) trabalha para uma empresa de carros-fortes e é responsável por transferir milhões de dólares em dinheiro todos os dias pela cidade de Los Angeles. Um dia, quando tentam assaltar seu caminhão, o homem consegue se livrar do assalto utilizando habilidades impressionantes. Seus companheiros passam questionar de onde ele veio e suas motivações para estar ali. Assim que o mistério envolvendo Harry se desenvolve, um plano maior é revelado.",
            release: "2021",
            genre: "Acão, Suspense"
        },
        {
            image: "img/um-lugar-silencioso.jpg",
            name: "Um Lugar Silencioso - Parte II",
            synopsis: "Em Um Lugar Silencioso - Parte 2, logo após os acontecimentos mortais do primeiro filme, a família Abbott (Emily Blunt, Millicent Simmonds e Noah Jupe) precisa agora encarar o terror mundo afora, continuando a lutar para sobreviver em silêncio. Obrigados a se aventurar pelo desconhecido, eles rapidamente percebem que as criaturas que caçam pelo som não são as únicas ameaças que os observam pelo caminho de areia.",
            releaes: "2021",
            genre: "Suspense, Fantasia, Terror"
        },
        {
            image: "img/primeiro-homem.jpg",
            name: "O Primeiro Homem",
            synopsis: "Em O Primeiro Homem, acompanhamos a vida do astronauta norte-americano Neil Armstrong (Ryan Gosling) e sua jornada para se tornar o primeiro homem a andar na Lua. Os sacrifícios feitos por Neil e toda uma nação durante uma das mais perigosas missões da história das viagens espaciais.",
            release: "2018",
            genre: "Drama, Biografia"
        },
        {
            image: "img/kick-ass.jpg",
            name: "Kick Ass - Quebrando Tudo",
            synopsis: "Dave (Aaron Johnson) é um adolescente viciado em quadrinhos cansado de apanhar ou ser ameaçado. Até o dia em que ele resolve virar o super herói Kick Ass e mudar esta rotina. Como? Nem ele sabia, mas ao defender fantasiado de herói (e apanhando mais ainda) um cara que levava uma surra, o vídeo com as imagens dele enfrentando os bandidos foi parar na internet e ele virou um fenômeno. Dave só não contava que a sua fama iria envolvê-lo no meio de um plano de vingança de Big Daddy (Nicolas Cage) e Hit Girl (Chloe Moretz) contra Frank D'Amico (Mark Strong), um mafioso da cidade, vivendo uma verdadeira e violenta aventura que mudaria para sempre a sua vida.",
            releaes: "2010",
            genre: "Acão, Drama"
        },
        {
            image: "img/mundo-em-caos.jpg",
            name: "Mundo Em Caos",
            synopsis: "Em Mundo em Caos, em um futuro pós-apocalíptico onde a humanidade já começou a colonizar outros planetas, uma infecção rara e perigosa tomou conta do planeta e causou o inimaginável: todas as mulheres foram mortas, e agora os pensamentos de todos os homens tornaram-se audíveis. O jovem Todd, temendo a destruição total, decide partir fugindo de sua cidade e, durante sua jornada, conheça pela primeira vez na vida uma mulher.Dave (Aaron Johnson) é um adolescente viciado em quadrinhos cansado de apanhar ou ser ameaçado. Até o dia em que ele resolve virar o super herói Kick Ass e mudar esta rotina. Como? Nem ele sabia, mas ao defender fantasiado de herói (e apanhando mais ainda) um cara que levava uma surra, o vídeo com as imagens dele enfrentando os bandidos foi parar na internet e ele virou um fenômeno. Dave só não contava que a sua fama iria envolvê-lo no meio de um plano de vingança de Big Daddy (Nicolas Cage) e Hit Girl (Chloe Moretz) contra Frank D'Amico (Mark Strong), um mafioso da cidade, vivendo uma verdadeira e violenta aventura que mudaria para sempre a sua vida.",
            releaes: "2021",
            genre: "Ficção científica, Ação"
        }
    ];

    let moviesList = document.querySelector(".movies-list");
    let cart = "";
    for (let i = 0; i < movies.length; i++) {
        cart += "<div class='movie-cart col-3 mb-2'>";
        cart += "<img src='" + movies[i].image + "'>";
        cart += "<p>" + movies[i].name + "</p>";
        cart += "</div>";
    }
    moviesList.innerHTML = cart;
}

window.onload = function() {
    LoadMovies();
}