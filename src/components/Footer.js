import './footer.css';

function Footer(props){
        return (
                <div className={'footer '+props.clName}>

                        <div>
                        OMNIUS | 대표 : 김경식 | 사업자번호 : 376-41-00517<br/>
gs5m@naver.com | <a href="tel:1800-5756">TEL : 1800-5756</a> | <a href="tel:010-9334-3011">H.P : 010-9334-3011</a>
                        </div>

                </div>
        )
}

export default Footer;