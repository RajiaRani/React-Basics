import Product from "./Product";
function ProductTab() {
    return (
        <>
        <Product title="God is beautiful!!" description="just faith in it" price={200}/>
        <Product title="Word is beautiful!!" description="just faith in it" price={200}/>
        <Product title="Mother is beautiful!!" description="just faith in it" price={200}/>
        <Product title="Hardwork is beautiful!!" description="just faith in it" price={20000}/>
        </>
    )
}
export default ProductTab;
//Note- Number/digits ko hum strings mein pass nhi karna hai humko curly braces {} use karni hogi