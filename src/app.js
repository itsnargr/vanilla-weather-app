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




};
let apiKey = "be81f193e065bf5feb2d944c7336968b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);