import { useState } from "react"

export default function InputComponent(){
    let [ inputText, setInputText] = useState("Hello");
   
    let handleInput = (event) => {
       // console.log(event.target.value);
       setInputText(event.target.value)
    };


    let handleButton = () => {
        // console.log("button was clicked");
        setInputText(" ");
    };

    return(
        <div>
            <input type="text" 
            placeholder="Enter your input"
            value={inputText} 
            onChange={handleInput}/>
            <p>{inputText}</p>
            <button onClick={handleButton}>Reset</button>
        </div>
    );
};