import { useEffect, useState } from "react";
import {
        Link
} from "react-router-dom";
import "./omberger.css";

function OmBerGer(){
        const [ bg, setBg ] = useState(false);
        const [ subMenuStatus, setSubMenuStatus ] = useState('');
        function OBGBt(){
                if(bg){
                        setBg(false);
                        // console.log('close');
                        setSubMenuStatus('');
                } else {
                        setBg(true);
                        // console.log('open');
                        setSubMenuStatus('act');
                }
                
        }
        useEffect(()=>{
                
        })
        
        return (
                <div className="omberger">
                        <div className="bt" onClick={OBGBt}>
                                        <span></span>
                        </div>
                        <div className={'submenu '+subMenuStatus}>
                                <div className="close" onClick={OBGBt}></div>
                                <div className="list">
                                        <li>
                                                <Link to="/" onClick={OBGBt}>Home</Link>
                                        </li>
                                        <li>
                                                <Link to="/portfolio" onClick={OBGBt}>Portfolio</Link>
                                        </li>
                                        <li>
                                                <Link to="/about" onClick={OBGBt}>About Us</Link>
                                        </li>
                                        <li>
                                                <Link to="/work" onClick={OBGBt}>Work</Link>
                                        </li>
                                        <li>
                                                <Link to="/contact" onClick={OBGBt}>Contact</Link>
                                        </li>
                                </div>
                        </div>
                </div>
        )
}

export default OmBerGer