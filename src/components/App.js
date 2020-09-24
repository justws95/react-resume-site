import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import SideBar from './SideBar';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import WebResume from './WebResume';

function App() {
    return (
        <Router>
            <div className="App">
                <SideBar />
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/about-me">
                    <AboutMe />
                </Route>
                <Route path="/web-resume">
                    <WebResume />
                </Route>
            </div>
        </Router>
    )
}

export default App;
