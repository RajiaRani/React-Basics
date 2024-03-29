import { useState } from "react"

export default function Form() {
//   let [fullName, setFullName] = useState("rajia");
//   let [userName, setUserName] = useState("rajia");

let [formData, setFormData] = useState({
    fullName:"",
    userName:"",
    phoneNumber:"",
})

//   let hanadleNameChange=(event) => {
//     setFullName(event.target.value);
//   };

// let handleUsername = (event) => {
//     setUserName(event.target.value);
// }

let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValve =  event.target.value;
    console.log(fieldName);
    console.log(newValve)

    setFormData((currData) => {
        // currData[fieldName] = newValve;
        // return {...currData};
        return { ...currData, [fieldName]:newValve};
    });
};

let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
        fullName:"",
        userName:"",
        phoneNumber:"",
    });
};

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">FullName:</label>
        <input type="text" 
        placeholder="Enter your full name"  
        value={formData.fullName} 
        onChange={handleInputChange}
        id="fullname"
        name="fullName"
        />
        <br /> <br />
        <label htmlFor="username">Username</label>
        <input type="text" 
        placeholder="Enter username"
        value={formData.userName}
        onChange={handleInputChange}
        id="username"
        name="userName"
         />
         <br /> <br />
         <label htmlFor="phoneNuber">PhoneNumber</label>
        <input 
        type="number" 
        placeholder="Enter your roll number"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
         />
        <br /> <br />
        <button>Submit</button>
    </form>
  )
}