import { useState , useEffect} from 'react';
function Emotions() {
    let [emotion, setEmotion] = useState("Happy");

    let handleButton = () => {
        setEmotion("Sad");
    };

    useEffect(() => {
        console.log(`trigger the ${emotion} emotions`);
      }, [emotion]);

    return (
        <div>
            <h1>Current emotions are {emotion}</h1>
            <button onClick={handleButton}>Sad</button>
            <button onClick={() => setEmotion("Exited")}>Excited</button>
            <br />
        </div>
    )
}

export default Emotions;