const api = {
    key:"362438f27fa7719c58ad9e86c29192fa",
    url:"https://api.openweathermap.org/data/2.5/",
} // adicionar chave e URL de API

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);