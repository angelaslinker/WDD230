// const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('figcaption');

var url = "//api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=b984caeed047bb6a99f387bd90b5a4de";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); 
        displayResults(data)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function getWindChill(temp, speed){
    if (temp > 0 && speed > 0) {
      const chilly = (35.74 + (0.6215 * temp) - (35.75 * speed**0.16) + (0.4275 * temp * speed ** 0.16)).toFixed(1);
      windchill.innerHTML = `${chilly} + °F`;
      return chilly;
    } else{
      return "N/A"
    }
  }


  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    windspeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    
    windchill.innerHTML = getWindChill(currentTemp, windspeed);
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

