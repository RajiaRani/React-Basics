export default function Price({newPrice, oldPrice}) {
    let oldStyle = {
        textDecorationLine : "line-through",
    }
    let newStyle = {
        fontWeight : "bold"
    }
    let styles = {
        backgroundColor : "#e0c367",
        height: "50px",
        width: "300px",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius:"14px"
    }
    return (
        <div style={styles}>
            <span style={oldStyle}>{oldPrice} </span> 
            &nbsp; &nbsp;  &nbsp;  
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}