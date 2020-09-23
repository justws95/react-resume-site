//import React, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './components/LandingPage';
import SideBar from './components/SideBar';
import {BrowserRouter as Router, Route,} from "react-router-dom";
  

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SideBar />
      <LandingPage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);