import React from 'react';
import './App.css';

import { 
  Container,
  Nav,
  Navbar
} from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link
} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Observations from './Pages/Observations';
import data from './Components/FieldGuide'


export default function App() {
  const [fieldGuide, setFieldGuide] = useState(data)
  
  // const addObservation = {observationID} => {
    // const newObservation = {
      // id. and other identifiers
      // 
  //   }
  // }

  // ** add: addObservation={addObservation} to home element path below after field guide

  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">Your Field Guide</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/observations">Observations</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/observations" element={<Observations fieldGuide={fieldGuide} />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home fieldGuide={fieldGuide}  />}/>  
				</Routes>
      </Container>
    </Router>
  );
  // import the new observation form to link to the observation page where there will be a field guide table connected to the update observation form?
}