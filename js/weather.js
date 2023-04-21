const API_KEY = 'b677b831e0f905f5526f0945158f2dc0';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}8&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.textContent = data.name;
      weather.textContent = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert("Can't get your location. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
