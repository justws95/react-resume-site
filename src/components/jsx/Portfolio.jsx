import React from 'react';
import Masonry from 'react-masonry-css'
import { Divider, Card, Image, Icon } from 'semantic-ui-react';

import PageHeader from './PageHeader';

import '../css/Portfolio.css';

import gameOfLifeGif from '../../assets/images/game-of-life.gif';
import resumeWebsitePNG from '../../assets/images/Resume-website.png';
import moreComingSoon from '../../assets/images/more-coming.png';
 

function Portfolio() {

    const breakpointColumnsObj = {
        default: 3,
        700: 2,
        500: 1
      };

    return (
        <React.Fragment>
            <PageHeader title="Portfolio" />
            <Divider hidden />
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                <Card fluid>
                    <Image src={gameOfLifeGif} wrapped ui={false}/>
                    <Card.Content>
                    <Card.Header>Conway's Game of Life</Card.Header>
                        <Card.Description>
                            This project was an implementation of the famous Game of Life originally created by 
                            John Conway. I wrote the core of the project that handles 'playing' the game in C++.
                            I compiled the C++ code as a Python extension in order to display the game visually.
                            I plan on proting this project into a web application here very soon!
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="https://github.com/justws95/Game-of-Life" target="_blank" rel="noopener noreferrer">
                            <Icon name='linkify' />
                            https://github.com/justws95/Game-of-Life
                        </a>
                    </Card.Content>
                </Card>
                <Card fluid>
                    <Image src={resumeWebsitePNG} wrapped ui={false}/>
                    <Card.Content>
                    <Card.Header>My Resume/Portfolio Website</Card.Header>
                        <Card.Description>
                            Think I did a good job designing this website? I created a template based off of it so
                            that anyone could clone and build their own quickly. I soon plan to write a Medium article
                            going over how I built the site from scratch.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="https://github.com/justws95/react-resume-site" target="_blank" rel="noopener noreferrer">
                            <Icon name='linkify' />
                            https://github.com/justws95/react-resume-site
                        </a>
                    </Card.Content>
                </Card>
                <Card fluid>
                    <Image src={moreComingSoon} wrapped ui={false}/>
                    <Card.Content>
                    <Card.Header>Stay Tuned!</Card.Header>
                        <Card.Description>
                            I contininuously keep this page updated as I prepare projects to display to the world. 
                            Keep coming back to see what I've been working on! In the meantime, you can follow the link below
                            to my github profile page to see what I have been working on and contributing to that way. 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="https://github.com/justws95/" target="_blank" rel="noopener noreferrer">
                            <Icon name='linkify' />
                            https://github.com/justws95/
                        </a>
                    </Card.Content>
                </Card>
                
            </Masonry>
        </React.Fragment>
    );
}

export default Portfolio;
