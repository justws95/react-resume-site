import React from 'react';
import Masonry from 'react-masonry-css';
import GitHubButton from 'react-github-btn';
import { Divider, Card, Image } from 'semantic-ui-react';

import PageHeader from './PageHeader';

import '../css/Portfolio.css';

import gameOfLifeGif from '../../assets/images/game-of-life.gif';
import resumeWebsitePNG from '../../assets/images/Resume-website.png';
import moreComingSoon from '../../assets/images/more-coming.png';
 

const Portfolio = () => {
    const breakpointColumnsObj = {
        default: 3,
        1300: 2,
        800: 1
    };

    return (
        <React.Fragment>
            <PageHeader title="Portfolio" />
            <Divider hidden />
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="portfolio-masonry-grid"
                columnClassName="portfolio-masonry-grid-column"

            >
                <Card fluid>
                    <Image src={gameOfLifeGif} wrapped ui={false}/>
                    <Card.Content>
                    <Card.Header>Conway's Game of Life</Card.Header>
                        <Card.Description>
                            This project was an implementation of the famous Game of Life originally 
                            created by John Conway. I wrote the core of the project that handles 
                            'playing' the game in C++. I compiled the C++ code as a Python extension 
                            in order to display the game visually. I am in the process of re-writing 
                            this project from scratch as a web application using the PhaserJS game 
                            engine which will be hosted using GitHub Pages.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <GitHubButton href="https://github.com/justws95/Game-of-Life">View on GitHub</GitHubButton>
                    </Card.Content>
                </Card>
                <Card fluid>
                    <Image src={resumeWebsitePNG} wrapped ui={false}/>
                    <Card.Content>
                    <Card.Header>My Resume/Portfolio Website</Card.Header>
                        <Card.Description>
                            Think I did a good job designing this website? You can check out the source for 
                            the client-side application here!
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <GitHubButton href="https://github.com/justws95/react-resume-site">View on GitHub</GitHubButton>
                    </Card.Content>
                </Card>
                <Card fluid>
                    <Image src={moreComingSoon} wrapped ui={false}/>
                    <Card.Content>
                    <Card.Header>Stay Tuned!</Card.Header>
                        <Card.Description>
                            I plan to keep this page updated as I prepare projects to display to the world. 
                            Keep coming back to see what I've been working on! In the meantime, you can follow 
                            the link below to my GitHub profile page to see what I have been working on 
                            and contributing to that way. 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <GitHubButton href="https://github.com/justws95/">Check out my profile!</GitHubButton>
                    </Card.Content>
                </Card>
            </Masonry>
        </React.Fragment>
    );
}

export default Portfolio;
