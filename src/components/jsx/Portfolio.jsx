import React, { useEffect, useReducer } from 'react';
//import Masonry from 'react-masonry-css';
//import GitHubButton from 'react-github-btn';
import { Divider } from 'semantic-ui-react';

import PageHeader from './PageHeader';

import '../css/Portfolio.css';

import gameOfLifeGif from '../../assets/images/game-of-life.gif';
import resumeWebsitePNG from '../../assets/images/Resume-website.png';
import moreComingSoon from '../../assets/images/more-coming.png';
 
/*
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
*/


const slides = [
    {
      title: "Machu Picchu",
      subtitle: "Peru",
      description: "Adventure is never far away",
      image:
        "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Chamonix",
      subtitle: "France",
      description: "Let your dreams come true",
      image:
        "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Mimisa Rocks",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Four",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      title: "Five",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  ];
  
  function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }
  
  const initialState = {
    slideIndex: 0
  };
  
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };
  
  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div>
        </div>
      </div>
    );
  }




const Portfolio = () => {
    const [state, dispatch] = useReducer(slidesReducer, initialState);
  
    return (
        <React.Fragment className="slides">
            <PageHeader title="Portfolio" />
            <Divider hidden />
            
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
  
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </React.Fragment>
    );
  }

export default Portfolio;
