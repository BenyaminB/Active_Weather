import React from 'react';

// importing weather icons
import thunderstorm from './weatherIcons/thunderstorm.svg';
import sunny from './weatherIcons/sunny.svg';
import snow from './weatherIcons/snowflake.svg';
import rain from './weatherIcons/rain.svg';
import haze from './weatherIcons/haze.svg';
import hazeNight from './weatherIcons/hazeNight.svg';
import cloud from './weatherIcons/cloud.svg';
import nightCloud from './weatherIcons/nightcloudy.svg';

// importing sport icons
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


// -------------------------------------------- GET WEATHER ICON FOR CURRENT WEATHER -------------------------------------------------
export function currentWeatherIcon(weather, timeRN) {
    if (weather.weather[0].id > 199 && weather.weather[0].id < 232) {
        return (<img className="tempIconSize"

            src={thunderstorm}
            alt='Icon'
        />
        )
    }
    else if (weather.weather[0].id > 299 && weather.weather[0].id < 532) {
        return (<img className="tempIconSize"
            src={rain}
            alt='Icon'
        />
        )
    }
    else if (weather.weather[0].id > 599 && weather.weather[0].id < 632) {
        return (<img className="tempIconSize"
            src={snow}
            alt='Icon'
        />
        )
    }
    else if (weather.weather[0].id > 700 && weather.weather[0].id < 782) {
        if (timeRN > 3 && timeRN < 19) {
            return (
                <img className="tempIconSize"
                    src={haze}
                    alt='Icon'
                />
            )
        }
        else {
            return (
                <img className="tempIconSize"
                    src={hazeNight}
                    alt='Icon'
                />
            )
        }
    }
    else if (weather.weather[0].id === 800) {
        if (timeRN > 3 && timeRN < 19) {
            return (
                <img className="tempIconSize"
                    src={sunny}
                    alt='Icon'
                />
            )
        }
        else {
            return (
                <img className="tempIconSize"
                    src={nightCloud}
                    alt='Icon'
                />
            )
        }
    }
    else if (weather.weather[0].id > 800 && weather.weather[0].id < 805) {
        return (
            <img className="tempIconSize"
                src={cloud}
                alt='Icon'
            />
        )
    }
    else {
        return ('')
    }
}


// -------------------------------------------------- GET HOURLY WEATHER ICON ------------------------------------------------------
export function currentHourlyIcon(item, eachHour24, hour24) {
    if (item.weather[0].id > 199 && item.weather[0].id < 232) {
        return (
            <img className="hourlyIcon"
                src={thunderstorm}
                alt='Icon'
            />
        )
    }
    else if (item.weather[0].id > 299 && item.weather[0].id < 532) {
        return (
            <img className="hourlyIcon"
                src={rain}
                alt='Icon'
            />
        )
    }
    else if (item.weather[0].id > 599 && item.weather[0].id < 632) {
        return (
            <img className="hourlyIcon"
                src={snow}
                alt='Icon'
            />
        )
    }
    else if (item.weather[0].id > 700 && item.weather[0].id < 782) {
        if (hour24 > 3 && hour24 < 19) {
            return (
                <img className="hourlyIcon"
                    src={haze}
                    alt='Icon'
                />
            )
        }
        else {
            return (
                <img className="hourlyIcon"
                    src={hazeNight}
                    alt='Icon'
                />
            )
        }
    }
    else if (item.weather[0].id === 800) {
        if (eachHour24 > 3 && eachHour24 < 19) {
            return (
                <img className="hourlyIcon"
                    src={sunny}
                    alt='Icon'
                />
            )
        }
        else {
            return (
                <img className="hourlyIcon"
                    src={nightCloud}
                    alt='Icon'
                />
            )
        }
    }
    else if (item.weather[0].id > 800 && item.weather[0].id < 805) {
        return (
            <img className="hourlyIcon"
                src={cloud}
                alt='Icon'
            />
        )
    }
    else {
        return ('')
    }

}

// -------------------------------------------- GET ICON FOR DAILY WEATHER------------------------------------------------------
export function getDailyIcon(item) {
    if (item.weather[0].id > 199 && item.weather[0].id < 232) {
        return (
            <img className="dailyIcon"
                src={thunderstorm}
                alt='Icon'
            />
        )
    }
    else if (item.weather[0].id > 299 && item.weather[0].id < 532) {
        return (
            <img className="dailyIcon"
                src={rain}
                alt='Icon'
            />
        )
    }
    else if (item.weather[0].id > 599 && item.weather[0].id < 632) {
        return (<img className="dailyIcon"
            src={snow}
            alt='Icon'
        />
        )
    }
    else if (item.weather[0].id > 700 && item.weather[0].id < 782) {
        return (
            <img className="dailyIcon"
                src={haze}
                alt='Icon'
            />
        )
    }
    else if (item.weather[0].id === 800) {
        return (
            <img className="dailyIcon"
                src={sunny}
                alt='Icon'
            />
        )
    }
    else if (item.weather[0].id > 800 && item.weather[0].id < 805) {
        return (
            <img className="dailyIcon"
                src={cloud}
                alt='Icon'
            />
        )
    }
    else {
        return ('')
    }

}

