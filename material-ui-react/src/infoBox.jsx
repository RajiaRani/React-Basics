import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  './SearchBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
  
    const RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1672122552907-045efbd671d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
            <div className="InfoBox">
            <div  className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80 
            ? RAIN_URL 
            : info.temp > 15 
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} { info.humidity > 80 
            ? <ThunderstormIcon/>
            : info.temp > 15
            ? <WbSunnyIcon/>
            :  <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature : {info.temp}&deg;C</p>
          <p>Humidity : {info.humidity}</p>
          <p>Max Temp : {info.tempMax}&deg;C</p>
          <p>Mini Temp : {info.tempMin}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like a {info.feelsLiks}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
</div>
);
};