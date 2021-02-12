import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Button, Divider, Icon } from 'semantic-ui-react';

import ProfileLinks from './ProfileLinks';

import '../css/SideBar.css';

import resumePDF from "../../assets/static/Justin-Sumner-Resume.pdf";


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
    const [resumeDownloadPending, setPendingDownload] = useState(false);

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
                loading={resumeDownloadPending}
                onClick={e => {
                    const fileURL = 'https://js-resume-site-api.herokuapp.com/downloads?document=resume';

                    setPendingDownload(true);

                    fetch(fileURL, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/pdf"
                        }
                    })
                    .then(res => res.blob())
                    .then(response => {
                        const file = new Blob([response], {
                            type: "application/pdf"
                        });

                        const fileURL = URL.createObjectURL(file);                                
                        window.open(fileURL);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .finally(() => {
                        setPendingDownload(false);
                    });
                }}
            >
                <Button.Content visible>
                    Download My Resume
                </Button.Content>
                <Button.Content hidden>
                    <Icon name="download" />
                    <Link to="/public/Justin-Sumner-Resume.pdf" download target="_self" />
                </Button.Content>
            </Button>
            

            <a href="/public/Justin-Sumner-Resume.pdf" download target="_self">
                <p>Click to download</p>
            </a>

        </React.Fragment>
    );
}


const SideBar = () => {
    const [activeItem, setActive] = useState(useLocation().pathname);
    
    return (
        <Menu 
            inverted 
            vertical 
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
