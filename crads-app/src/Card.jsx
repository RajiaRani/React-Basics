import "./Card.css";
import Image from "./Image"
export default function Card({title, idx, shop}) {
    let imageUrl = [ "https://images.unsplash.com/photo-1493200754321-b1d3cbc969a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
                    "https://images.unsplash.com/photo-1526827826797-7b05204a22ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
                    "https://images.unsplash.com/photo-1636115305669-9096bffe87fd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
                    "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBjbG90aGVzfGVufDB8fDB8fHww ",
                    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0eSUyMHNhbGVzfGVufDB8fDB8fHww ",
                    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjB0cmVuZHxlbnwwfHwwfHx8MA%3D%3D ",
                    "https://images.unsplash.com/photo-1595550903979-1969e5adeb92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG95c3xlbnwwfHwwfHx8MA%3D%3D ",
                   ];
    return (
        <div className="Card">
            <h4 className="title">{title}</h4>
            <Image image={imageUrl[idx]}/>
            <p className="shop">{shop}</p>
        </div>
    )
}