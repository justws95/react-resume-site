import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { 
  Container, 
  Grid, 
  Header, 
  Image, 
  Transition 
} from 'semantic-ui-react';

import '../css/LandingPage.css';

import landingPagePic from '../../assets/images/profile-pic.jpg';


const LandingPage = (props) => {
  const [isInitial, setInitialLoad] = useState(props.isInitial);
  const [doneTyping, setDone] = useState(!(props.isInitial));

  useEffect(() => {
    document.title = "Justin Sumner";
  });

  return (
    <React.Fragment>
      <Grid
        centered
        className='landing-page-grid-window'
        verticalAlign='top' 
        stretched
        padded='vertically'
        relaxed='very'
        stackable
      >
        <Grid.Row textAlign='justified'>
          { isInitial ?
            <Header 
              as="h1"
              className="landing-page-header"
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(600)
                    .changeDelay(125)
                    .typeString("Hi  ")
                    .pauseFor(1000)
                    .deleteChars(2)
                    .changeDelay(100)
                    .typeString(", I'm Justin Sumner")
                    .pauseFor(750)
                    .callFunction(() => {
                      setInitialLoad(false);
                      setDone(true);
                      props.setDoneFromChild(true);
                    })
                    .start();
                }}
              />
            </Header>
            :
            <Transition visible={doneTyping} animation='fade' duration={1500}>
              <Header 
                as="h1" 
                className="landing-page-header"
                dividing
              >
                Hi, I'm<font color='#1dbf94'>&nbsp;Justin Sumner</font>
              </Header>
            </Transition>
          }
        </Grid.Row>
        <Grid.Row>
          <Grid.Column stretched width={6}>
            <Image src={landingPagePic} bordered rounded spaced='right' />
          </Grid.Column>
          <Grid.Column stretched width={10} textAlign='justified' >
            <Container textAlign='justified' className='landing-page-main-text'>
              <p>
                Ever curious and passionate about learning new technologies, I am an upcoming graduate 
                with a track record of working in challenging but exciting roles for multinational 
                companies looking to innovate. I am experienced working with multiple programming languages 
                and frameworks and am always excited to get my hands dirty learning a new one. I want to 
                find myself working on projects that push the boundary of what's possible in tech and with 
                the kind of people who are also ready to take on this challenge. I have a strong background 
                in C, C++, and Python and also have experience with web development and data science.
              </p>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default LandingPage;
