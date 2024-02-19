var searchCityInput = $('input');
var savedCity = [];
var apiKey = '7275518d08ae835bf6361e49e3af30c0';
var savedCity = JSON.parse(localStorage.getItem('savedCity')) || [];

function displayWeather() {
// when the search button is clicked, the value of the input is used to search for the city using mapquest api
$('#searchBtn').on('click', function () {
  var city = searchCityInput.val();
  
  var geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
// the input value is used to get the latitude and longitude of the city using mapquest api
  fetch(geocodingUrl)
    .then(function (response) {
      return response.json();
    })
    // the latitude and longitude are used to get the weather data using openweathermap api
    .then(function (data) {
      console.log(data);
      if (data.length > 0) {
          lat = data[0].lat;
          lon = data[0].lon;
          console.log(lat, lon);
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
      $('.weatherDisplayToday').empty();
      $('.weatherDisplay').empty();
      // get the weather data
      var cityName = weatherData.city.name;

      var weatherIconToday = weatherData.list[0].weather[0].icon;
      var dateToday = weatherData.list[0].dt_txt;
      var tempToday = weatherData.list[0].main.temp;
      var humidityToday = weatherData.list[0].main.humidity;
      var windToday = weatherData.list[0].wind.speed;
      var weatherIconUrlToday = `https://api.openweathermap.org/img/w/${weatherIconToday}.png`;
      // create the elements to display the weather data
      var weatherIconDisplayToday = $('<img>').attr('src', weatherIconUrlToday);
      var cityNameDisplayToday = $('<p>').text('City: ' + cityName);
      var dateDisplayToday = $('<p>').text('Date: ' + dateToday);
      var tempDisplayToday = $('<p>').html('Temp: ' + tempToday + '&deg;F');
      var humidityDisplayToday = $('<p>').text('Humidity: ' + humidityToday + '%');
      var windDisplayToday = $('<p>').text('Wind: ' + windToday + ' MPH');
      // display the weather data
      $('.weatherDisplayToday').append(weatherIconDisplayToday);
      $('.weatherDisplayToday').append(cityNameDisplayToday);
      $('.weatherDisplayToday').append(dateDisplayToday);
      $('.weatherDisplayToday').append(tempDisplayToday);
      $('.weatherDisplayToday').append(humidityDisplayToday);
      $('.weatherDisplayToday').append(windDisplayToday);
      // display the weather data for the next 5 days
      for (var i = 7; i < 40; i += 8) {
        var weatherIcon = weatherData.list[i].weather[0].icon;
        var date = weatherData.list[i].dt_txt;
        var temp = weatherData.list[i].main.temp;
        var humidity = weatherData.list[i].main.humidity;
        var wind = weatherData.list[i].wind.speed;
        var weatherIconUrl = `https://api.openweathermap.org/img/w/${weatherIcon}.png`;

        var weatherIconDisplay = $('<img>').attr('src', weatherIconUrl);
        var cityNameDisplay = $('<p>').text('City: ' + cityName);
        var dateDisplay = $('<p>').text('Date: ' + date);
        var tempDisplay = $('<p>').html('Temp: ' + temp + '&deg;F');
        var humidityDisplay = $('<p>').text('Humidity: ' + humidity + '%');
        var windDisplay = $('<p>').text('Wind: ' + wind + ' MPH');

        $('.weatherDisplay').append(weatherIconDisplay);
        $('.weatherDisplay').append(cityNameDisplay);
        $('.weatherDisplay').append(dateDisplay);
        $('.weatherDisplay').append(tempDisplay);
        $('.weatherDisplay').append(humidityDisplay);
        $('.weatherDisplay').append(windDisplay);
      }
    });
})};

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
