import { useState, useEffect } from "react";

export default function Datafetch() {
    let [data, setData] = useState(null);

    useEffect(() => {
        fetch(
            `https://api.github.com/users/moonhighway`
        ).then((response) => response.json())
        .then(setData);
    }, []);

    if(data) 
    return(
     <pre>{JSON.stringify(data, null, 2)}</pre>
     )
    return (
        <h2>Data</h2>
    )
};