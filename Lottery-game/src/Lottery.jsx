import { useState } from 'react'
import './ticket.css'
import {generateRandomNo, sum} from './helper';

export default function Lottery() {
    let [ticket, setTicket] = useState(generateRandomNo(3));
    let isWinning = sum(ticket) === 15;
    let genTicket= () => {
        setTicket(generateRandomNo(3));
    };

    return(
        <div>
            <h2>Lottery Game</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div> <br />
            <button onClick={genTicket}>Generate new ticket</button>
            <h4>{isWinning && "Congraulations you won!!"}</h4>
        </div>
    )
}