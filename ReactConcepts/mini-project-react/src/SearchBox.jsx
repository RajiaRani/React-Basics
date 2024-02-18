import TextField from '@mui/material/TextField';

export  default function SearchBox() {
    return (
        <div>
            <h3>Search For the Weather</h3>
            <form>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        </div>
    )
}