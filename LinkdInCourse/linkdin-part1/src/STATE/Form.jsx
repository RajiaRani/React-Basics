import { useRef } from "react";
export default function Form() {

    const txtTitle = useRef();
    const hexColor = useRef();

let submit = (e) => {
    e.preventDefault();
    //console.log(txtTitle);
    let Title = txtTitle.current.value;
    let Color = hexColor.current.value;
    alert(` Color name = ${Title} , Hexa Value = ${Color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
};
  return(
    <form onSubmit={submit}>
        <input 
        type="text"
        placeholder="title ..." 
        ref={txtTitle}
        />
        <input 
        type="color" 
        ref = {hexColor}
        />
        <br />
        <button>Add</button>

    </form>
  )
}