import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './SearchBox.css';


import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [ city, setCity] = useState("");
   let [error, setError] = useState(false);

    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="f235faf4ac26c447756eca2dd895401e";

      let getWeatherInfo = async() => {
       try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike : jsonResponse.main.feels_like,
        pressure : jsonResponse.main.pressure,
        weather : jsonResponse.weather[0].description
       }
       console.log(result);
       return result;
       } catch(err){
         throw err;
       }
      };

    

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
       } catch(err){
        setError(true);
       }
    }

    return (
        <div className='SearchBox'>
            <h3>Search for the Weather</h3>
       <form action="">

       <TextField id="city" 
       label="city name" 
       variant="outlined" 
       required
       value={city}
       onChange={handleChange} />  <br /> <br />
            <Button variant="contained" 
            type="submit"
            onClick={handleSubmit}>Search</Button>
            {error && <Alert severity="error">No such placae exits!!</Alert>}
       </form>
  
        </div>
    )
}