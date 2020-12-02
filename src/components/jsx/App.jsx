import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid, Transition, Divider } from 'semantic-ui-react'

import SideBar from './SideBar';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import WebResume from './WebResume';
import Skills from './Skills';
import Contact from './Contact';
import Portfolio from './Portfolio';
import ErrorPage from './ErrorPage';

import '../css/App.css';


function NegativeSpace() {
    return (
        <div className='negative-space'>
           <Divider hidden />
           <Divider hidden />
           <Divider hidden />
           <Divider hidden />
        </div>
    );
}


function App() {
    return (
        <Router>
            <Grid stretched>
                <Grid.Row stretched fluid>
                    <Grid.Column width={2} stretched>
                        <Transition.Group
                            animation='fade right' 
                            duration='1200'
                            >
                            <Transition visible={true} transitionOnMount={true}>
                                <SideBar />
                            </Transition>
                        </Transition.Group>
                    </Grid.Column>
                    <Grid.Column stretched width={1}>
                        <NegativeSpace />
                    </Grid.Column>
                    <Grid.Column
                        fluid 
                        stretched
                        textAlign='justified'
                        width={12}
                        >
                        <NegativeSpace />
                        <div className='content-window'>
                            <div className='color-bar-header' />
                            <Switch>
                                <Route exact path="/" component={LandingPage} />
                                <Route path="/resume" component={WebResume} />
                                <Route path="/skills" component={Skills} />
                                <Route path="/portfolio" component={Portfolio} />
                                <Route path="/about-me" component={AboutMe} />
                                <Route path="/contact" component={Contact} />
                                <Route component={ErrorPage} />
                            </Switch>
                        </div>
                    </Grid.Column>
                    <Grid.Column stretched width={1}>
                        <NegativeSpace />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    );
}


export default App;
