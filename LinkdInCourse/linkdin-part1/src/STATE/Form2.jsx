import { useState } from "react";
export default function Form2() {
let [title, setTitle] = useState("");
let [color, setColor] = useState("#000");

let submit = (e) => {
    e.preventDefault();
    //console.log(txtTitle);
    alert(` Color name = ${title} , Hexa Value = ${color}`);
    setTitle("");
    setColor("#000");
};
  return(
    <form onSubmit={submit}>
        <input 
        type="text"
        placeholder="title ..." 
         value={title}
         onChange={ (e) => setTitle(e.target.value)}
        />
        <input 
        type="color" 
        value={color}
        onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <button>Add</button>

    </form>
  )
}