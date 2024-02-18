import './App.css'
import Lottery from './lottery'
import { genTicket , sum} from "./helper";

let winCondition = (ticket) => {
   return sum(ticket) === 10;
}


function App() {
   return (
   <>
   <Lottery n={3} winCondition={winCondition}/>
   </>
   );
}

export default App
