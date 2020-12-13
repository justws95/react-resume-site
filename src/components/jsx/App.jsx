import React, { useState, useEffect, createRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid, Transition, Divider, Sticky } from 'semantic-ui-react';

import SideBar from './SideBar';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import WebResume from './WebResume';
import Skills from './Skills';
import Contact from './Contact';
import Portfolio from './Portfolio';
import ErrorPage from './ErrorPage';
import HamburgerMenu from './HamburgerMenu';

import '../css/App.css';


const NegativeSpace = (props) => {
    return (
        <div className='negative-space'>
            <Divider hidden />
            <Divider hidden />
            {(!(props.isMobile)) &&
                <Divider hidden />
            }
        </div>
    );
}


const App = () => {
    const [viewportWidth, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const isMobile = () => {
        return (viewportWidth <= 1100);
    }

    let refContext = createRef();

    return (
        <div ref={refContext}>
            <Router>
                {isMobile() &&
                    <Sticky context={refContext}>
                        <HamburgerMenu />
                    </Sticky>  
                }
                <Grid stretched>
                    <Grid.Row stretched fluid>
                        { (!(isMobile()))  &&
                            <Grid.Column width={viewportWidth > 1400 ? 2 : 3} stretched>
                                <Transition.Group
                                    animation='fade right' 
                                    duration='1200'
                                    >
                                    <Transition visible={true} transitionOnMount={true}>
                                        <SideBar />
                                    </Transition>
                                </Transition.Group>
                            </Grid.Column>
                        }
                        <Grid.Column stretched width={isMobile ? 1 : 0}>
                            <NegativeSpace />
                        </Grid.Column>
                        <Grid.Column
                            fluid 
                            stretched
                            textAlign='justified'
                            width={isMobile() ? 14 : 11}
                            >
                            <NegativeSpace isMobile={isMobile}/>
                            <div className='content-window'>
                                <div className='color-bar-header' />
                                <Switch>
                                    <Route exact path="/" component={LandingPage} />
                                    <Route path="/resume" component={WebResume} />
                                    <Route path="/skillset" component={Skills} />
                                    <Route path="/portfolio" component={Portfolio} />
                                    <Route path="/about-me" component={AboutMe} />
                                    <Route path="/contact">
                                        <Contact isMobile={isMobile()} />
                                    </Route>
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
        </div>
    );
}

export default App;