// ------------------------------------------------ GET TOP SUGGESTED SPORT-------------------------------------------------------
export function TodaysTopSport(weather) {
    if (weather.weather[0].main.includes('Clouds') || weather.weather[0].main.includes('Haze') || weather.weather[0].main.includes('Smoke') || weather.weather[0].main.includes('Mist')) {
        return (
            <div className="sportList">
                <a href="https://www.google.com/search?q=football+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="topSportIcon"
                    src={football}
                    alt='Icon'

                /> </a> <p className="topSportName">Football</p>
            </div>
        )
    }
    else if (weather.weather[0].main.includes('Clear')) {
        return (
            <div className="sportList">
                <a href="https://www.google.com/search?q=Swimming+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="topSportIcon"
                    src={swim}
                    alt='Icon'
                /> </a> <p className="topSportName">Swimming</p>
            </div>
        )
    }
    else if (weather.weather[0].main.includes('Snow')) {
        return (
            <div className="sportList">
                <a href="https://www.google.com/search?q=skiing+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer" ><img className="topSportIcon"
                    src={ski}
                    alt='Icon'
                /></a><p className="topSportName">Skiing</p>
            </div>
        )
    }
    else if (weather.weather[0].main.includes('Rain') || weather.weather[0].main.includes('Thunderstorm') || weather.weather[0].main.includes('Drizzle')) {
        return (
            <div className="sportList">
                <a href="https://www.google.com/search?q=Cycling+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="topSportIcon"
                    src={cycle}
                    alt='Icon'
                /> </a> <p className="topSportName">Cycle</p>
            </div>
        )
    }
    else {
        return ('')
    }
}




// ------------------------------------------------ GET FIRST SUGGESTED SPORT FOR LIST---------------------------------------------------
export function numberOneSuggested(weather) {
    if (weather.weather[0].main.includes('Clouds') || weather.weather[0].main.includes('Haze') || weather.weather[0].main.includes('Smoke') || weather.weather[0].main.includes('Mist')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=basketball+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={basket}
                alt='Icon'
            /></a> Basketball</p>
        </div>
        )
    }
    else if (weather.weather[0].main.includes('Clear')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=volleyball+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={volley}
                alt='Icon'
            /></a> Volleyball</p>
        </div>
        )
    }
    else if (weather.weather[0].main.includes('Snow')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=Snowboarding+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={snowboard}
                alt='Icon'
            /></a> Snowboarding</p>
        </div>
        )
    }
    else if (weather.weather[0].main.includes('Rain') || weather.weather[0].main.includes('Thunderstorm') || weather.weather[0].main.includes('Drizzle')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=indoor+football+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={football}
                alt='Icon'
            /></a> Indoor Football</p>
        </div>
        )
    }
    else {
        return ('')
    }
}

// ------------------------------------------------ GET SECOND SUGGESTED SPORT FOR LIST---------------------------------------------------
export function numberTwoSuggested(weather) {
    if (weather.weather[0].main.includes('Clouds') || weather.weather[0].main.includes('Haze') || weather.weather[0].main.includes('Smoke') || weather.weather[0].main.includes('Mist')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=tennis+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={tennis}
                alt='Icon'
            /></a> Tennis</p>
        </div>
        )
    }
    else if (weather.weather[0].main.includes('Clear')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=football+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={football}
                alt='Icon'
            /></a> Football</p>
        </div>
        )
    }
    else if (weather.weather[0].main.includes('Snow')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=ice+Skating+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={skate}
                alt='Icon'
            /></a> Ice Skating</p>
        </div>
        )
    }
    else if (weather.weather[0].main.includes('Rain') || weather.weather[0].main.includes('Thunderstorm') || weather.weather[0].main.includes('Drizzle')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=indoor+volleyball+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={volley}
                alt='Icon'
            /></a> Indoor Volleyball</p>
        </div>
        )
    }
    else {
        return ('')
    }
}

// ------------------------------------------------ GET THIRD SUGGESTED SPORT FOR LIST---------------------------------------------------
export function numberThreeSuggested(weather) {
    if (weather.weather[0].main.includes('Clouds') || weather.weather[0].main.includes('Haze') || weather.weather[0].main.includes('Smoke') || weather.weather[0].main.includes('Mist')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=running+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={run}
                alt='Icon'
            /></a> Running</p>
        </div>
        )
    }
    else if (weather.weather[0].main.includes('Clear')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=Tennis+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={tennis}
                alt='Icon'
            /></a> Tennis</p>
        </div>
        )
    }
    else if (weather.weather[0].main.includes('Snow')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=Sledging+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={sledge}
                alt='Icon'
            /></a> Sledging</p>
        </div>
        )
    }
    else if (weather.weather[0].main.includes('Rain') || weather.weather[0].main.includes('Thunderstorm') || weather.weather[0].main.includes('Drizzle')) {
        return (<div className="sportList">
            <p className="sportName"><a href="https://www.google.com/search?q=running+required+equipment&tbm=shop" target="_blank" rel="noopener noreferrer"><img className="sportIcon"
                src={run}
                alt='Icon'
            /></a> Running</p>
        </div>
        )
    }
    else {
        return ('')
    }
}
