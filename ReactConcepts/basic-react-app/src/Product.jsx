import  "./Product.css";
function Product({title, description,price}) {
    // let list = author.map((author_name) => <li>{author_name}</li>);
    let isDiscount = price>500;
    let styles = {backgroundColor: isDiscount? "pink":"null"}
    return (
      <div className="Product" style={styles}>
         <h1>{title}</h1>
         <p>{description}</p>
         <p>{price}</p>
         {isDiscount && <p>Discount of 10%</p>}
         {isDiscount && <a href="/">Get the discount</a>}
         
      </div>
    )
}
export default Product;