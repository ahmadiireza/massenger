import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter}  from "react-router-dom";
ReactDOM.render(
  // vseh spa </BrowserRouter> ro ezafeh mikonim
<BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);


