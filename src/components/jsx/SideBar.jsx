import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Button, Divider, Icon } from 'semantic-ui-react';

import ProfileLinks from './ProfileLinks';

import '../css/SideBar.css';


const SideBarHeader = () => {
    return (
        <div className='header-group'>
            <Divider hidden />
            <h1>Justin Sumner</h1>
            <h3>Software Developer</h3>
        </div>
    );
}


const RedirectLinks = () => {
    const [clickedDownload, setClicked] = useState(false);

    return (
        <React.Fragment>
            <Divider hidden />
            <Divider hidden />
            <ProfileLinks />
            <Button 
                animated
                fluid
                size='small'
                className='resume-download-button'
                as="a"
                href="/downloads/Justin-Sumner-Resume.pdf" 
                download 
                target="_self"
                onClick={() => {
                    setClicked(true);
                }}
            >
                <Button.Content visible>
                    Download My Resume
                </Button.Content>
                <Button.Content hidden>
                    { clickedDownload ?
                        "Thanks for Downloading!"
                    :
                        <Icon name="download" />
                    }
                </Button.Content>
            </Button>
        </React.Fragment>
    );
}


const SideBar = () => {
    const [activeItem, setActive] = useState(useLocation().pathname);
    
    return (
        <Menu
            vertical
            inverted
            fixed='left' 
            size='large'
        >
            <Menu.Item>
                <SideBarHeader />
            </Menu.Item>
            <Divider hidden />
            <Divider hidden />
            <Menu.Item 
                as={Link} 
                to="/"
                active={activeItem === "/"}
                onClick={ e => {
                    setActive("/");
                }}
            > 
                HOME
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/resume"
                active={activeItem === "resume"}
                onClick={ e => {
                    setActive("resume");
                }}
            >
                RESUME
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/skillset"
                active={activeItem === "/skillset"}
                onClick={ e => {
                    setActive("/skillset");
                }}
            >
                SKILLSET            
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/portfolio"
                active={activeItem === "/portfolio"}
                onClick={ e => {
                    setActive("/portfolio");
                }}
            >
                PORTFOLIO
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/about-me"
                active={activeItem === "/about-me"}
                onClick={ e => {
                    setActive("/about-me");
                }}
            >
                ABOUT ME
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/contact"
                active={activeItem === "/contact"}
                onClick={ e => {
                    setActive("/contact");
                }}
            >
                CONTACT
            </Menu.Item>
            <Menu.Item>
                <RedirectLinks />
            </Menu.Item>
        </Menu>
    );
}

export default SideBar;
