import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';
import Contact from './Contact';
import Details from './Details';
import Corn from './Corn';
import Rice from './Rice';
import Mirchi from './Mirchi';
import Cotton from './Cotton';
import Turmeric from './Turmeric';
import Jowar from './Jowar';
import Footer from './Footer';

export default function Main() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Details/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      <Routes>
        <Route path='/Corn' element={<Corn/>} />
        <Route path='/Rice' element={<Rice/>} />
        <Route path='/Mirchi' element={<Mirchi/>} />
        <Route path='/Cotton' element={<Cotton/>} />
        <Route path='/Turmeric' element={<Turmeric/>} />
        <Route path='/Jowar' element={<Jowar/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
