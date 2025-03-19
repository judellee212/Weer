function updateWeather(response) {
  let temperatureElement=document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  console.log(response.data.condition.description);
  cityElement = response.data.city;
}


function search(city){
let apikey = "a245cfb18ac0fc4e1161o64431840t19";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(updateWeather);

}

function handleSearchSubmit(event) {
  event.preventDefault ();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
  


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Brussels");
