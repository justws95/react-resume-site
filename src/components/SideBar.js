import React, { useState } from 'react';
import Link from "react-router-dom/Link";
//import './SideBar.css';

//TODO: Figure out how to use the hooks api to set active state
/*
function NavItem(props) {
    return (
        <li className="Nav-Item">
            <Link 
            to={props.tolink} 
            onClick={props.activec.bind(this, props.item)}>
                {props.item}
            </Link>
        </li>
    );
}


function SideBar() {
    const [activeItem, setActive] = useState(false);

    function setActive(id) {
        document.getElementById(id).activeItem = true;
    }

    setActive("ul-Home-tab");

    return (
      <div className="Side-Bar">
        <body>
            <nav>
                <ul>
                    <NavItem id="ul-Home-tab" item="Home" tolink="/"  activec={activeItem}></NavItem>
                    <NavItem id="ul-Resume-tab" item="Web Resume" tolink="/web-resume" activec={activeItem}></NavItem>
                    <NavItem id="ul-Skills-tab" item="Skills" tolink="/skills" activec={activeItem}></NavItem>
                    <NavItem id="ul-Project-tab" item="Project Spotlight" tolink="/project-spotlight" activec={activeItem}></NavItem>
                    <NavItem id="ul-About-tab" item="About Me" tolink="/about-me" activec={activeItem}></NavItem>
                    <NavItem id="ul-Contact-tab" item="Contact" tolink="/contact" activec={activeItem}></NavItem>
                </ul>
            </nav>
        </body>
    </div>
  );
}

export default SideBar;
*/

function NavItem(props) {
    return (
        <li className="Nav-Item">
            <Link to={props.tolink}>{props.item}</Link>
        </li>
    );
}


function SideBar() {
    return (
      <div className="side-bar">
        <body>
            <nav>
                <ul>
                    <NavItem item="Home" tolink="/"></NavItem>
                    <NavItem item="Web Resume" tolink="/web-resume"></NavItem>
                    <NavItem item="Skills" tolink="/skills"></NavItem>
                    <NavItem item="Project Spotlight" tolink="/project-spotlight"></NavItem>
                    <NavItem item="About Me" tolink="/about-me"></NavItem>
                    <NavItem item="Contact" tolink="/contact"></NavItem>
                </ul>
            </nav>
        </body>
    </div>
  );
}

export default SideBar;
