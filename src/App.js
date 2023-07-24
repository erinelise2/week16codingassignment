import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Observations from './Pages/Observations';
import Navigation from './Components/Navigation';

export default function App() {
  return (

    <Router>
      <Navigation />
      <div>
        <main>
        <Routes>
          <Route path="/observations" element={<Observations/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>  
				</Routes>
        </main>
      </div>
    </Router>
  );
  // import the new observation form to link to the observation page where there will be a field guide table connected to the update observation form?
}