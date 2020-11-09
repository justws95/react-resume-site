import React, { useState } from 'react';
import '../css/Skills.css';
import { 
    Image, 
    Divider, 
    Segment, 
    Container
 } from 'semantic-ui-react';

// Imports for technology icons
import boostCppIcon from '../../assets/icons/boost-logo.svg';
import bootstrapIcon from '../../assets/icons/bootstrap.png';
import cppIcon from '../../assets/icons/c++.png';
import dockerIcon from '../../assets/icons/docker.png';
import gitIcon from '../../assets/icons/git.png';
import kerasIcon from '../../assets/icons/keras.png';
import nodeIcon from '../../assets/icons/nodejs.png';
import numpyIcon from '../../assets/icons/numpy.png';
import pandasIcon from '../../assets/icons/pandas.png';
import pythonIcon from '../../assets/icons/python.png';
import reactIcon from '../../assets/icons/react.png';
import semanticIcon from '../../assets/icons/semantic-ui.png';
import sklearnIcon from '../../assets/icons/sklearn.png';


let shuffle = require('fisher-yates');


function Skills() {
    let rawSkills = [
        {
            title: "Boost C++",
            icon: boostCppIcon,
            alt: "Boost C++ Icon",
            yearsExperiance: " < 1",
            onDisplay: false,
            meta: "Library",
            link: "https://www.boost.org/"
        },
        {
            title: "Bootstrap CSS",
            icon: bootstrapIcon,
            alt: "Bootstrap Icon",
            yearsExperiance: 1,
            onDisplay: false,
            meta: "Library",
            link: "https://getbootstrap.com/"
        },
        {
            title: "C++",
            icon: cppIcon,
            alt: "C++ Icon",
            yearsExperiance: 5,
            onDisplay: false,
            meta: "Programming Language",
            link: "https://en.wikipedia.org/wiki/C%2B%2B"
        },
        {
            title: "Docker",
            icon: dockerIcon,
            alt: "Docker Icon",
            yearsExperiance: " < 1",
            onDisplay: false,
            meta: "DevOps Tool",
            link: "https://www.docker.com/"
        },
        {
            title: "Git",
            icon: gitIcon,
            alt: "Git Icon",
            yearsExperiance: 2,
            onDisplay: false,
            meta: "DevOps Tool",
            link: "https://git-scm.com/"
        },
        {
            title: "Keras",
            icon: kerasIcon,
            alt: "Keras Icon",
            yearsExperiance: 1,
            onDisplay: false,
            meta: "Library",
            link: "https://keras.io/"
        },
        {
            title: "Node JS",
            icon: nodeIcon,
            alt: "Node.js Icon",
            yearsExperiance: 1,
            onDisplay: false,
            meta: "Runtime Enviroment",
            link: "https://nodejs.org/en/"
        },
        {
            title: "Numpy",
            icon: numpyIcon,
            alt: "Numpy Icon",
            yearsExperiance: 2,
            onDisplay: false,
            meta: "Library",
            link: "https://numpy.org/"
        },
        {
            title: "Pandas",
            icon: pandasIcon,
            alt: "Pandas Icon",
            yearsExperiance: 3,
            onDisplay: false,
            meta: "Library",
            link: "https://pandas.pydata.org/"
        },
        {
            title: "Python",
            icon: pythonIcon,
            alt: "Python Icon",
            yearsExperiance: 3,
            onDisplay: false,
            meta: "Programming Language",
            link: "https://www.python.org/"
        },
        {
            title: "React",
            icon: reactIcon,
            alt: "React Icon",
            yearsExperiance: " < 1",
            onDisplay: false,
            meta: "Framework",
            link: "https://reactjs.org/"
        },
        {
            title: "Semantic UI",
            icon: semanticIcon,
            alt: "Semantic UI Icon",
            yearsExperiance: " < 1",
            onDisplay: false,
            meta: "Library",
            link: "https://semantic-ui.com/"
        },
        {
            title: "Scikit-learn",
            icon: sklearnIcon,
            alt: "Scikit-learn Icon",
            yearsExperiance: 2,
            onDisplay: false,
            meta: "Library",
            link: "https://scikit-learn.org/stable/"
        }
    ];

    const [isInitialArr, setInitialArrOrder] = useState(true);
    const [mySkills, setMySkills] = useState(rawSkills.slice());

    if (isInitialArr) {
        let _skills = shuffle(rawSkills, Math.random)
        setInitialArrOrder(false);
        setMySkills(_skills.slice());
    }

    // Helper function to return a card dynamically
    const fillImage = function(mySkills) {
        let content = mySkills.pop();

        return (
            <Image 
                as='a'
                src={content.icon} 
                alt={content.alt}
                size='tiny'
                wrapped 
                ui={false}
                href={content.link}
                target='_blank'
                bordered={true}
            />
        );
    }

    /*
    return (
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                    <h1>My Skill Set</h1>
                </Grid.Column>
                <Grid.Column>
                    <Segment raised>
                        <Image.Group size='tiny'>
                            {fillImage(mySkills)}
                            {fillImage(mySkills)}
                            {fillImage(mySkills)}
                            {fillImage(mySkills)}
                            <Divider hidden />
                            {fillImage(mySkills)}
                            {fillImage(mySkills)}
                            {fillImage(mySkills)}
                            {fillImage(mySkills)}
                            <Divider hidden />
                            {fillImage(mySkills)}
                            {fillImage(mySkills)}
                            {fillImage(mySkills)}
                            {fillImage(mySkills)}
                        </Image.Group>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
    */
   return (
        <div id='skills-content-window'>
            <div id='skills-description'>
                <Container text={true} textAlign='justified'>
                    <h1>My Skill Set</h1>
                    <Divider hidden />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Container>
            </div>
            <div id='skills-image-group'>
                <Segment raised>
                    <Image.Group size='tiny'>
                        {fillImage(mySkills)}
                        {fillImage(mySkills)}
                        {fillImage(mySkills)}
                        {fillImage(mySkills)}
                        <Divider hidden />
                        {fillImage(mySkills)}
                        {fillImage(mySkills)}
                        {fillImage(mySkills)}
                        {fillImage(mySkills)}
                        <Divider hidden />
                        {fillImage(mySkills)}
                        {fillImage(mySkills)}
                        {fillImage(mySkills)}
                        {fillImage(mySkills)}
                    </Image.Group>
                </Segment>
            </div>
        </div>
    );
}

export default Skills;
