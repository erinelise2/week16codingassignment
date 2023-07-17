import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Components/Home.js';
import About from './Components/About.js';
import Observations from './Components/Observations.js'

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

        <Switch>
          <Route path="/observations">
            <Projects/>
          </Route>

					<Route path="/about">
            <About />
          </Route>
           
					<Route path="/">
            <Home />
          </Route>
          
				</Switch>
      </div>
    </Router>
  );
}