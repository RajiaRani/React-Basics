import { useState, useEffect } from "react";

 function GithubUser({name,location, image}) {
   return(
    <div>
        <h3>{name}</h3>
        <h4>{location}</h4> 
        <img src={image} height={300}/>
    </div>
   )
}
export default function Datafetch() {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://api.github.com/users/moonhighway`
        ).then((response) => response.json())
        .then(setData)
        .then( () => setLoading(false))
        .catch(setError);

    }, []);

    if(loading) return <h1>Loading ......</h1> 
    if(error) return <pre>{JSON.stringify(error)}</pre>
    if(!data) return null;
    
    return(
      <GithubUser 
      name={data.name}
      location={data.location} 
      image={data.avatar_url}/>
    //  <pre>{JSON.stringify(data, null, 2)}</pre>
     )
    
};