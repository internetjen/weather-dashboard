var apiKey = "69ee81bf4e18fd7668c841c7d1ea128b";

//Get user input values
var inputCity = document.querySelector('#inputCity');
var inputState = document.querySelector('#inputState');
var inputCountry = document.querySelector('#inputCountry');
var searchButton = document.querySelector('#searchButton');

//User input values and return weather info
searchButton.addEventListener("click", function(event) { //listening for click to begin fetching apis
    event.preventDefault();

    var userInput =  {
        city: inputCity.value,
        state: inputState.value,
        country: inputCountry.value,
    };

    //fetch openweatherapi to get latitude and longitude of city
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput.city},${userInput.state},${userInput.country}&limit=1&appid=` + apiKey)
        .then(response => response.json())
        .then (data => {
            var latValue = data[0]['lat'];
            var lonValue = data[0]['lon'];

    //fetch and get weather data via longitude and latitude
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latValue}&lon=${lonValue}&appid=` + apiKey)
        .then(response => response.json())
        .then (data => console.log(data))

    });
});

