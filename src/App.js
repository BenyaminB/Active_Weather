import React, { useState } from 'react';
const api = {
  key: "6c91341b4c2a841ddae2e208e7da2de4",
  base: "https://api.openweathermap.org/data/2.5/"
}

const locationApi = {
  key:"e18cd550-7ab3-11eb-b603-3d466becf114",
  base:"https://geolocation-db.com/json/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState(null);

  function getLocation () {
    fetch(`${locationApi.base}${locationApi.key}`)
    .then(response => response.json())
    .then(data =>{
      setLocation(data)
      console.log(data)});
  }

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <button onClick={getLocation}>Allow Active Weather to access your Location</button>
          {location && <h1 style={{color: "white"}}>{`${location.city}, ${location.country_name}`}</h1>}
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
