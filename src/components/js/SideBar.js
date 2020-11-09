import React, { useState } from 'react';
import "../css/SideBar.css";
import Link from 'react-router-dom/Link';
import { Menu } from 'semantic-ui-react'
import ProfileLinks from './ProfileLinks';


function Header()
{
    return (
        <div className='header-group'>
            <br />
            <h1>Justin Sumner</h1>
            <h4>Software Developer</h4>
        </div>
    );
}


function SideBar()
{
    const [activeItem, setActive] = useState("HOME");

    return (
        <Menu 
            inverted 
            vertical 
            fixed='left' 
            size='large'
        >
            <Menu.Item>
                <Header />
            </Menu.Item>
            <br />
            <br />
            <br />
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
                to="/web-resume"
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
            <ProfileLinks />
        </Menu>
    );
}

export default SideBar;
