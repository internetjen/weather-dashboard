var apiKey = "69ee81bf4e18fd7668c841c7d1ea128b";
var button = document.getElementById('button');
// var inputCity = document.querySelector('.inputCity');
// var inputState = document.querySelector('.inputState');
// var inputCountry = document.querySelector('.inputCountry');

//Get user input values
var inputCity = document.getElementById('#inputCity');
var inputState = document.getElementById('#inputState');
var inputCountry = document.getElementById('#inputCountry');

button.addEventListener('click', (function(){
    localStorage.setItem("city", inputCity);
    localStorage.setItem("state", inputState);
    localStorage.setItem("country", inputCountry);
});

// function saveInput() {
//     localStorage.setItem("city", inputCity.value);
//     localStorage.setItem("state", inputState.value);
//     localStorage.setItem("country", inputCountry.value);
// }

window.localStorage.getItem("city");

// fetch("http://api.openweathermap.org/data/2.5/forecast?lat=41.878113&lon=-87.629799&appid=" + key)
//     .then(response => response.json())
//     .then (data => console.log(data))
 

//Get latitude and longitude
fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + inputCity.value + inputState.value + inputCountry.value + '&limit=3&appid=' + apiKey)
    .then(response => response.json())
    .then (data => console.log(data));