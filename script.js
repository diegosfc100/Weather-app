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

function displayResults(weather){
    //console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerText = `${Math.round(weather.main.temp)}°c`;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

}

function dateBuilder(d) {
    let months = ["de Janeiro", "de Fevereiro", "de Março", "de Abril", "de Maio", "de Junho",
    "Julho", "de Agosto", "de Setembro", "de Outubro", "de Novembro", "de Dezembro"];
    let days = ["Domingo, ","Segunda-Feira, ","Terça-Feira, ","Quarta-Feira, ","Quinta-Feira, ","Sexta-Feira, ","Sábado, "];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}
