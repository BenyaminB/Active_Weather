import { currentWeatherIcon, currentHourlyIcon, TodaysTopSport, getDailyIcon, numberOneSuggested, numberTwoSuggested, numberThreeSuggested } from './common.js';
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

const locationApi = {
  key:"e18cd550-7ab3-11eb-b603-3d466becf114",
  base:"https://geolocation-db.com/json/"
}

const api = {
  key: "6c91341b4c2a841ddae2e208e7da2de4",
  base: "https://api.openweathermap.org/data/2.5/"
}

const AppContainer = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const BoxContainer = styled.div`
    width: 375px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15,15,15,0.25);
    position: relative;
    overflow: hidden;
`;

function App() {

  useEffect(() => {
    fetchWeather();
  }, []);

  const [location, setLocation] = useState();
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);

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
          if (result.coord) {
            getWeather(result.coord.lat, result.coord.lon);
          }
        });
    }
  }

  function getWeather(lat, lon) {
    fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&exclude=minutlely,alerts&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(weatherResult => {
        setHourly(weatherResult.hourly);
        setDaily(weatherResult.daily);
        console.log(weatherResult);
      });
  }

  // const dateBuilder = (d) => {
  //   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`
  // }

  // const getTime = (t) => {

  //   let dateObj = new Date(t.dt * 1000);
  //   let hour = dateObj.getUTCHours();

  //   return `${hour}`

  // }

  return (
    <AppContainer>
      <BoxContainer>
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/home' exact components={Home} />
              <Route path='/reports' components={Reports} />
              <Route path='/products' components={Products} />
            </Switch>
          </Router>
          <main>
            {/* -------------------------------------------- SEARCH BOX ------------------------------------------------------ */}
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
          {/* --------------------------- EVERYTHING BELOW IS DISPLAYED ONLY IF CITY IS SELECTED---------------------------------------- */}
          {(typeof weather.main != "undefined") ? (
              <div>
                {/* div containing the city and country  */}
                <div className="location-box">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                </div>

                {/* -------------------------------------------- WEATHER BOX ------------------------------------------------------ */}
                <div className="weather-box">

                  <div className="tempIcon" >
                    {(weather.weather[0].id > 199 && weather.weather[0].id < 232) ? (
                      <img className="tempIconSize"
                        src={thunderstorm}
                        alt='Icon'
                      />
                    ) : (weather.weather[0].id > 299 && weather.weather[0].id < 532) ? (
                      <img className="tempIconSize"
                        src={rain}
                        alt='Icon'
                      />
                    ) : (weather.weather[0].id > 599 && weather.weather[0].id < 632) ? (
                      <img className="tempIconSize"
                        src={snow}
                        alt='Icon'
                      />
                    ) : (weather.weather[0].id > 700 && weather.weather[0].id < 782) ? (
                      <img className="tempIconSize"
                        src={haze}
                        alt='Icon'
                      />
                    ) : (weather.weather[0].id === 800) ? (
                      <img className="tempIconSize"
                        src={sunny}
                        alt='Icon'
                      />

                    ) : (weather.weather[0].id > 800 && weather.weather[0].id < 805) ? (
                      <img className="tempIconSize"
                        src={cloud}
                        alt='Icon'
                      />
                    ) : ('')}

                    {/* ----------------------------------------- TODAYS HIGH/LOW  ----------------------------------------- */}
                    <div className="minMax">H:{Math.round(weather.main.temp_max)} L:{Math.round(weather.main.temp_min)} </div>
                  </div>

                  {/* ------------------------------------------- TODAYS TEMP  ------------------------------------------------ */}
                  <div className="temp">
                    {Math.round(weather.main.temp)}°C
                {/* div holding todays weather description */}
                    <div className="description">{weather.weather[0].main}</div>
                  </div>

                  {/* ------------------------------------------- HOURLY TEMP  ------------------------------------------------ */}
                  <div className="hourlyWeather">

                    {
                      hourly.map(item => (
                        // timeRN = new Date(item.dt * 1000)
                        // let dateObj = new Date(item.dt * 1000);
                        // let hours = dateObj.getUTCHours().toString();
                        // return (
                        //   <div>

                        < p > { Math.round(item.temp)}°C</p>
                        // </div>


                      ))
                    }
                  </div>

                  {/* ------------------------------------  TODAYS TOP SPORT -------------------------------------------------- */}
                  <div className="topSportContainer">
                    <p className="topSportHeading">Top Suggested Sport</p>
                    {/* top sport displayed based on todays weather  */}
                    <div className="topIconContainer">
                      {(weather.weather[0].main.includes('Clouds') || weather.weather[0].main.includes('Haze') || weather.weather[0].main.includes('Smoke')) ? (
                        <div className="sportList">
                          <img className="topSportIcon"
                            src={football}
                            alt='Icon'
                          /> <p className="topSportName">Football</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Clear')) ? (
                        <div className="sportList">
                          <img className="topSportIcon"
                            src={swim}
                            alt='Icon'
                          /> <p className="topSportName">Swimming</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Snow')) ? (
                        <div className="sportList">
                          <img className="topSportIcon"
                            src={ski}
                            alt='Icon'
                          /><p className="topSportName">Skiing</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Rain') || weather.weather[0].main.includes('Thunderstorm') || weather.weather[0].main.includes('Drizzle')) ? (
                        <div className="sportList">
                          <img className="topSportIcon"
                            src={cycle}
                            alt='Icon'
                          /> <p className="topSportName">Cycle</p>
                        </div>
                      ) : ('')}
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------- BOTTOM CONTAINER  ------------------------------------------------ */}
                <div className="bottomContainer">
                  {/* daily weather displayed only when toggle is off*/}
                  {!isOpen && <div className="weekForecast">

                    {
                      // console.log(daily)
                      daily.map(item => (

                        <p>{item.temp.day}</p>

                      ))
                    }


                  </div>}

                  {/* ------------------------------------------ OTHER SPORT SUGGESTIONS ------------------------------------------------ */}
                  <div className="suggestions">
                    {!isOpen && <button className="toggleUp" onClick={() => setIsOpen(!isOpen)}><img className="arrowUp" src={arrow} alt="arrow" /></button>}
                    {!isOpen && <div className="toggleHeadingBottom">Other suggested Sports</div>}
                    {isOpen && <button className="toggleDown" onClick={() => setIsOpen(!isOpen)}><img className="arrowDown" src={arrow} alt="arrow" /></button>}
                    {isOpen && <div className="toggleHeadingTop">Other suggested Sports</div>}

                    {/* number 2 */}
                    {isOpen && <div>
                      {(weather.weather[0].main.includes('Clouds') || weather.weather[0].main.includes('Haze') || weather.weather[0].main.includes('Smoke')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={basket}
                            alt='Icon'
                          /> Basketball</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Clear')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={volley}
                            alt='Icon'
                          /> Volleyball</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Snow')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={snowboard}
                            alt='Icon'
                          /> Snowboarding</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Rain') || weather.weather[0].main.includes('Thunderstorm') || weather.weather[0].main.includes('Drizzle')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={football}
                            alt='Icon'
                          /> Indoor Football</p>
                        </div>
                      ) : ('')}
                    </div>}
                    {/* Number 3 */}
                    {isOpen && <div>
                      {(weather.weather[0].main.includes('Clouds') || weather.weather[0].main.includes('Haze') || weather.weather[0].main.includes('Smoke')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={tennis}
                            alt='Icon'
                          /> Tennis</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Clear')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={football}
                            alt='Icon'
                          /> Football</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Snow')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={skate}
                            alt='Icon'
                          /> Ice Skating</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Rain') || weather.weather[0].main.includes('Thunderstorm') || weather.weather[0].main.includes('Drizzle')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={volley}
                            alt='Icon'
                          /> Indoor Volleyball</p>
                        </div>
                      ) : ('')}
                    </div>}
                    {/* Number 4 */}
                    {isOpen && <div>
                      {(weather.weather[0].main.includes('Clouds') || weather.weather[0].main.includes('Haze') || weather.weather[0].main.includes('Smoke')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={run}
                            alt='Icon'
                          /> Running</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Clear')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={tennis}
                            alt='Icon'
                          /> Tennis</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Snow')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={sledge}
                            alt='Icon'
                          /> Sledging</p>
                        </div>
                      ) : (weather.weather[0].main.includes('Rain') || weather.weather[0].main.includes('Thunderstorm') || weather.weather[0].main.includes('Drizzle')) ? (
                        <div className="sportList">
                          <p className="sportName"><img className="sportIcon"
                            src={run}
                            alt='Icon'
                          /> Running</p>
                        </div>
                      ) : ('')}
                    </div>}
                  </div>
                </div>
                <svg>
                  <clipPath id="wave" clipPathUnits="objectBoundingBox">
                    <path className="st0" d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z" />
                  </clipPath>
                </svg>

              </div>
            ) : ('')}
          </main>
        </div>
      </BoxContainer >
    </AppContainer >
  );
}

export default App;
