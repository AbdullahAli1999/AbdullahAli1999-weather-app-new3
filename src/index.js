import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import NottFound from './pages/NottFound.js';
import './index.css';

export default function App(){
  return(
    <Router>
  <Routes>
    <Route  path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route  path='about' element={<About />}/>
      <Route  path='contact' element={<Contact />}/>
      <Route  path='*' element={<NottFound />}/>
      </Route>
  </Routes>
  </Router>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
