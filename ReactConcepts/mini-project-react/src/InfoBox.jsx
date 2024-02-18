import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}) {
    const INIT_URL='https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    return (
        <div className="InfoBox">
            <br />
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>Min-Temperature = {info.tempMin}&deg;C</div>
                        <div>Max-Temperature = {info.tempMax}&deg;C</div>
                        <div>The weather can be describe as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</div>
                    </Typography>
                </CardContent> 
            </Card>
          </div>
        </div>
    )
}