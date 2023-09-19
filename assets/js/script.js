var weatherDashboard = $('.weatherDashboard');
var cityNameEl = $('.cityName');
var searchCityInput = $('input');
var lat = '';
var lon = '';
var apiKey = '7275518d08ae835bf6361e49e3af30c0';

$('#searchBtn').on('click', function () {
  var searchCity = searchCityInput.val();
  var cityState = searchCity.split(',');
  if (cityState.length === 2) {
    var city = cityState[0].trim();
    var state = cityState[1].trim();
  }
  var country = "ISO 3166";
  var geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${apiKey}`;

  fetch(geocodingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.length > 0) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        return fetch(weatherUrl);
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (weatherData) {
      console.log(weatherData);
     var cityName = weatherData.city.name;
     var temp = weatherData.list[0].main.temp;
     var temp = weatherData.list[0].main.humidity;
     var temp = weatherData.list[0].wind.speed;
    })
});