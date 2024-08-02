export default function Banana(props) {
    return (
        <div className="proo-section">
           <div>
           <h2>There are a Banana: {props.color} </h2>
           </div>
           <div>
           <h3>There are {props.number} Banana.</h3>
           </div>
        </div>
    );
};