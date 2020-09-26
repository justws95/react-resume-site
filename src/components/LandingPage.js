import React from 'react';
//import './LandingPage.css';
import Typewriter from 'typewriter-effect';
import ProfileLinks from './ProfileLinks';
import mugshot from "../images/beef.jpeg"


function LandingPage() {
  return (
    <div className="condiv landing-page">
      <img src={mugshot} className="landing-page-pic"></img>
      <Typewriter className="typing-effect"
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
