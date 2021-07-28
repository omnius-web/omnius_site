import './work.css'

export default () => {
        const complete = [
                {
                        tit:'바른간판',
                        desc1: '사이트제작 & 메인페이지 포트폴리오 관리자페이지 직접관리',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '60%'
                },
                {
                        tit:'바른간판',
                        desc1: '사이트제작 & 메인페이지 포트폴리오 관리자페이지 직접관리',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '60%'
                },
                {
                        tit:'바른간판',
                        desc1: '사이트제작 & 메인페이지 포트폴리오 관리자페이지 직접관리',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '60%'
                },
                {
                        tit:'바른간판',
                        desc1: '사이트제작 & 메인페이지 포트폴리오 관리자페이지 직접관리',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '60%'
                },
                {
                        tit:'바른간판',
                        desc1: '사이트제작 & 메인페이지 포트폴리오 관리자페이지 직접관리',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '60%'
                },
                {
                        tit:'바른간판',
                        desc1: '사이트제작 & 메인페이지 포트폴리오 관리자페이지 직접관리',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '60%'
                },
        ];
        return (
                <div className="workwrap">
                        <div className="tit">Work</div>
                        <div className="work">
                                {complete.map((d,i)=>{
                                        return (
                                                <div className="one" key={i}>
                                                        <div className="tit">{d.tit}</div>
                                                        <div className="desc">{d.desc1}</div>
                                                        <div className="desc">{d.desc2}</div>
                                                        <div className="complete">
                                                                <div className="bg">
                                                                        <div className="bar" style={{width:d.compl}}>
                                                                                <a>진행률</a>
                                                                                <a>{d.compl}</a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        )
                                })}
                                
                        </div>
                </div>
        )
}