/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Index.css';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  </BrowserRouter>
);


