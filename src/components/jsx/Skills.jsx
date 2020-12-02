import React from 'react';
import * as shuffle from 'fisher-yates';
import { Image, Grid, Card, Divider } from 'semantic-ui-react';
 
import PageHeader from './PageHeader';

import '../css/Skills.css';

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

    var mySkills = shuffle(rawSkills, Math.random);

    // Helper function to return a card dynamically
    const fetchCard = function(mySkills) {
        let content = mySkills.pop();
        mySkills.unshift(content);

        return (
            <Card>
                <Image 
                    as='a'
                    src={content.icon} 
                    alt={content.alt}
                    href={content.link}
                    target='_blank'
                    bordered
                    centered
                    wrapped 
                    ui={false}
                />
            </Card>
        );
    }

    return (
        <React.Fragment>
            <PageHeader title="My Skills" />
            <Grid stretched columns={2} className='skills-page-content-window'>
                <Grid.Row stretched>
                    <Grid.Column stretched width={7} verticalAlign='top' textAlign='justified'>
                        <p>
                            Over the years, I have tried to expose myself to various  sides of the 
                            software development in order to better learn what I like to work on and to 
                            ensure I would be able to hit the ground running in any environment.  I am 
                            proficient in C++ and Python and have a strong working knowledge of the typical 
                            web stack of HTML5, CSS, and JavaScript. I am knowledgeable in using many of the 
                            tools and technologies that are essential for modern data science with Python 
                            such as Jupyter Notebooks, Scikit Learn, and Keras. I also have started working 
                            more with React JS and Node JS for web development, having used them to build this 
                            website. The gallery to the right highlights some of the many different tools, 
                            technologies, languages, libraries, and frameworks I am familiar working with. 
                        </p>   
                    </Grid.Column>
                    <Grid.Column width={9}>
                    <Card.Group itemsPerRow={4}>
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                        <Card raised image={fetchCard(mySkills)} />
                    </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider hidden />
            <Divider hidden />
        </React.Fragment>
    );
}


export default Skills;
