var weatherDashboard = $('.weatherDashboard');
var searchCityInput = $('input');
var lat = '';
var lon = '';
var apiKey = '7275518d08ae835bf6361e49e3af30c0';

$('#searchBtn').on('click', function () {
  var city = searchCityInput.val();
  var geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

  fetch(geocodingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.length > 0) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
        return fetch(weatherUrl);
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (weatherData) {
      console.log(weatherData);
      $('.today'+'#weatherIcon').attr('src', '').empty();
      $('.today'+'#date').empty();
      $('.today'+'#cityName').empty();
      $('.today'+'#temp').empty();
      $('.today'+'#humidity').empty();
      $('.today'+'#wind').empty();
     var cityName = weatherData.city.name;
     var weatherIcon = weatherData.list[0].weather[0].icon;
     var date = weatherData.list[0].dt_txt;
     var temp = weatherData.list[0].main.temp;
     var humidity = weatherData.list[0].main.humidity;
     var wind = weatherData.list[0].wind.speed;
     var weatherIcon ='https://api.openweathermap.org/img/w/' + weatherIcon +'.png'
     $('.today'+'#weatherIcon').attr('src', weatherIcon);
     $('.today'+'#cityName').append(cityName);
     $('.today'+'#date').append(date);
     $('.today'+'#temp').append('Temp: ' + temp + '&deg;F');
     $('.today'+'#humidity').append('humidity: ' +humidity + '%');
     $('.today'+'#wind').append('wind: ' +wind + 'MPH');
     
     $('.dayone'+'#weatherIcon').attr('src', '').empty();
     $('.dayone'+'#date').empty();
     $('.dayone'+'#temp').empty();
     $('.dayone'+'#humidity').empty();
     $('.dayone'+'#wind').empty();
     var cityName = weatherData.city.name;
     var weatherIcon = weatherData.list[8].weather[0].icon;
     var date = weatherData.list[8].dt_txt;
     var temp = weatherData.list[8].main.temp;
     var humidity = weatherData.list[8].main.humidity;
     var wind = weatherData.list[8].wind.speed;
     var weatherIcon ='https://api.openweathermap.org/img/w/' + weatherIcon +'.png'
     $('.dayone'+'#weatherIcon').attr('src', weatherIcon);
     $('.dayone'+'#date').append(date);
     $('.dayone'+'#temp').append('Temp: ' + temp + '&deg;F');
     $('.dayone'+'#humidity').append('humidity: ' +humidity + '%');
     $('.dayone'+'#wind').append('wind: ' +wind + 'MPH');
     
     $('.daytwo'+'#weatherIcon').attr('src', '').empty();
     $('.daytwo'+'#date').empty();
     $('.daytwo'+'#temp').empty();
     $('.daytwo'+'#humidity').empty();
     $('.daytwo'+'#wind').empty();
     var cityName = weatherData.city.name;
     var weatherIcon = weatherData.list[16].weather[0].icon;
     var date = weatherData.list[16].dt_txt;
     var temp = weatherData.list[16].main.temp;
     var humidity = weatherData.list[16].main.humidity;
     var wind = weatherData.list[16].wind.speed;
     var weatherIcon ='https://api.openweathermap.org/img/w/' + weatherIcon +'.png'
     $('.daytwo'+'#weatherIcon').attr('src', weatherIcon);
     $('.daytwo'+'#date').append(date);
     $('.daytwo'+'#temp').append('Temp: ' + temp + '&deg;F');
     $('.daytwo'+'#humidity').append('humidity: ' +humidity + '%');
     $('.daytwo'+'#wind').append('wind: ' +wind + 'MPH');

     $('.daythree'+'#weatherIcon').attr('src', '').empty();
     $('.daythree'+'#date').empty();
     $('.daythree'+'#temp').empty();
     $('.daythree'+'#humidity').empty();
     $('.daythree'+'#wind').empty();
     var cityName = weatherData.city.name;
     var weatherIcon = weatherData.list[24].weather[0].icon;
     var date = weatherData.list[24].dt_txt;
     var temp = weatherData.list[24].main.temp;
     var humidity = weatherData.list[24].main.humidity;
     var wind = weatherData.list[24].wind.speed;
     var weatherIcon ='https://api.openweathermap.org/img/w/' + weatherIcon +'.png'
     $('.daythree'+'#weatherIcon').attr('src', weatherIcon);
     $('.daythree'+'#date').append(date);
     $('.daythree'+'#temp').append('Temp: ' + temp + '&deg;F');
     $('.daythree'+'#humidity').append('humidity: ' +humidity + '%');
     $('.daythree'+'#wind').append('wind: ' +wind + 'MPH');

     $('.dayfour'+'#weatherIcon').attr('src', '').empty();
     $('.dayfour'+'#date').empty();
     $('.dayfour'+'#temp').empty();
     $('.dayfour'+'#humidity').empty();
     $('.dayfour'+'#wind').empty();
     var cityName = weatherData.city.name;
     var weatherIcon = weatherData.list[32].weather[0].icon;
     var date = weatherData.list[32].dt_txt;
     var temp = weatherData.list[32].main.temp;
     var humidity = weatherData.list[32].main.humidity;
     var wind = weatherData.list[32].wind.speed;
     var weatherIcon ='https://api.openweathermap.org/img/w/' + weatherIcon +'.png'
     $('.dayfour'+'#weatherIcon').attr('src', weatherIcon);
     $('.dayfour'+'#date').append(date);
     $('.dayfour'+'#temp').append('Temp: ' + temp + '&deg;F');
     $('.dayfour'+'#humidity').append('humidity: ' +humidity + '%');
     $('.dayfour'+'#wind').append('wind: ' +wind + 'MPH');

     $('.dayfive'+'#weatherIcon').attr('src', '').empty();
     $('.dayfive'+'#date').empty();
     $('.dayfive'+'#temp').empty();
     $('.dayfive'+'#humidity').empty();
     $('.dayfive'+'#wind').empty();
     var cityName = weatherData.city.name;
     var weatherIcon = weatherData.list[39].weather[0].icon;
     var date = weatherData.list[39].dt_txt;
     var temp = weatherData.list[39].main.temp;
     var humidity = weatherData.list[39].main.humidity;
     var wind = weatherData.list[39].wind.speed;
     var weatherIcon ='https://api.openweathermap.org/img/w/' + weatherIcon +'.png'
     $('.dayfive'+'#weatherIcon').attr('src', weatherIcon);
     $('.dayfive'+'#date').append(date);
     $('.dayfive'+'#temp').append('Temp: ' + temp + '&deg;F');
     $('.dayfive'+'#humidity').append('humidity: ' +humidity + '%');
     $('.dayfive'+'#wind').append('wind: ' +wind + 'MPH');
      
     localStorage.setItem('cityName',city);
    })
});
$(document).ready(function () {
  var cityNameEl = localStorage.getItem('cityName');

  if (cityNameEl) {
    $('#cityName').append(cityNameEl);
  }
});
