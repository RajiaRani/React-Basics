import { useState } from "react"

export default function shoppingBag() {
    let [items, setItems] = useState({shoe:0, bags:0, lipsticks:0});
    let updateItems = () => {
        setItems(items+1);
    }
    return (
        <div>
            <p>{items.shoe}</p>
            <p><i className="fa-solid fa-cart-shopping" style={{fontSize:"3rem"}}></i></p>  
        <div className="shopping">
         <button onClick={updateItems}>Shoe</button>  &nbsp; &nbsp;
         <button onClick={updateItems}>Bags</button>    &nbsp;  &nbsp;
         <button onClick={updateItems}>lipsticks</button>
        </div>

        </div>
    )
}