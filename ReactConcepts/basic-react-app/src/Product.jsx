import  "./Product.css";
function Product({title, description}) {
    return (
      <div className="Product">
         <h1>{title}</h1>
         <p>{description}</p>
      </div>
    )
}
export default Product;