import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city:"weather app",
        feelsLiks: 42.05,
        humidity: 63,
        pressure: 1000,
        temp: 35.05,
        tempMax: 35.05,
        tempMin: 35.05,
        weather: "haze",
    })


    // For weather result
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

   return(
    <div>
        <h1>Weather App</h1>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </div>
   )
}