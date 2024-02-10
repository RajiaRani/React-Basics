import { useState } from "react"

export default function shoppingBag() {
    let [items, setItems] = useState({shoe:0, bag:0, lipstick:0});
    let updateShoe = () => {
        console.log(`shoe count = ${items.shoe}`);
     
        setItems((prevItems) => {
            return ({...prevItems, shoe:prevItems.shoe+1});
        })
    }
    let updateBag = () => {
        console.log(`bag count = ${items.bag}`);
        setItems((prevItems) => {
            return ({...prevItems, bag:prevItems.bag+1});
        })
    }
    let updateLipstick = () => {
        console.log(`lipstick count = ${items.lipstick}`);
        setItems((prevItems) => {
            return ({...prevItems, lipstick:prevItems.lipstick+1});
        })
    }
    return (
        <div>
            <p>{(items.shoe)}
            +{(items.bag)}
           +{(items.lipstick)}</p>
            
            <p><i className="fa-solid fa-cart-shopping" style={{fontSize:"3rem"}}></i></p>  
        <div className="shopping">
         <button onClick={updateShoe}>Shoe</button>  &nbsp; &nbsp;
         <button onClick={updateBag}>Bags</button>    &nbsp;  &nbsp;
         <button onClick={updateLipstick}>lipsticks</button>
        </div>

        </div>
    )
}