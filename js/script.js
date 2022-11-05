var apiKey = "69ee81bf4e18fd7668c841c7d1ea128b";

//Get user input values
var inputCity = document.querySelector('#inputCity');
var inputState = document.querySelector('#inputState');
var inputCountry = document.querySelector('#inputCountry');
var button = document.querySelector('#searchButton');

//save user input values to localstorage
function saveToLocalStorage () {
    localStorage.setItem('city', inputCity.value);
    localStorage.setItem('state', inputState.value);
    localStorage.setItem('country', inputCountry.value);
}
button.addEventListener("click", saveToLocalStorage); //calls function to save to local storage

// fetch("http://api.openweathermap.org/data/2.5/forecast?lat=41.878113&lon=-87.629799&appid=" + key)
//     .then(response => response.json())
//     .then (data => console.log(data))
 

//Get latitude and longitude
// fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + inputCity.value + inputState.value + inputCountry.value + '&limit=3&appid=' + apiKey)
//     .then(response => response.json())
//     .then (data => console.log(data));