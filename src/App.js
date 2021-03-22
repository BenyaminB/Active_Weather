import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const locationApi = {
  key:"e18cd550-7ab3-11eb-b603-3d466becf114",
  base:"https://geolocation-db.com/json/"
}

const api = {
  key: "6c91341b4c2a841ddae2e208e7da2de4",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  useEffect(() => {
    fetchWeather();
  }, []);

  const [location, setLocation] = useState();
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const fetchWeather = async () => {

    const LocationData = await fetch(
      `${locationApi.base}${locationApi.key}`
    );

    const location = await LocationData.json();
    setLocation(location);

    const WeatherData = await fetch(
      `${api.base}weather?q=${location.city}&units=metric&APPID=${api.key}`
    );
    
    const weather = await WeatherData.json();
    setWeather(weather);
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
      <Navbar />
      <Switch>
        <Route path='/home' exact components={Home} />
        <Route path='/reports' components={Reports} />
        <Route path='/products' components={Products} />
      </Switch>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
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
