import { useState } from "react"

export default function Form() {
  let [fullName, setFullName] = useState("rajia");

  let hanadleNameChange=(event) => {
    setFullName(event.target.value);
  };

  return (
    <form>
        <label htmlFor="username">Full legal name:</label>
        <input type="text" 
        placeholder="Enter your full name"  
        value={fullName} 
        onChange={hanadleNameChange}
        id="username"
        />
        <br /> <br />
        <input type="number" placeholder="Enter your roll number" />
        <br /> <br />
        <button>Submit</button>
    </form>
  )
}