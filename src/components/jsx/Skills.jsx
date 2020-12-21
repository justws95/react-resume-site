import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as shuffle from 'fisher-yates';
import { 
    Image, 
    Grid, 
    Card,
    Header, 
    Icon,
    Divider
} from 'semantic-ui-react';

import PageHeader from './PageHeader';

import '../css/Skills.css';

// Imports for technology icons
import boostCppIcon from '../../assets/icons/boost-logo.svg';
import bootstrapIcon from '../../assets/icons/bootstrap.png';
import cppIcon from '../../assets/icons/c++.png';
import dockerIcon from '../../assets/icons/docker.png';
import electronIcon from '../../assets/icons/electron.jpg';
import gitIcon from '../../assets/icons/git.png';
import kerasIcon from '../../assets/icons/keras.png';
import nodeIcon from '../../assets/icons/nodejs.png';
import numpyIcon from '../../assets/icons/numpy.png';
import pandasIcon from '../../assets/icons/pandas.png';
import pythonIcon from '../../assets/icons/python.png';
import reactIcon from '../../assets/icons/react.png';
import semanticIcon from '../../assets/icons/semantic-ui.png';
import sklearnIcon from '../../assets/icons/sklearn.png';


const Skills = () => {
    const [cards, setCards] = useState([]);
    const [numFetchedCards, setNumFetched] = useState(0);
    const [moreItems, setMoreItems] = useState(true);

    let rawSkills = [
        {
            title: "Boost C++",
            icon: boostCppIcon,
            alt: "Boost C++ Icon",
            yearsExperience: " Less than 1",
            onDisplay: false,
            meta: "Library",
            link: "https://www.boost.org/"
        },
        {
            title: "Bootstrap CSS",
            icon: bootstrapIcon,
            alt: "Bootstrap Icon",
            yearsExperience: 1,
            onDisplay: false,
            meta: "Library",
            link: "https://getbootstrap.com/"
        },
        {
            title: "C++",
            icon: cppIcon,
            alt: "C++ Icon",
            yearsExperience: 5,
            onDisplay: false,
            meta: "Programming Language",
            link: "https://en.wikipedia.org/wiki/C%2B%2B"
        },
        {
            title: "Docker",
            icon: dockerIcon,
            alt: "Docker Icon",
            yearsExperience: " Less than 1",
            onDisplay: false,
            meta: "DevOps Tool",
            link: "https://www.docker.com/"
        },
        {
            title: "Electron",
            icon: electronIcon,
            alt: "Electron Icon",
            yearsExperience: " Less than 1",
            onDisplay: false,
            meta: "Framework",
            link: "https://www.electronjs.org/"
        },
        {
            title: "Git",
            icon: gitIcon,
            alt: "Git Icon",
            yearsExperience: 2,
            onDisplay: false,
            meta: "Version Control",
            link: "https://git-scm.com/"
        },
        {
            title: "Keras",
            icon: kerasIcon,
            alt: "Keras Icon",
            yearsExperience: 1,
            onDisplay: false,
            meta: "Library",
            link: "https://keras.io/"
        },
        {
            title: "Node JS",
            icon: nodeIcon,
            alt: "Node.js Icon",
            yearsExperience: 1,
            onDisplay: false,
            meta: "Runtime Enviroment",
            link: "https://nodejs.org/en/"
        },
        {
            title: "Numpy",
            icon: numpyIcon,
            alt: "Numpy Icon",
            yearsExperience: 2,
            onDisplay: false,
            meta: "Library",
            link: "https://numpy.org/"
        },
        {
            title: "Pandas",
            icon: pandasIcon,
            alt: "Pandas Icon",
            yearsExperience: 3,
            onDisplay: false,
            meta: "Library",
            link: "https://pandas.pydata.org/"
        },
        {
            title: "Python",
            icon: pythonIcon,
            alt: "Python Icon",
            yearsExperience: 3,
            onDisplay: false,
            meta: "Programming Language",
            link: "https://www.python.org/"
        },
        {
            title: "React",
            icon: reactIcon,
            alt: "React Icon",
            yearsExperience: " Less than 1",
            onDisplay: false,
            meta: "Framework",
            link: "https://reactjs.org/"
        },
        {
            title: "Semantic UI",
            icon: semanticIcon,
            alt: "Semantic UI Icon",
            yearsExperience: " Less than 1",
            onDisplay: false,
            meta: "Library",
            link: "https://semantic-ui.com/"
        },
        {
            title: "Scikit-learn",
            icon: sklearnIcon,
            alt: "Scikit-learn Icon",
            yearsExperience: 2,
            onDisplay: false,
            meta: "Library",
            link: "https://scikit-learn.org/stable/"
        }
    ];

    // Shuffle the skills randomly
    var mySkills = shuffle(rawSkills, Math.random);


    // Dynamically build a Card object
    const cardFactory = (mySkills) => {
        let content = mySkills.pop();
        mySkills.unshift(content);

        //console.log("In the card factory");

        return (
            <Card fluid>
                <Image 
                    as='a'
                    className='skills-page-tech-icon'
                    src={content.icon} 
                    alt={content.alt}
                    href={content.link}
                    target='_blank'
                    bordered
                    centered
                    wrapped
                    ui={false}
                />
                <Card.Content>
                    <Card.Header>{content.title}</Card.Header>
                    <Card.Meta>{content.meta}</Card.Meta>
                </Card.Content>
                <Card.Content extra className='skills-card-extra'>
                    <Icon name='calendar alternate outline' />
                    Years of experience: {content.yearsExperience.toString()}
                </Card.Content>
            </Card>
        );
    }

    // Refresh function to pull a batch of new cards
    const getMoreCards = (mySkills) => {
        //console.log("In the getMoreCards function");
        let remainingSkills = (mySkills.length - numFetchedCards)
        let numToFetch = remainingSkills >= 4 ? 4 : remainingSkills;

        let newCards = [];

        while(newCards.length < numToFetch) {
            cards.push(cardFactory(mySkills));
        }

        setCards(cards + newCards);

        if (cards.length === mySkills.length) {
            setMoreItems(false);
        }
    }

    // Breakpoints for masonry
    const breakpointColumnsObj = {
        default: 5,
        1700: 4,
        1300: 3,
        900: 2,
        400: 1
    };

    
    return (
       <React.Fragment>
            <PageHeader title="Skillset" />
            <Grid centered stackable className='skills-page-content-window'>
               <Grid.Row centered columns={2}>
                    <Grid.Column width={8}>
                        <Header as='h2' className='skills-page-sub-header'>
                            <Icon name='terminal' color='black' />
                            <Header.Content>Application Development</Header.Content>
                        </Header>
                        <p>
                            Skilled in programming in C and C++. Experience creating desktop and server
                            applications with Node.js and Electron. Knowledgeable of Unix internals and key 
                            operating system concepts.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header as='h2' className='skills-page-sub-header'>
                            <Icon name='cloud' color='black' />
                            <Header.Content>DevOps</Header.Content>
                        </Header>
                        <p>
                            Strong experience scripting and automating with Python. Well versed in the software development
                            life cycle using pertinent tools like Git. Experience with cloud tools like Heroku and Google 
                            Cloud Platform.
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={2}>
                    <Grid.Column width={8}>
                        <Header as='h2' className='skills-page-sub-header'>
                            <Icon name='desktop' color='black' />
                            <Header.Content>Web Development</Header.Content>
                        </Header>
                        <p>
                            Capable working full-stack with experience in HTML5, CSS3, JavaScript and TypeScript.
                            Knowledgeable in creating modern progressive web applications with tools like ReactJS,
                            Bootstrap, Semantic UI, and Node.js.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header as='h2' className='skills-page-sub-header'>
                            <Icon name='lab' color='black' />
                            <Header.Content>Data Science</Header.Content>
                        </Header>
                        <p>
                            Strong background in Python and experience working with Scikit-learn, Keras,
                            Jupyter Notebooks, and other tools vital to the data science pipeline.      
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Divider hidden />
                </Grid.Row>
                <Grid.Row textAlign='justified'>
                    {/*
                    <InfiniteScroll
                        dataLength={cards.length}
                        next={getMoreCards}
                        hasMore={moreItems}
                        loader={
                            <p style={{ textAlign: 'center' }}>
                                <b>Loading...</b>
                            </p>
                        }
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>No more items to load</b>
                            </p>
                        }
                    >
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="skills-masonry-grid"
                            columnClassName="skills-masonry-grid-column"
                        >
                            {cards}
                        </Masonry>
                    </InfiniteScroll>
                    */}
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="skills-masonry-grid"
                        columnClassName="skills-masonry-grid-column"
                    >
                        {cardFactory(mySkills)}
                        {cardFactory(mySkills)}
                        {cardFactory(mySkills)}
                        {cardFactory(mySkills)}
                        {cardFactory(mySkills)}
                        {cardFactory(mySkills)}
                        {cardFactory(mySkills)}
                        {cardFactory(mySkills)}
                        {cardFactory(mySkills)}
                        {cardFactory(mySkills)}
                    </Masonry>
                </Grid.Row>
            </Grid>
       </React.Fragment>
   )
}

export default Skills;
