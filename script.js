const api = {
    key:"362438f27fa7719c58ad9e86c29192fa",
    url:"https://api.openweathermap.org/data/2.5/",
} // adicionar chave e URL de API

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery (event) {
    (event.keyCode ==13) && getResults(searchbox.value);
    //(event.keyCode ==13) && console.log(searchbox.value);
}

function getResults(query){
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}