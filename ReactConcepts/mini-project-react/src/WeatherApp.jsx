import { useState } from 'react';
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Jalandhar",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newUpdate) => {
      setWeatherInfo(newUpdate);
    }
    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
    );
}