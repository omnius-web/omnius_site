import { useState } from "react";
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
        
        return (
                <div className="omberger">
                        <div className="bt" onClick={OBGBt}>
                                        <span></span>
                        </div>
                        <div className={'submenu '+subMenuStatus}>
                                <div className="close" onClick={OBGBt}></div>
                        </div>
                </div>
        )
}

export default OmBerGer