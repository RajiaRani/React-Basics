import TicketNumber from "./ticketNum"

export default function Ticket({ticket}) {
    return (
        <div>
            {ticket.map((num, idx) => {
                <TicketNumber num={num} key={idx} />
            })}
        </div>
    )
}