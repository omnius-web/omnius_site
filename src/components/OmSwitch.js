import React, { useEffect } from 'react';
import {
        Switch,
        Route,
        useLocation
} from 'react-router-dom'
import './content.css';
import Main from './main/Main';
import Portfolio from './portfolio/Portfolio';
import About from './about/About';
import Work from './work/Work';
import Contact from './contact/Contact';

function OmSwitch(props){
        const loRst = useLocation();
        useEffect(()=>{
                props.changelocation(loRst);
        })
        
        
        return (
                <div className="content">

                        <Switch>
                                <Route path="/portfolio">
                                        <Portfolio />
                                </Route>
                                <Route path="/about">
                                        <About />
                                </Route>
                                <Route path="/work">
                                        <Work />
                                </Route>
                                <Route path="/contact">
                                        <Contact />
                                </Route>
                                <Route path="/">
                                        <Main />
                                </Route>
                        </Switch>

                </div>
        )
}

export default OmSwitch