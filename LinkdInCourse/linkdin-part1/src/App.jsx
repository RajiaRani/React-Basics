
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Basic from './Basic';
import Emotions from './STATE/state.jsx';
import Effect from './STATE/useEffect.jsx';
import { useState } from 'react';
import CheckedBox from './STATE/CheckBox.jsx';
import Form from './STATE/Form.jsx';
import Form2 from './STATE/Form2.jsx';
import Datafetch from './STATE/fetchData.jsx';
import GraphData from './STATE/GraphData.jsx';
function App() {

const dishes = [ "Apple pii", "Chicken soup", "Dosa", "Dal Makhani", "Mongo Pii"];
const dishObject = dishes.map((dish, index) => ({
  id: index,
  title: dish
})
);
return (
   <div className="App">
     <>
      {/* <Navbar name="Rajia"/>
      <Basic dishObject={dishObject} />
      <Footer date={new Date().getFullYear()}/> */}
     {/* <Emotions/>
     <Effect/> */}
     {/* <CheckedBox/> */}
     {/* <Form2/> */}
     {/* <Datafetch/> */}
     <GraphData/>
   </>
   </div>
  )
}

export default App
