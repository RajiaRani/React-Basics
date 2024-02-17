import { useState } from "react"

export default function Lottery() {
    let [ticket, setTicket] = useState([0,0,0]);
    return (
        <div>
            <h2>Lottery Game</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        </div>
    )
}