const apiKey = "3f4e3e3e67ac403d9fc171608243003";
const searchButton = document.getElementById("search-button");
const searchbar = document.getElementById("search-bar");
const locationDiv = document.querySelector(".location");
const iconDiv = document.querySelector(".icon");
const descriptionDiv = document.querySelector(".description");
const humidityDiv = document.querySelector(".humidity");
const windDiv = document.querySelector(".wind");
const tempDiv = document.querySelector(".temp");
const dateDiv = document.querySelector(".date");

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const city = searchbar.value;
    if (city === "") {
        alert("Please enter a city");
    } else {
        getWeather(city);
    }
});

async function getWeather(city) {
    const baseURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    locationDiv.textContent = `${data.location.name}, ${data.location.country}`;
    iconDiv.src = `http://openweathermap.org/img/wn/${data.current.condition.icon}`;
    descriptionDiv.textContent = data.current.condition.text;
    humidityDiv.textContent = `Humidity: ${data.current.humidity}%`;
    windDiv.textContent = `Wind: ${data.current.wind_kph} kph`;
    tempDiv.textContent = `${Math.round(data.current.temp_c)}Â°C`;
    dateDiv.textContent = new Date().toLocaleDateString();
}

async function getForecast(city) {
    try {
        const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);
        displayForecast(data);
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) { 
    // Add code here to display forecast data as needed
}
