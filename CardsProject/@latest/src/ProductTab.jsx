import Product from "./Product";
let style = {
    display :"flex",
    flexWrap:"wrap",
    justifyContent: "center",
    alignItems: "center"
}
export default function ProductTab() {
    return (
        < div  style={style}>
        <Product title="Science 10th" idx={0}/>
        <Product title="Chemistry 12th" idx={1}/>
        <Product title="Physics 12th" idx={2}/>
        <Product title="Mathematics 12th" idx={3}/>
        </div>
    )
};