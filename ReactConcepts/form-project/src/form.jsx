import { useState } from "react"

export default function Form() {
  let [fullName, setFullName] = useState("rajia");
  let [userName, setUserName] = useState("rajia");

  let hanadleNameChange=(event) => {
    setFullName(event.target.value);
  };

let handleUsername = (event) => {
    setUserName(event.target.value);
}
  return (
    <form>
        <label htmlFor="username">FullName:</label>
        <input type="text" 
        placeholder="Enter your full name"  
        value={fullName} 
        onChange={hanadleNameChange}
        id="username"
        />
        <br /> <br />
        <label htmlFor="username">Username</label>
        <input type="text" 
        placeholder="Enter username"
        value={userName}
        onChange={handleUsername}
        id="username"
         />
         <br /> <br />
        <input type="number" placeholder="Enter your roll number" />
        <br /> <br />
        <button>Submit</button>
    </form>
  )
}