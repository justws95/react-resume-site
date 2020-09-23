import React from 'react';
import './LandingPage.css';
import Typewriter from 'typewriter-effect';
import profilepic from '../images/enlightenment.jpg';
import ProfileLinks from './ProfileLinks'


function LandingPage() {
  return (
    <div className="LandingPage">
      <body>
        <img src={profilepic} className="profilepic"></img>
        <br></br>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Justin Sumner\n')
            .pauseFor(750)
            .typeString(' - Software Devlep')
            .pauseFor(100)
            .deleteChars(3)
            .typeString('eloper')
            .start();
          }}
        />
        <ProfileLinks />
      </body>
    </div>
  );
}

export default LandingPage;
