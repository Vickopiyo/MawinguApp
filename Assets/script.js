
document.addEventListener("DOMContentLoad",function info(){
    alert("where are checking your weather from?")
})


const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

let greetings =document.querySelector("#greetings")
let input=document.querySelector("#input")


function greeting(){
    greetings.innerHTML="Hello " +  input.value + ",we are glad you chose us!"
    
}

// 
const KELVIN = 273;
// API key from open weather App
const key = "c54fa06564ed8b75fd79a6808ed3ba1d";

// Checks if browser supports geolocation
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// set user geolocatinon
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// Get weather from openweather API
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// Display weather to user
function displayWeather(){
    iconElement.innerHTML = `<img src="./Images/icons${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}??<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// celsius to farenheight conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// converts celsius to Farenheight when clicked
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return 0;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}??<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}??<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});