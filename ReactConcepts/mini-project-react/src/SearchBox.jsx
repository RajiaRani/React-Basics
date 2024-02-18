import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");

   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "f235faf4ac26c447756eca2dd895401e";

  let getWeatherInfo = async() => {
   let response = await fetch(`${API_URL}? q=${city}&appid=${API_KEY}`);
   let jsonResponse = await response.json();
   console.log(jsonResponse);

  };

    let handleChange = (event) => {
      setCity(event.target.value);
    };

    let handleSubmit = (event) => {
       event.preventDefault();
       console.log(city);
       setCity(" ");
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