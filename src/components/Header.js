import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './header.css';
import OmSwitch from "./OmSwitch";
import Footer from "./Footer";
import OmBerGer from "./omberger/OmBerGer";

function Header(){
        const [lopath, setlopath] = useState('/');
        const [hdName, setHdNAme] = useState('');
        const [footName, setFootNAme] = useState('');
        useEffect(()=>{
                if(lopath === '/' || lopath.pathname === '/'){
                        setHdNAme('main_header');
                        setFootNAme('main_footer');
                } else if(lopath.pathname === '/portfolio') {
                        setHdNAme('sub_header');
                        setFootNAme('pf_footer');
                } else {
                        setHdNAme('sub_header');
                        setFootNAme('sub_footer');
                }
        },[lopath])
        const { AOS } = window;
        useEffect(()=>{
                AOS.init();

        })
        function changelocation(lo){
                setlopath(lo);
        }
  return (
        <Router>
                <div className={'header '+hdName}>
                        <div className="logo">
                                <Link to="/">OMNIUS</Link>
                        </div>
                        <div className="nav">
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
                                        <li>
                                                <Link to="/contact">Contact</Link>
                                        </li>
                                </ul>
                        </div>
                        <OmBerGer />
                </div>
                
                <OmSwitch changelocation={changelocation} lopath={lopath} />

                <Footer clName={footName} />
        </Router>
  );
}

export default Header