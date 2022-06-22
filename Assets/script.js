
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
    console.log(api);
    fetch(api)
    .then(
        
    )
}
