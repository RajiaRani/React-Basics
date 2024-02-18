import TicketNumber from "./ticketNum"
import './ticket.css'
export default function Ticket({ticket}) {
    return (
        <div className="ticket">
            <p>Lottery Ticket</p>
            {ticket.map((num, idx) => (
                <TicketNumber num={num} key={idx} />
            )
            )}
        </div>
    )
}