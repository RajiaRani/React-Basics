import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox() {

    let [city, setCity] = useState("");

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