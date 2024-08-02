export default function Apple(props) {
    return (
        <div className="proo-section">
           <div>
           <h2>There are a apples : {props.color} </h2>
           </div>
           <div>
           <h3>There are {props.number} apples.</h3>
           </div>
        </div>
    );
};