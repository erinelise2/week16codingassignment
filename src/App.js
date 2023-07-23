import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

import Home from './Components/Home.js';
import About from './Components/About.js';
import Observations from './Components/Observations.js';

export default function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/observations">Observations</Link>
            </li>
          </ul>
        </nav>
        <main>
        <Routes>
          <Route path="/observations" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>  
				</Routes>
        </main>
      </div>
    </Router>
  );
}