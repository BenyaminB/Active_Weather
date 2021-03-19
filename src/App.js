import React, { useState } from 'react';
import thunderstorm from './weatherIcons/thunderstorm.svg'
import sunny from './weatherIcons/sunny.svg'
import snow from './weatherIcons/snowflake.svg'
import rain from './weatherIcons/rain.svg'
import haze from './weatherIcons/haze.svg'
import cloud from './weatherIcons/cloud.svg'
import PullDown from 'react-z-pull-down'

const api = {
  key: "6c91341b4c2a841ddae2e208e7da2de4",
  // base: "https://api.openweathermap.org/data/2.5/"
  base: "https://api.openweathermap.org/data/2.5/"
}






function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        })


        ;
    }
  }



  /*container which holds the blob*/
  // const TopContainer = styled.div`
  //     width:100%;
  //     height: 200px;
  //     background: #000000;
  //     position:absolute; 
  //     bottom: 0;
  //     margin-left:-7%;
  //     clip-path: url(#wave);

  // `;






  // const dateBuilder = (d) => {
  //   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`
  // }

  return (

    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
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
            {/* div containing the city and country  */}
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
            </div>

            {/* div containing all weather information */}
            <div className="weather-box">
              {/* image icon rendering  */}
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

                {/* div holding min and max of todays date  */}
                <div className="minMax">H:{Math.round(weather.main.temp_max)} L:{Math.round(weather.main.temp_min)} </div>

              </div>

              {/* div holding todays temp */}
              <div className="temp">
                {Math.round(weather.main.temp)}°C
                {/* div holding todays weather description */}
                <div className="description">{weather.weather[0].main}</div>
              </div>
            </div>

            <div className="sportBox">
              <PullDown />
              <div>Other Suggested Sports</div>
            </div>
            <svg>
              <clipPath id="wave" clipPathUnits="objectBoundingBox">
                <path class="st0" d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z" />
              </clipPath>
            </svg>

          </div>
        ) : ('')}
      </main>
    </div>

  );
}

export default App;
