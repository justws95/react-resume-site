import React from 'react';
import { Container, Grid, Divider } from 'semantic-ui-react';

import '../css/LandingPage.css';

import mugshot from '../../assets/images/profile-pic.jpg';


function LandingPage() {
  return (
    <Grid stretched container>
      <Grid.Row stretched textAlign='justified'>
        <div className='landing-page-header'>
          <img src={mugshot} alt='Profile Pic' className='profile-pic'/>
          <h1 className='greeting'>I'm</h1>
          <h1 className='colored-greeting'>Justin Sumner</h1>    
        </div>
      </Grid.Row>
      <Grid.Row stretched>
        <Container text={true} textAlign='justified'>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Container>
      </Grid.Row>
    </Grid>
  );
}

export default LandingPage;
