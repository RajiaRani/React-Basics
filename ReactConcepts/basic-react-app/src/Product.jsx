import  "./Product.css";
function Product({title, description,price}) {
    // let list = author.map((author_name) => <li>{author_name}</li>);
    return (
      <div className="Product">
         <h1>{title}</h1>
         <p>{description}</p>
         <p>{price}</p>
         {price>500 && <p>Discount of 10%</p>}
         {price<500 && <a href="/">Get the discount</a>}
         
      </div>
    )
}
export default Product;