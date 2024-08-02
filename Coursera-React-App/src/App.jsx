
import Nav from './components/Nav.jsx';
import Promo from './components/Promo.jsx';
import Intro1 from './components/Intro1.jsx';
import Intro2 from './components/Intro2.jsx';
import Footer from './components/Footer.jsx';
import Bag from './Bag.jsx';
import Apple from'./fruits/Apple.jsx';
import Banana from'./fruits/Banana.jsx';
import './App.css'
import Button from './Button.jsx';
import StateButton from './StateButton.jsx';

import HomePage from './Navbar/HomePage.jsx';
import AboutPage from './Navbar/AboutPage.jsx';
import ContactPage from './Navbar/ContactPage.jsx';
import {Routes, Route, Link} from 'react-router-dom';

function App() {


  return (
    <>
      {/* <Nav/>
      <Promo/>
      <Intro1/>
      <Intro2/>
      <Footer/> */}
      {/* <Bag>
      <Apple color="yellow" number="5" />
      </Bag>
      <Bag>
       <Banana color="yellow" number="12"/>
     </Bag> */}
     {/* <Button/> */}
     {/* <StateButton/> */}
     <Link to="/" className='nav-items'>Home</Link>
     <Link to="/about-me" className='nav-items'>About-me</Link>
     <Link to="/contact-me" className='nav-items'>Contact</Link>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-me" element={ <AboutPage/>} />
        <Route path="/contact-me" element={<ContactPage/>} />
      </Routes>
    </>
  )
}

export default App
