import Product from "./Product";
function ProductTab() {
    let authors = ["Rajia Rani", "chenchu reddy", "shiva reddy", "geet"];
    // let authors2 = { a:"rajia rani", b: "checnhu reddy", c:"shiva reddy", d:"geet" };
    return (
        <>
        <Product title="God is beautiful!!" description="just faith in it" price={200/2} author={"Rajia Rani"} />
        <Product title="Word is beautiful!!" description="just faith in it" price={200*3} author={"Checnhu Reddy"}/>
        <Product title="Mother is beautiful!!" description="just faith in it" price={200-10} author={"Shiva Reddy"}/>
        <Product title="Hardwork is beautiful!!" description="just faith in it" price={20000+1233} author={"Geet Kaur"}/>
        </>
    )
}
export default ProductTab;
//Note- Number/digits ko hum strings mein pass nhi karna hai humko curly braces {} use karni hogi 
//hum number ki default value bhi set kar sakte hai
