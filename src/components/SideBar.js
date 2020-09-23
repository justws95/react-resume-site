import React from 'react';
import { Link } from "react-router-dom";
import './SideBar.css';


function NavItem(props) {
    return (
        <li className="Side-Bar-Item">
            <Link to={props.tolink} >{props.item} </Link>
        </li>
    );
}


// TODO: Remember to use hooks API to keep track of state of current selection
function SideBar() {
    return (
      <div className="Side-Bar">
        <body>
            <nav>
                <ul>
                    <NavItem item="Home" tolink="/" ></NavItem>
                    <NavItem item="Web Resume" tolink="/web-resume"></NavItem>
                    <NavItem item="Skills" tolink="/skills"></NavItem>
                    <NavItem item="Project Spotlight" tolink="/project-spotlight"></NavItem>
                    <NavItem item="About Me" tolink="/about-me" ></NavItem>
                    <NavItem item="Contact" tolink="/contact"></NavItem>
                </ul>
            </nav>
        </body>
    </div>
  );
}

export default SideBar;
