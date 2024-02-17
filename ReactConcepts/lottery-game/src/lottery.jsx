import { useState } from "react"
import "./lottery.css";
import { genTicket , sum} from "./helper";

export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) == 20;
    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h2>{ isWinning && "Congralutions, you won!!"}</h2>
        </div>
    )
}