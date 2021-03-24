import thunderstorm from './weatherIcons/thunderstorm.svg';
import sunny from './weatherIcons/sunny.svg';
import snow from './weatherIcons/snowflake.svg';
import rain from './weatherIcons/rain.svg';
import haze from './weatherIcons/haze.svg';
import cloud from './weatherIcons/cloud.svg';
import nightCloud from './weatherIcons/nightcloudy.svg';
import arrow from './assets/arrow.png';
import football from './sportIcons/football.png';
import swim from './sportIcons/swim.png';
import basket from './sportIcons/basketball.png';
import cycle from './sportIcons/cycle.png';
import run from './sportIcons/run.png';
import skate from './sportIcons/skate.png';
import sledge from './sportIcons/sledge.png';
import ski from './sportIcons/ski.png';
import snowboard from './sportIcons/snow.png';
import tennis from './sportIcons/tennis.png';
import volley from './sportIcons/volley.png';
import React, { useState } from 'react';
import styled from "styled-components";


const api = {
  key: "0e1ac23df8500a3594ba67687508735d",
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
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [timezone, setTimezone] = useState("Europe/London");


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


  const getTodaysDay = (d) => {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let day = days[d];
    return `${day}`
  }

  let hour24 = new Date(hourly.dt * 1000).toLocaleTimeString("en-us", { hour: "numeric", hour12: false, timeZone: timezone });

  // const dateBuilder = (d) => {
  //   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`
  // }

  const getCurrentTime = (t) => {
    let hourTime = new Date(weather.dt * 1000).toLocaleTimeString("en-us", { hour: "numeric", hour12: false, timeZone: timezone });
    return `${hourTime}`
  }


  return (
    <AppContainer>
      <BoxContainer>
        <div className={(typeof weather.main != "undefined") ? ((getCurrentTime(hourly) > 18) ? 'app night' : 'app morning') : 'app morning'}>

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
                      (hour24 > 3 && hour24 < 19) ?
                        (
                          <img className="tempIconSize"
                            src={sunny}
                            alt='Icon'
                          />
                        ) :
                        <img className="tempIconSize"
                          src={nightCloud}
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
                      hourly.slice(0, 24).map(item => {

                        let hour = new Date(item.dt * 1000).toLocaleTimeString("en-us", { hour: "numeric", hour12: true, timeZone: timezone });
                        let eachHour24 = new Date(item.dt * 1000).toLocaleTimeString("en-us", { hour: "numeric", hour12: false, timeZone: timezone });

                        return (
                          // div for hourly weather
                          <div className="eachHour">

                            {/* displaying the hour  */}
                            <p clasName="time">{hour}</p>

                            {/* displaying the icon according to the weather id */}
                            <p>
                              {
                                (item.weather[0].id > 199 && item.weather[0].id < 232) ? (

                                  <img className="hourlyIcon"
                                    src={thunderstorm}
                                    alt='Icon'
                                  />
                                ) : (item.weather[0].id > 299 && item.weather[0].id < 532) ? (
                                  <img className="hourlyIcon"
                                    src={rain}
                                    alt='Icon'
                                  />
                                ) : (item.weather[0].id > 599 && item.weather[0].id < 632) ? (
                                  <img className="hourlyIcon"
                                    src={snow}
                                    alt='Icon'
                                  />
                                ) : (item.weather[0].id > 700 && item.weather[0].id < 782) ? (
                                  <img className="hourlyIcon"
                                    src={haze}
                                    alt='Icon'
                                  />
                                ) : (item.weather[0].id === 800) ? (
                                  (eachHour24 > 3 && eachHour24 < 19) ?
                                    (
                                      <img className="hourlyIcon"
                                        src={sunny}
                                        alt='Icon'
                                      />
                                    ) :
                                    <img className="hourlyIcon"
                                      src={nightCloud}
                                      alt='Icon'
                                    />

                                ) : (item.weather[0].id > 800 && item.weather[0].id < 805) ? (
                                  <img className="hourlyIcon"
                                    src={cloud}
                                    alt='Icon'
                                  />
                                ) : ('')
                              }
                            </p>

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

                      daily.map(item => {
                        let n = new Date(item.dt * 1000).getUTCDay();
                        return (
                          <div className="eachDay">
                            <p className="day">{getTodaysDay(n)}</p>

                            <p>
                              {
                                (item.weather[0].id > 199 && item.weather[0].id < 232) ? (
                                  <img className="dailyIcon"
                                    src={thunderstorm}
                                    alt='Icon'
                                  />
                                ) : (item.weather[0].id > 299 && item.weather[0].id < 532) ? (
                                  <img className="dailyIcon"
                                    src={rain}
                                    alt='Icon'
                                  />
                                ) : (item.weather[0].id > 599 && item.weather[0].id < 632) ? (
                                  <img className="dailyIcon"
                                    src={snow}
                                    alt='Icon'
                                  />
                                ) : (item.weather[0].id > 700 && item.weather[0].id < 782) ? (
                                  <img className="dailyIcon"
                                    src={haze}
                                    alt='Icon'
                                  />
                                ) : (item.weather[0].id === 800) ? (
                                  <img className="dailyIcon"
                                    src={sunny}
                                    alt='Icon'
                                  />

                                ) : (item.weather[0].id > 800 && item.weather[0].id < 805) ? (
                                  <img className="dailyIcon"
                                    src={cloud}
                                    alt='Icon'
                                  />
                                ) : ('')
                              }
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
                    {!isOpen && <button className="toggleUp" onClick={() => setIsOpen(!isOpen)}><img className="arrowUp" src={arrow} alt="arrow" /></button>}

                    {!isOpen && <div className="toggleHeadingBottom">Other Suggested Sports</div>}

                    {isOpen && <button className="toggleDown" onClick={() => setIsOpen(!isOpen)}><img className="arrowDown" src={arrow} alt="arrow" /></button>}
                    {isOpen && <div className="toggleHeadingTop">Other Suggested Sports</div>}
                    {isOpen && <hr className="HRLineTop" />}

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
