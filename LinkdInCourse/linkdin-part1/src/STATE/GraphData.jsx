import { useState, useEffect } from "react";


let query = `
query{
    allLifts{
        name
        elevationGain
        status
    }
}`;

let opts = {
    method:"POST",
    headers : {"Content-Type": "application/json"},
    body: JSON.stringify({query})
}
 function Lift({name,elevationGain, status}) {
   return(
    <div>
        <h3>{name}</h3>
        <h4>{elevationGain}, {status}</h4> 
    </div>
   )
}
export default function GraphData() {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://snowtooth.moonhighway.com/`,
            opts
        ).then((response) => response.json())
        .then(setData)
        .then( () => setLoading(false))
        .catch(setError);

    }, []);

    if(loading) return <h1>Loading ......</h1> 
    if(error) return <pre>{JSON.stringify(error)}</pre>
    if(!data) return null;
    
    return(
       <div>
        {data.data.allLifts.map((lift) => (
            <Lift
             name={lift.name}
             elevationGain={lift.elevationGain}
             status={lift.status}/>
        ))}
       </div>
     )
    
};