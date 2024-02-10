import { useState } from "react"

export default function ArrayState() {
    let [count, setCount] = useState(0);
    let [arr, setArr] = useState(["zero"]);

    let blueCount = () => {
        console.log(`blue count ${count}`);
       setCount(count+1);

       
       setArr((prevArr) => {
        return ([...prevArr," ", "added "]);
        console.log(arr);
       })
       
    }
    

    return (
        <div>
            <p>Array State Method</p>
            <div>
                <p>Blue Moves = {count}</p>
                <button style={{backgroundColor:"blue", color:"white"}} onClick={blueCount}>Blue</button>
                <p>Array Count ={arr} </p>
            </div>
        </div>
    )
}