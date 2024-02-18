import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");

   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "f235faf4ac26c447756eca2dd895401e";
  
   let getWeatherInfo = async() => {
  try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        //console.log(jsonResponse);
     
        let result = {
         city:city,
         temp: jsonResponse.main.temp,
         tempMin : jsonResponse.main.temp_min,
         tempMax : jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         feelslike: jsonResponse.main.feels_like,
         weather: jsonResponse.weather[0].description,
        };
        console.log(result)
        return result;
  }catch(err) {
     throw err;
  }

  };

    let handleChange = (event) => {
      setCity(event.target.value);
    };

    let handleSubmit =  async(event) => {
       try{
        event.preventDefault();
       console.log(city);
       setCity(" ");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
       } catch(err) {
        setError("No such place in Our API");
       }
    };

    return (
        <div className='SearchBox'>
            <h3>Search For the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city" 
                label="City Name" 
                variant="outlined" 
                value={city}
                onChange={handleChange}
                required />
                <br /> <br />
                <Button variant="contained" type='submit' > Search </Button>
            </form>
        </div>
    )
}