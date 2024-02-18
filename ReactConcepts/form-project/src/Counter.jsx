import { useState , useEffect} from "react"

export default function Counter() {
    let [countX, setCountX] = useState(0);
    let [countY, setCountY] = useState(0);

    let incCountX = () => {
        setCountX((currCount) => currCount + 1)
    };

    let incCountY = () => {
        setCountY((currCount) => currCount + 1)
    };
   
    useEffect(function printSomething(){
        console.log("this is a side-effect")
    },[countX]
    );

    return (
        <div>
            <h3>countX = {countX}</h3>
            <button onClick={incCountX}>+1</button>

            <h3>countY = {countY}</h3>
            <button onClick={incCountY}>+1</button>
        </div>
    )
}