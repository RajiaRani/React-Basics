import {useState, useEffect} from 'react';

function Effect() {

    let [secondary, setSecondary] = useState("Tired");
  //Only create one time when array is empty
  useEffect(() => {
    console.log(`and ${secondary} emotions.`);
  },[]);


  useEffect(() => {
    console.log(`and ${secondary} emotions.`);
  },[secondary]);

    return(
        <div>
        <h2>Current Secondary emotions are {secondary}</h2>
        <button onClick={() => setSecondary("Secondary Bored")}>  Bored</button>
        <button onClick={() => setSecondary("Secondary Exited")}> Excited</button>
       </div>
    )
};

export default Effect;