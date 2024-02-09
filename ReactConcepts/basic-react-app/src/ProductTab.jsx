import Product from "./Product";
function ProductTab() {
    // let authors = ["Rajia Rani","Checnhu Reddy","Shiva Reddy"];
    // let authors2 = { a:"rajia rani", b: "checnhu reddy", c:"shiva reddy", d:"geet" };


    return (
        <>
        <Product title="God is beautiful!!" description="just faith in it" price={200/2}/>
         <Product title="Word is beautiful!!" description="just faith in it" price={200*3} />
        <Product title="Mother is beautiful!!" description="just faith in it" price={200-10} />
        <Product title="Hardwork is beautiful!!" description="just faith in it" price={20000+1233} /> 
        </>
    )
}
export default ProductTab;
//Note- Number/digits ko hum strings mein pass nhi karna hai humko curly braces {} use karni hogi 
//hum number ki default value bhi set kar sakte hai
