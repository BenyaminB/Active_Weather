import arrow from './assets/arrow.png';
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { currentWeatherIcon, currentHourlyIcon, TodaysTopSport, getDailyIcon, numberOneSuggested, numberTwoSuggested, numberThreeSuggested } from './common.js';

const locationApi = {
  key: "e18cd550-7ab3-11eb-b603-3d466becf114",
  base: "https://geolocation-db.com/json/"
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
  const [timezone, setTimezone] = useState("Europe/London");

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

    if (weather.coord) {
      getWeather(weather.coord.lat, weather.coord.lon);
    }
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
        setTimezone(weatherResult.timezone);
      });
  }

  // used to get days of the week depending on the integer returned from the api 
  const getTodaysDay = (d) => {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let day = days[d];
    return `${day}`
  }

  // used to get the current time in the city searched in a 24 hour format 
  const getCurrentTime = (t) => {
    let hourTime = new Date(weather.dt * 1000).toLocaleTimeString("en-us", { hour: "numeric", hour12: false, timeZone: timezone });
    return `${hourTime}`
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
        <div className={(typeof weather.main != "undefined") ? ((getCurrentTime(hourly) > 18 || getCurrentTime(hourly) < 4) ? 'app night' : 'app morning') : 'app morning'}>
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
                    {/* calling an external function to get the weather icon  */}
                    {currentWeatherIcon(weather, getCurrentTime(weather))}

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
                      hourly.slice(0, 24).map(item => {

                        let hour = new Date(item.dt * 1000).toLocaleTimeString("en-us", { hour: "numeric", hour12: true, timeZone: timezone });
                        let eachHour24 = new Date(item.dt * 1000).toLocaleTimeString("en-us", { hour: "numeric", hour12: false, timeZone: timezone });

                        return (
                          // div for hourly weather
                          <div className="eachHour">

                            {/* displaying the hour  */}
                            <p clasName="time">{hour}</p>

                            {/* displaying the icon according to the weather id */}
                            <p>{currentHourlyIcon(item, eachHour24, hour)}</p>

                            {/* temp for each hour  */}
                            <p className="tempHour">  {Math.round(item.temp)}°C</p>
                          </div>
                        )
                      })
                    }
                  </div>

                  {/* ------------------------------------  TODAYS TOP SPORT -------------------------------------------------- */}
                  <div className="topSportContainer">
                    <p className="topSportHeading">Top Suggested Sport</p>
                    {/* top sport displayed based on todays weather  */}
                    <div className="topIconContainer">
                      {TodaysTopSport(weather)}


                    </div>
                  </div>
                </div>

                {/* ------------------------------------------- BOTTOM CONTAINER  ------------------------------------------------ */}
                <div className="bottomContainer">

                  {/* daily weather displayed only when toggle is off*/}
                  {!isOpen && <div className="weekForecast">

                    {
                      daily.map(item => {
                        let n = new Date(item.dt * 1000).getUTCDay();
                        return (
                          <div className="eachDay">
                            <p className="day">{getTodaysDay(n)}</p>
                            <p>
                              {/* getting daily icon through a function */}
                              {getDailyIcon(item)}
                            </p>
                            <p className="todaysH">H:{Math.round(item.temp.max)}</p>
                            <p className="todaysL">L:{Math.round(item.temp.min)}</p>
                          </div>
                        )
                      })
                    }
                  </div>}

                  {/* ------------------------------------------ OTHER SPORT SUGGESTIONS ------------------------------------------------ */}
                  <div className="suggestions">
                    {/* shows the below when the button is not clicked eg in the not opened state  */}
                    {!isOpen && <button className="toggleUp" onClick={() => setIsOpen(!isOpen)}><img className="arrowUp" src={arrow} alt="arrow" /></button>}
                    {!isOpen && <div className="toggleHeadingBottom">Other Suggested Sports</div>}

                    {/* shows the below when the button is clicked eg in the opened state  */}
                    {isOpen && <button className="toggleDown" onClick={() => setIsOpen(!isOpen)}><img className="arrowDown" src={arrow} alt="arrow" /></button>}
                    {isOpen && <div className="toggleHeadingTop">Other Suggested Sports</div>}
                    {isOpen && <hr className="HRLineTop" />}

                    {/* number 2 */}
                    {isOpen && <div>
                      {numberOneSuggested(weather)}
                    </div>}
                    {/* Number 3 */}
                    {isOpen && <div>
                      {numberTwoSuggested(weather)}
                    </div>}
                    {/* Number 4 */}
                    {isOpen && <div>
                      {numberThreeSuggested(weather)}
                    </div>}
                  </div>
                </div>

                {/* used to create the wavy div which hold the bottom container */}
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
