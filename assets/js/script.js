var searchCityInput = $('input');
var savedCity = [];
var apiKey = '7275518d08ae835bf6361e49e3af30c0';
var savedCity = JSON.parse(localStorage.getItem('savedCity')) || [];

function displayWeather() {
// when the search button is clicked, the value of the input is used to search for the city using mapquest api
$('#searchBtn').on('click', function () {
  var city = searchCityInput.val();
  var geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
// the input value is used to get the latitude and longitude of the city using openweathermap api
  fetch(geocodingUrl)
    .then(function (response) {
      return response.json();
    })
    // the latitude and longitude are used to get the weather data using openweathermap api
    .then(function (data) {
      if (data.length > 0) {
          lat = data[0].lat;
          lon = data[0].lon;
          var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
          return fetch(weatherUrl);
      }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (weatherData) {
      if (!savedCity.includes(city)) {
        savedCity.push(city);
        localStorage.setItem('savedCity', JSON.stringify(savedCity));
        displayCityBtn();
      }

      // clear the weather display
      $('.weatherDisplay').empty();
      // get the weather data
      var cityName = weatherData.city.name;
      // display the weather data 
      var indices = [0, 7, 15, 23, 31, 39];
        indices.forEach(function(i) {
          var weatherIcon = weatherData.list[i].weather[0].icon;
          var splitDateTime = weatherData.list[i].dt_txt.split(' ');
          var date = splitDateTime[0];
          var time = splitDateTime[1];
          var temp = weatherData.list[i].main.temp;
          var humidity = weatherData.list[i].main.humidity;
          var wind = weatherData.list[i].wind.speed;
          var weatherIconUrl = `https://api.openweathermap.org/img/w/${weatherIcon}.png`;

          $('.weatherDisplay').append(`
              <div class="m-3">
                <img src="${weatherIconUrl}">
                <p>City: ${cityName}</p>
                <p>Date: ${date}</p>
                <p>Time: ${time}</p>
                <p>Temp: ${temp}&deg;F</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind: ${wind} MPH</p>
              </div>
          `);
     });
  });
});
};
function displayCityBtn() {
  $('#savedCity').empty();
  savedCity.forEach(function (city) {
    var cityBtn = $('<button>').text(city);
    cityBtn.addClass('btn btn-success');
    cityBtn.on('click', function () {
      searchCityInput.val(city);
      $('#searchBtn').trigger('click');
    });
    $('#savedCity').append(cityBtn);
    cityBtn.addClass('btn btn-success m-1');
        })
  var clearBtn = $('<button>').text('Clear');
  clearBtn.addClass('btn btn-danger');
  clearBtn.on('click', function () {
    localStorage.clear();
    location.reload();
  });
  $('#savedCity').append(clearBtn);
}

displayWeather();
displayCityBtn();
