let apiKey = "be81f193e065bf5feb2d944c7336968b";
let city = "tehran";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
function displayTemperature (){
let temperatureElement = document.querySelector("#current-temperature");
 celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  let humidityElement =document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement=document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
  let state = document.querySelector("#current-weather");
  state.innerHTML = response.data.weather[0].description;
  let cityElement=document.querySelector("#city");
  cityElement.innerHTML = response.data.name;




};

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

function searchCity (city) {
let apiKey = "be81f193e065bf5feb2d944c7336968b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
}
function handleSubmitButton (event){
    event.preventDefault();
    let cityElement =document.querySelector("#input-city").value;
    search(cityElement);
}
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", handleSubmitButton);

searchCity(city);