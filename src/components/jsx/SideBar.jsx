import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Divider, Header } from 'semantic-ui-react';
import { InlineIcon } from '@iconify/react';
import herokuIcon from '@iconify-icons/logos/heroku';



import ProfileLinks from './ProfileLinks';

import '../css/SideBar.css';


function SideBarHeader() {
    return (
        <div className='header-group'>
            <Divider hidden />
            <h1>Justin Sumner</h1>
            <h4>Software Developer</h4>
        </div>
    );
}


function RedirectLinks() {
    const [downloadError, setDownloadError] = useState(false);
    const [resumeDownloadPending, setPendingDownload] = useState(false);

    return (
        <React.Fragment>
            <ProfileLinks />
            {/*
            <Popup 
                content="Something went wrong while downloading. Please try again later."
                pinned
                trigger={downloadError}
            />*/}
            <Button 
                icon={downloadError? 'ban' : 'cloud download'}
                content={downloadError ? 'Download Failed': 'Download My Resume'}
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
                        setDownloadError(true);
                        console.log(error);
                    })
                    .finally(() => {
                        setPendingDownload(false);
                    });
                }}
            />
        </React.Fragment>
    );
}


function SideBar() {
    const [activeItem, setActive] = useState("HOME");


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
                active={activeItem === "HOME"}
                onClick={ e => {
                    setActive("HOME");
                }}
            >
                HOME
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/resume"
                active={activeItem === "RESUME"}
                onClick={ e => {
                    setActive("RESUME");
                }}
            >
                RESUME
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/skills"
                active={activeItem === "SKILLS"}
                onClick={ e => {
                    setActive("SKILLS");
                }}
            >
                SKILLS            
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/portfolio"
                active={activeItem === "PORTFOLIO"}
                onClick={ e => {
                    setActive("PORTFOLIO");
                }}
            >
                PORTFOLIO
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/about-me"
                active={activeItem === "ABOUT ME"}
                onClick={ e => {
                    setActive("ABOUT ME");
                }}
            >
                ABOUT ME
            </Menu.Item>
            <Menu.Item 
                as={Link} 
                to="/contact"
                active={activeItem === "CONTACT"}
                onClick={ e => {
                    setActive("CONTACT");
                }}
            >
                CONTACT
            </Menu.Item>
            <Divider hidden />
            <Divider hidden />
            <RedirectLinks />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Menu.Item className='deployed-with-group'>
                <a href="https://www.heroku.com/what" target="_blank" rel="noopener noreferrer">
                    <Header as='h4' inverted content="This site is deployed with" />
                    <InlineIcon icon={herokuIcon} height={32} vAlign='middle' hAlign='center' />
                </a>
            </Menu.Item>
        </Menu>
    );
}


export default SideBar;
