import './main.css'

function Main(){
        return (
                <div className="mainwrap" style={{ backgroundImage: 'url(/main.jpg)' }}>
                        <div className="txt">
                                <div className="tit" data-aos="fade-down"  data-aos-duration="2000">
                                        123제작부터 유지보수까지<br />
                                        같이 고민하고 책임지는<br />
                                        파트너가 되겠습니다.
                                </div>
                                <div className="desc" data-aos="fade-up" data-aos-duration="2000">
                                        OMNIUS는 거품없는 가격으로<br />
                                        일한만큼의 비용으로 제작합니다.
                                </div>
                        </div>
                </div>
        )
}

export default Main