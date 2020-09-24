import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import SideBar from './SideBar';
import LandingPage from './LandingPage';

function App() {
    return (
        <Router>
            <div className="App">
                <SideBar />
                <Route exact path="/">
                    <LandingPage />
                </Route>
            </div>
        </Router>
    )
}

export default App;
