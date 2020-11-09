import React from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Container, Transition, Sticky } from 'semantic-ui-react'
import SideBar from './SideBar';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import WebResume from './WebResume';
import Skills from './Skills';
import Contact from './Contact';
import StickyFooter from './StickyFooter';


function NegativeSpace() {
    return (
        <div className='negative-space'>
            <br />
            <br />
            <br />
        </div>
    );
}


function App() {
    return (
        <Router>
            <Container fluid>
                <Grid stretched>
                    <Grid.Row columns={2} verticalAlign='middle'>
                        <Grid.Column width={3} stretched>
                            <Transition
                            animation='fade right' 
                            duration='800' 
                            visible={true} 
                            transitionOnMount={true}>
                                <SideBar />
                            </Transition>
                        </Grid.Column>
                        <Grid.Column 
                            verticalAlign='top' 
                            fluid 
                            stretched
                            textAlign='justified'
                            width={12}
                            floated='right'
                        >
                            <NegativeSpace />
                            <Sticky>
                                <div className='content-window'>
                                    <div className='color-bar-header' />
                                    <Route exact path="/">
                                        <LandingPage />
                                    </Route>
                                    <Route path="/about-me">
                                        <AboutMe />
                                    </Route>
                                    <Route path="/web-resume">
                                        <WebResume />
                                    </Route>
                                    <Route path="/skills">
                                        <Skills />
                                    </Route>
                                    <Route path="/contact">
                                        <Contact />
                                    </Route>
                                </div>
                            </Sticky>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Router>
    )
}

export default App;
