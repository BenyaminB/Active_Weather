import React, { useState } from 'react';
const api = {
  key: "8067e7cdf802448391ee48b69e2dbc04",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [weather, setWeather] = useState({});

  fetch(`${api.base}weather?q=${'London'}&units=metric&APPID=${api.key}`)
  .then(res => res.json())
  .then(result => {
    setWeather(result);
    console.log(result);
  });

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;