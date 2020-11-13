import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Divider, Container } from 'semantic-ui-react';
import { CarouselProvider, Image, Slide, Slider, Dot } from 'pure-react-carousel';

import PageHeader from './PageHeader';

//import './AboutMe.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

// Import images for carousel
import barleysGangPic from '../../assets/images/Barleys-crew.JPG';
import maraAndDogsPic from '../../assets/images/Mara-and-puppies.png';


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


function AboutMe() {
    const [slide, _ ] = useState(0);

    return (
        <React.Fragment>
            <PageHeader title="About Me" />
            <Grid as={Container} divided='vertically' verticalAlign='top'>
                <Grid.Row>
                    <Grid.Column textAlign="justified" width={7}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Gravida rutrum quisque non tellus orci ac auctor augue. Vulputate eu scelerisque felis imperdiet.
                            Ultrices neque ornare aenean euismod elementum. Suspendisse in est ante in. Massa sapien faucibus
                            et molestie ac feugiat sed lectus vestibulum. Dui faucibus in ornare quam. Accumsan lacus vel 
                            facilisis volutpat est velit egestas dui id. Posuere morbi leo urna molestie. Neque vitae tempus
                            quam pellentesque nec nam. Leo urna molestie at elementum eu facilisis sed odio. Id diam maecenas 
                            ultricies mi eget mauris pharetra et ultrices. Ut morbi tincidunt augue interdum velit euismod. 
                            Mauris cursus mattis molestie a.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <CarouselProvider
                            naturalSlideWidth={1}
                            naturalSlideHeight={1}
                            totalSlides={2}
                            currentSlide={slide}
                            isPlaying
                            interval={6000}
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
