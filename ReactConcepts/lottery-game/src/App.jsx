import './App.css'
import Lottery from './lottery'
import Ticket from './ticket'


function App() {
   return (
   <>
   <Lottery n={3} winningSum={25}/>
   {/* <Ticket ticket={[0,1,2]} />
   <Ticket ticket={[2,4,6,8,9]} />
   <Ticket ticket={[0,2,7,9,19, 22]} /> */}
   </>
   );
}

export default App
