import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((prevResult) => prevResult + Number(inputRef.current.value)); 
    inputRef.current.value = "";
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((prevResult) => prevResult - Number(inputRef.current.value));
    inputRef.current.value = "";
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((prevResult) => prevResult * Number(inputRef.current.value));
    inputRef.current.value = "";
  }; 
 
  function divide(e) { 
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (value !== 0) {
      setResult((prevResult) => prevResult / value);
    } else {
      alert("Cannot divide by zero");
    }
    inputRef.current.value = "";
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Result: {result}
        </p> 
        <input
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button> 
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App;

