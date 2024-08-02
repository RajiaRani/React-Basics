export default function Cherry(props) {
    return (
        <div className="proo-section">
           <div>
           <h2>There are a cherries : {props.color} </h2>
           </div>
           <div>
           <h3>There are {props.number} cherries.</h3>
           </div>
        </div>
    );
};