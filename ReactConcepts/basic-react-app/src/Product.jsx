import  "./Product.css";
function Product({title, description,price}) {
    // let list = author.map((author_name) => <li>{author_name}</li>);
    if(price > 500) {
    return (
      <div className="Product">
         <h1>{title}</h1>
         <p>{description}</p>
         <p>{price}</p>
         <p>Discount of 10%</p>
         
      </div>
    )
    } else {
        return (
            <div className="Product">
               <h1>{title}</h1>
               <p>{description}</p>
               <p>{price}</p>
            </div>
          )
    }

}
export default Product;