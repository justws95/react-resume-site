import React, { useState } from 'react';
import Link from "react-router-dom/Link";
//import './SideBar.css';

//TODO: Figure out how to use the hooks api to set active state
function NavItem(props) {
    return (
        <li>
            <Link to={props.tolink}>{props.item}</Link>
        </li>
    );
}


function SideBar() {
    return (
      <div className="side-bar">
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
    </div>
  );
}

export default SideBar;
