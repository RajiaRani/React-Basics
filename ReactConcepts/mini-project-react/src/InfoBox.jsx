import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}) {
    const INIT_URL='https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const HOT_URL="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const CLOUD_URL="https://images.unsplash.com/photo-1622336707998-fa47a2594145?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <br />
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : CLOUD_URL}
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