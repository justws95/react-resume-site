import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Divider, Container } from 'semantic-ui-react';
import { CarouselProvider, Image, Slide, Slider, Dot } from 'pure-react-carousel';

import PageHeader from './PageHeader';

import '../css/AboutMe.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

// Import images for carousel
import barleysGangPic from '../../assets/images/Barleys-crew.JPG';
import maraAndDogsPic from '../../assets/images/Mara-and-puppies.png';


function AboutMe() {
    let slide = 0;

    const CustomDotGroup = ({ slides, size }) => (
        <Container textAlign="center">
            <Button.Group size={size}>
                {[...Array(slides).keys()].map(_slide => (
                    <Button as={Dot} key={_slide} icon="circle" slide={_slide} />
                ))}
            </Button.Group>
        </Container>
    );
      
    CustomDotGroup.defaultProps = {
        size: "mini"
    };
    
    CustomDotGroup.propTypes = {
        slides: PropTypes.number.isRequired,
        size: PropTypes.string
    };
    

    return (
        <React.Fragment>
            <PageHeader title="About Me" />
            <Grid 
                divided='vertically' 
                verticalAlign='middle'
                padded='vertically' 
                className='about-me-content-window'
            >
                <Grid.Row columns={3}>
                    <Grid.Column textAlign="justified" width={8}>
                        <p>
                            I am an upcoming graduate of the University of Tennessee, Knoxville where I have been 
                            studying Computer Science. Despite completing my degree just this year, I have over 2 
                            years of industry work experience working for multinational companies like Nissan North America 
                            and Siemens Healthineers. While I have tried to expose myself to various and diverse areas 
                            within the field of software, I have mostly concentrated my academic and personal studies on 
                            data science, web development, and systems development.
                        </p>
                        <p>
                            In my free time, I enjoy going for a run along the river,  playing a few video games, 
                            spending time with friends and family, cooking and overly complicated meal from scratch, 
                            and of course, coding. Some of the recent software projects that I have been working include 
                            creating a web application to simulate Conway’s Game of Life. I had made a version of this project
                            in C++ and Python in the past, but recently decided to rewrite it from scratch as a web 
                            application powered by the PhaserJS game engine. The other big personal project that I have been 
                            working on is the website that you are currently viewing. I created this site using ReactJS and 
                            Semantic UI for the front-end with the back-end using NodeJS and Express to create the REST API 
                            that handles communication.
                        </p>
                        <p>
                            I am currently located in Knoxville, Tennessee where my girlfriend and I share a house with 
                            our two dogs who are convinced they are the ones actually in charge. I would be open to the 
                            possibility of relocating just about anywhere for work, including internationally!  Lastly, I am 
                            definitely the kind of person who has a much easier time writing a recursive function in C++ or a 
                            depth first search in Python than I do writing an ‘About Me’ page, so if you or your company are 
                            looking for your next developer and think I might be a good fit for you organization, I would 
                            love to get in touch! 
                        </p>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Divider hidden />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <CarouselProvider
                            naturalSlideWidth={1}
                            naturalSlideHeight={1}
                            totalSlides={2}
                            currentSlide={slide}
                            isPlaying
                            interval={6500}
                        >
                            <Slider>
                                <Slide index={0}>
                                    <Image src={maraAndDogsPic} />
                                </Slide>
                                <Slide index={1}>
                                    <Image src={barleysGangPic} />
                                </Slide>
                            </Slider>
                            <Divider hidden />
                            <CustomDotGroup slides={2} />
                        </CarouselProvider>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </React.Fragment>
    );
}

export default AboutMe;
