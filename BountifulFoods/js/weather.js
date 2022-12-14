
function showLastModified() {
    var lastModified = new Date(document.lastModified);
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };
    var formattedDate = lastModified.toLocaleDateString("en-US", options);
    document.getElementById("lastModified").innerHTML = formattedDate;
  }
  
  const apiURL = '//api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=b984caeed047bb6a99f387bd90b5a4de';
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      document.getElementById('iconWeather').setAttribute('src', "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png");
      document.getElementById('curr').innerText = jsObject.weather[0].description;
      document.getElementById('temp').innerText = jsObject.main.temp_max;
      document.getElementById('hum').innerText = jsObject.main.humidity;
    });
  
  //array for forecast days
  let date = new Date();
  let dayNum = date.getDay();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let nextdayList = [dayNum + 1, dayNum + 2, dayNum + 3, dayNum + 4, dayNum + 5];
  
  for (let i = 0; i < nextdayList.length; i++) {
    if (nextdayList[i] % 7 == 0) {
      nextdayList[i] = 0;
    } else if (nextdayList[i] % 7 == 1) {
      nextdayList[i] = 1;
    } else if (nextdayList[i] % 7 == 2) {
      nextdayList[i] = 2;
    } else if (nextdayList[i] % 7 == 3) {
      nextdayList[i] = 3;
    } else if (nextdayList[i] % 7 == 4) {
      nextdayList[i] = 4;
    } else if (nextdayList[i] % 7 == 5) {
      nextdayList[i] = 5;
    } else {
      nextdayList[i] = 6;
    }
  }
  
  let day1 = document.getElementById("nameDay1").innerText = weekday[nextdayList[0]];
  let day2 = document.getElementById("nameDay2").innerText = weekday[nextdayList[1]];
  let day3 = document.getElementById("nameDay3").innerText = weekday[nextdayList[2]];
  
  //5 days forecast
  const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=c704063b98daaa9a962869e196e217ee';
  fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
      const forecast = jsObject['list'];
  
      for (let i = 2; i < forecast.length; i += 8) {
        document.getElementById(`imgForecast${i}`).setAttribute('src', "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png");
        document.getElementById(`tempForecast${i}`).innerText = forecast[i].main.temp;
      }
  
    });