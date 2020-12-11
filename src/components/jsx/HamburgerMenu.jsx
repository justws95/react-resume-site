import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';

 
const HamburgerMenu = () => {
    const [activeItem, setActive] = useState(useLocation().pathname);

    return (
        <React.Fragment>
            <Menu attached='top' inverted>
                <Dropdown item icon='bars'>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} 
                            to="/"
                            active={activeItem === "/"}
                            onClick={ e => {
                                setActive("/");
                            }}>
                                HOME
                        </Dropdown.Item>
                        <Dropdown.Item 
                            as={Link} 
                            to="/resume"
                            active={activeItem === "resume"}
                            onClick={ e => {
                                setActive("resume");
                            }}
                        >
                            RESUME
                        </Dropdown.Item>
                        <Dropdown.Item 
                            as={Link} 
                            to="/skillset"
                            active={activeItem === "/skillset"}
                            onClick={ e => {
                                setActive("/skillset");
                            }}
                        >
                            SKILLSET            
                        </Dropdown.Item>
                        <Dropdown.Item 
                            as={Link} 
                            to="/portfolio"
                            active={activeItem === "/portfolio"}
                            onClick={ e => {
                                setActive("/portfolio");
                            }}
                        >
                            PORTFOLIO
                        </Dropdown.Item>
                        <Dropdown.Item 
                            as={Link} 
                            to="/about-me"
                            active={activeItem === "/about-me"}
                            onClick={ e => {
                                setActive("/about-me");
                            }}
                        >
                            ABOUT ME
                        </Dropdown.Item>
                        <Dropdown.Item 
                            as={Link} 
                            to="/contact"
                            active={activeItem === "/contact"}
                            onClick={ e => {
                                setActive("/contact");
                            }}
                        >
                            CONTACT
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                    <Header inverted content="Justin Sumner" />
                </Menu.Item>
            </Menu>
        </React.Fragment>
    );
}

export default HamburgerMenu;
