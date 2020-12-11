import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Divider, Container, Sticky, Ref } from 'semantic-ui-react';=
import { CarouselProvider, Image, Slide, Slider, Dot } from 'pure-react-carousel';

import PageHeader from './PageHeader';

import '../css/AboutMe.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

// Import images for carousel
import barleysGangPic from '../../assets/images/Barleys-crew.JPG';
import maraAndDogsPic from '../../assets/images/mara-and-pups.JPEG';
import bigTree from '../../assets/images/big-tree.JPG';
import rockClimbing from '../../assets/images/rock-climbing.JPG';
import soccerPic from '../../assets/images/soccer-game.JPG';


const  AboutMe = () => {
    let slide = 0;
    let context = createRef();

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
                centered
                stackable
                divided='vertically' 
                verticalAlign='top'
                padded='vertically' 
                className='about-me-content-window'
            >
                <Ref innerRef={context}>
                    <Grid.Row columns={3}>
                        <Grid.Column textAlign="justified" width={8}>
                            <p>
                                I am an upcoming graduate of the University of Tennessee, Knoxville where 
                                I have been studying Computer Science. Despite completing my degree just 
                                this year, the multiple Co-Op internships I have had means I will be graduating 
                                with multiple years of experience working for multinational corporations. In my 
                                free time, I enjoy going for a run along the river, playing a few video games, 
                                spending time with friends and family, cooking and overly complicated meal from 
                                scratch, and of course, coding. I am currently located in Knoxville, Tennessee 
                                where my girlfriend and I share a house with our two dogs who are convinced they 
                                are the ones actually in charge. I would be open to the possibility of relocating 
                                just about anywhere for work, including internationally! Lastly, I am definitely 
                                the kind of person who has a much easier time writing a recursive function in C++ 
                                or a depth first search in Python than I do writing an ‘About Me’ page, so if you 
                                or your company are looking for your next developer and think I might be a good 
                                fit for you organization, I would love to get in touch!
                            </p>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Divider hidden />
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Sticky context={context}>
                                <Divider hidden />
                                <CarouselProvider
                                    naturalSlideWidth={307}
                                    naturalSlideHeight={400}
                                    totalSlides={5}
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
                                        <Slide index={2}>
                                            <Image src={rockClimbing} />
                                        </Slide>
                                        <Slide index={3}>
                                            <Image src={soccerPic} />
                                        </Slide>
                                        <Slide index={4}>
                                            <Image src={bigTree} />
                                        </Slide>
                                    </Slider>
                                    <Divider hidden />
                                    <CustomDotGroup slides={5} />
                                </CarouselProvider>
                            </Sticky>
                        </Grid.Column>
                    </Grid.Row>
                </Ref>
            </Grid>
        </React.Fragment>
    );
}

export default AboutMe;
