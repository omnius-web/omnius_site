import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './header.css';
import OmSwitch from "./OmSwitch";

export default () => {
  return (
        <Router>
                <div className="header">
                        <div className="logo">
                                <Link to="/">OMNIUS</Link>
                        </div>
                        <div>
                                <ul>
                                        
                                        <li>
                                                <Link to="/portfolio">Portfolio</Link>
                                        </li>
                                        <li>
                                                <Link to="/about">About Us</Link>
                                        </li>
                                        <li>
                                                <Link to="/work">Work</Link>
                                        </li>
                                </ul>
                        </div>
                        
                </div>
                
                <OmSwitch />
        </Router>
  );
}


