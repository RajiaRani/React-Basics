import './App.css'
import Lottery from './lottery'
import TicketNumber from './ticketNum'


function App() {
   return (
   <>
   <TicketNumber num={5} />
   <TicketNumber num={3} />
   <TicketNumber num={2} />
   </>
   );
}

export default App
