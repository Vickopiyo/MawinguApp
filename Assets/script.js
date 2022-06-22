
// selecting of elements
let weatherImg = document.querySelector(".icon");
let tempValue = document.querySelector(".tempValue p");
let tempCondition = document.querySelector(".tempDescription p");
let locationArea = document.querySelector(".location p");
let notification = document.querySelector(".notification");


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd7829f256amsh4c46947f8f8b0fep162386jsnf3b1b14f5a25',
// 		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
// 	}
// };

// fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=Mombasa', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



// App information
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// API KEY $ NAME (VICTOROPIYO)
let key = "c54fa06564ed8b75fd79a6808ed3ba1d"

// check ability of browser to get location
if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,showError);

} else {
    notification.style.display= "block"
    notification.innerText= "Geolocation not supported"
}
// setting user position

function setPosition(position){
    let latitude=position.coords.latitude;
    let longitude =position.coords.longitude;
    getWeather(latitude,longitude);
}

// error message
function showError(error){
    notification.style.display= "block"
    notification.innerText= `${error.message}`

}

// Get Weather Api from open weather app 
function getWeather(latitude,longitude){
    let  api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
    
    fetch(api)
        .then(function(response){
            let results = response.json();
            return results;
        }
        
        
        
        )
        .then(function(results){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = results.weather[0].description;
            weather.iconId = results.weather[0].icon;
            weather.city = results.name;
            weather.country = results.sys.country;
        })
        .then(function(){
            displayWeather();
        }
        );
}
${weather.iconId}

    // DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="./Images
    .png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});

