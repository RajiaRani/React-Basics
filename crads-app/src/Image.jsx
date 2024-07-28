import "./Image.css";
export default function Image({image}) {
    return (
        <div className="Image">
            <img src={image} alt="Card" />
        </div>
    )
};