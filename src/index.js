//import React, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './components/LandingPage';
import SideBar from './components/SideBar';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
        <Row noGutters={true}>
          <Col lg={2} md={2}>
            <SideBar />
          </Col>
          <Col lg={10} md={10}> 
            <LandingPage />
          </Col>
        </Row>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
