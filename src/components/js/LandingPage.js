import React from 'react';
import '../css/LandingPage.css';
//import Typewriter from 'typewriter-effect';
import mugshot from "../../assets/images/profile-pic.jpg"
import { Container, Grid, Divider } from 'semantic-ui-react';

/*
function LandingPage() {
  return (
    <Container fluid textAlign='justified'>
      <Grid stretched>
        <Grid.Row columns={2}>
          <Grid.Column stretched> 
            <img src={mugshot} alt="Profile Picture" className='profile-pic'/>                
          </Grid.Column>
          <Grid.Column>
            <h1 className='greeting'>I'm</h1>
            <h1 className='colored-greeting'>Justin Sumner</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}*/


function LandingPage() {
  return (
    <div className='landing-page-header'>
      <img src={mugshot} alt="Profile Pic" className='profile-pic'/>
      <h1 className='greeting'>I'm</h1>
      <h1 className='colored-greeting'>Justin Sumner</h1>    
    </div>
  );
}

export default LandingPage;
