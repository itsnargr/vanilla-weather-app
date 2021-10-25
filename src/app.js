let apiKey = "be81f193e065bf5feb2d944c7336968b";
let city = "tehran";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
function displayTemperature (response){
let temperatureElement = document.querySelector("#current-temperature");
 celsiusTemperature = response.data.main.temp;

let newTemp = Math.round(celsiusTemperature);
temperatureElement.innerHTML = `${newTemp} °C`;
  let humidityElement =document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement=document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
  let state = document.querySelector("#current-weather");
  state.innerHTML = response.data.weather[0].description;
  let cityElement=document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
    let iconElement = document.querySelector("#icon");
    getForecast(response.data.coord);

    iconElement.setAttribute(
      "src",

      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

};



function searchCity (city) {
let apiKey = "be81f193e065bf5feb2d944c7336968b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
}
function handleSubmitButton (event){
    event.preventDefault();
    let cityElement =document.querySelector("#input-city").value;
    searchCity(cityElement);
}





searchCity(city);
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let time = document.querySelector("#time");
time.innerHTML = `${hour}:${minute}`;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let date = document.querySelector("#day");
date.innerHTML = ` ${day}`;
function formatDays(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
function showDailyForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `<div class="col-2">
  <div class="day">${formatDays(forecastDay.dt)}</div>
                <img
                  src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
                  alt=""
                  width="50"
                />
              <div class="forecast-temperature">
                <span class="forecast-temp-max">${Math.round(
                  forecastDay.temp.max
                )}<span class="degrees-symbol-max">°</span>
                </span>
                <span class="forecast-temp-min">${Math.round(
                  forecastDay.temp.min
                )}<span class="degrees-symbol-min">°</span>
                </span>
              </div>
              </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "be81f193e065bf5feb2d944c7336968b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showDailyForecast);
}