import  "./Product.css";
import Price  from "./Price.jsx";
export default function Product({title, idx}) {
    let description = [
        ["For class 10th students","R.D.Sharma" ], 
        ["For class 12th students", "R.D.Sharma"], 
        ["For class 12th students", "R.D.Sharma"], 
        ["For class 12th students", "R.D.Sharma"] 
    ];
    let newPrice = ["345", "789", "1200", "1500"];
    let oldPrice = ["300", "740","1000", "1600"];

   return(
    <div className="Product">
    <h2>Book Title :{title}</h2>
    <p> {description[idx][0]} </p>
    <p>author : {description[idx][1]}</p>
    <Price  oldPrice={oldPrice[idx]}  newPrice ={newPrice[idx]} />
    </div>
   )
};
