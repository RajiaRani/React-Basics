// import { useState } from "react";
import { useReducer } from "react";
function CheckedBox() {
    // let [checked, setChecked] = useState(false);
    let [checked, setChecked] = useReducer(
        (checked) => !checked,
        false);

    // let handleChecked = () => {
    //     setChecked((checked) => !checked);
    // };

    return (
    <div>
     <input type="checkbox"
     value={checked}
     onChange={setChecked}
      />
      <label>{ checked ? "Checked" : "Not Checked"}</label>
        </div>
    )
};
export default CheckedBox;