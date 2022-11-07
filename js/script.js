var apiKey = "69ee81bf4e18fd7668c841c7d1ea128b";

//Get user input values
var inputCity = document.querySelector('#inputCity');
var inputState = document.querySelector('#inputState');
var inputCountry = document.querySelector('#inputCountry');
var searchButton = document.querySelector('#searchButton');
var resultsSection = document.querySelector('.displayPresent');


//User input values and return weather info
searchButton.addEventListener("click", function(event) { //listening for click to begin fetching apis
    event.preventDefault();

    var userInput =  {
        city: inputCity.value,
        state: inputState.value,
        country: inputCountry.value,
    };

    //fetch openweatherapi to get latitude and longitude of city
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput.city},${userInput.state},${userInput.country}&limit=1&appid=${apiKey}`)
        .then(response => response.json())
        .then (data => {
            var latValue = data[0]['lat'];
            var lonValue = data[0]['lon'];

    //fetch and get weather data via longitude and latitude
    //current weather fetch
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latValue}&lon=${lonValue}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then (data => {
            var cityValueNow = data.name;
            var dateValueNow = moment().format('MMMM Do YYYY');
            var tempValueNow = data.main.temp;
            var windValueNow = data.wind.speed;
            var humidityValueNow = data.main.humidity;
            console.log(data);
            
            let displayResult = document.createElement('div');
            let displayCity = document.createElement('p');
            let displayDate = document.createElement ('p');
            let displayTemp = document.createElement('p');
            let displayWind = document.createElement('p');
            let displayHum = document.createElement('p');

            //Display present icon
            var url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; //replaces img id every time a new city is searched
            var image = new Image();
            image.src = url;
            document.getElementById('displayPresent').appendChild(image);

            //Display present results
            displayResult.setAttribute('class', 'weatherResult');

            displayCity.textContent = cityValueNow;
            displayDate.textContent = dateValueNow;

            displayTemp.textContent = 'Temp:' + tempValueNow;
            displayWind.textContent = 'Wind:' + windValueNow;
            displayHum.textContent = 'Humidity:' + humidityValueNow;

            displayResult.appendChild(displayCity);
            displayResult.appendChild(displayDate);

            displayResult.appendChild(displayTemp);
            displayResult.appendChild(displayWind);
            displayResult.appendChild(displayHum);

            resultsSection.appendChild(displayResult);

    //5-day weather fetch
    fetch(`https://api.openweathermap.org/data/2.5/forecast/?lat=${latValue}&lon=${lonValue}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then (data => { 
            var cityValueNow = data;
            var dateValueNow = moment().format('MMMM Do YYYY');
            var tempValueWeek = data;
            var windValueWeek = data;
            var humidityValueWeek = data;
            console.log(data);
        });

    });
});
});