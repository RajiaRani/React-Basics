import { useState } from "react"
import { genTicket , sum} from "./helper";
import Ticket from "./ticket";

export default function Lottery({n=3,  winningSum=20}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) == winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket} style={{backgroundColor:"green", color:"white"}}>Buy new ticket</button>
            <h2>{ isWinning && "Congralutions, you won!!"}</h2>
        </div>
    )
}