import { useState } from "react"
import { genTicket , sum} from "./helper";

export default function Lottery({n,  winningSum}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) == winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket} style={{backgroundColor:"grey", color:"white"}}>Buy new ticket</button>
            <h2>{ isWinning && "Congralutions, you won!!"}</h2>
        </div>
    )
}