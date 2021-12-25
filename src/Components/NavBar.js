
import React from "react";
import "./NavBarModule.css";
import {Link} from "react-router-dom";
const NavBar = () => {
    return(
        <div className="header">
            <ul className="header1">
                <li className="header2">
                  
                    <Link to={"/Home"} className="header3">Home</Link>
                </li>
                <li className="header2">
                
                    <Link to="/AboutMe" className="header3">AboutMe</Link>
                </li>
                <li className="header2">
                
                <Link to="/Skills" className="header3">Skills</Link>
            </li>
            </ul>
        </div>
    )
}














export default NavBar;