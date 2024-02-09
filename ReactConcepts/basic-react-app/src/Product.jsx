import  "./Product.css";
function Product({title, description,price, author}) {
    
    return (
      <div className="Product">
         <h1>{title}</h1>
         <p>{description}</p>
         <p>{price}</p>
        <p>{author}</p>
         
      </div>
    )
}
export default Product;