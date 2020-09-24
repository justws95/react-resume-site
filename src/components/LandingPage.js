import React from 'react';
import './LandingPage.css';
import Typewriter from 'typewriter-effect';
import ProfileLinks from './ProfileLinks'


function LandingPage() {
  return (
    <div className="condiv LandingPage">
      <img src="../images/beef.jpeg" className="profilepic"></img>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Justin Sumner')
          .pauseFor(750)
          .typeString(' - Software Devlep')
          .pauseFor(100)
          .deleteChars(3)
          .typeString('eloper')
          .start();
        }}
      />
      <ProfileLinks />
    </div>
  );
}

export default LandingPage;
