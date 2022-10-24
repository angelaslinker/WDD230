function windChillTemp() {
    const farenheit = document.getElementById("temp").textContent;
    const temperature = parseInt(farenheit);
    const windspeed = document.getElementById("windspeed").textContent;
    const wind = parseInt(windspeed);
    if (temperature > 0 && wind > 0) {
      const chilly = (35.74 + (0.6215 * temperature) - (35.75 * wind**0.16) + (0.4275 * temperature * wind ** 0.16)).toFixed(1);
      console.log('Chilly: ' + chilly);
      return chilly + `°F`;
    } else{
      return " "
    }
  }
  
  document.getElementById("windchill").innerHTML = windChillTemp();



// var temp = parseFloat(document.getElementById("temp").textContent);
// var speed = parseFloat(document.getElementById("windspeed").textContent);
// var f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

// if (temp <= 50 && speed > 3) {
//     F = f.toFixed(1);
// } 
// else {
//     F= "N/A";
// }
// document.getElementById("windchill").innerHTML = F