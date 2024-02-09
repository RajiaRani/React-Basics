import { useState } from "react";

function Counter(){
//    let [stateVariable, setStateVariable] = useState(0);
let [count, setCount] = useState(0);
   
let incCount = () => {
 setCount(count+1);
 console.log(count);
}
    return (
        <div>
        <h3>Count ={count}</h3>
        <button onClick={incCount}>Click and increase count</button>
        </div>
    )
}
export default Counter;