import './work.css'

function Work(){
        const complete = [
                {
                        tit:'서승은 작가',
                        desc1: '사이트 제작 및 쇼핑몰 제작, 일반결재 + 페이팔 연동',
                        desc2: 'html, css, j-query, javascript, php, mysql',
                        compl: '70%'
                },
                {
                        tit:'뮤직아트',
                        desc1: '쇼핑몰 사이트 제작(카페24)',
                        desc2: 'html, css, j-query, javascript',
                        compl: '100%'
                },
                {
                        tit:'고시이음',
                        desc1: '사이트제작 및 고시원정보 지도표시 시스템, 고시원 관리 시스템',
                        desc2: 'html, css, j-query, javascript, php, mysql',
                        compl: '90%'
                },
                {
                        tit:'Kim & Company 변호사',
                        desc1: '사이트리뉴얼(워드프레스)',
                        desc2: 'html, css, j-query, javascript, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'복사골환경',
                        desc1: '사이트제작 및 고객 관리 시스템',
                        desc2: 'html, css, j-query, javascript, Node JS , mysql',
                        compl: '100%'
                },
                {
                        tit:'성누가병원',
                        desc1: '사이트 리뉴얼 및 모바일 페이지작업',
                        desc2: 'html, css, j-query, javascript, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'네오위즈',
                        desc1: '사이트제작 및 디자인',
                        desc2: 'html, css, j-query, javascript, php, mysql, PhotoShop',
                        compl: '100%'
                },
                {
                        tit:'ASIA_OZ',
                        desc1: '사이트제작 및 관리자페이지 커스텀',
                        desc2: 'html, css, j-query, javascript, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'에스엠씨이앤아이티',
                        desc1: '사이트리뉴얼 및 사이트 유지보수',
                        desc2: 'html, css, j-query, javascript, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'도시가스공사',
                        desc1: '사이트리뉴얼 및 서버업그레이드',
                        desc2: 'html, css, j-query, javascript, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'ClearPhone',
                        desc1: '사이트제작 & 휴대폰 가입 요금제 계산 및 할부계산 시스템, 주문관리 시스템',
                        desc2: 'html, css, j-query, javascript, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'더패치미디어',
                        desc1: '사이트제작 & 디자인',
                        desc2: 'html, css, j-query, php',
                        compl: '100%'
                },
                {
                        tit:'진저샵',
                        desc1: '쇼핑몰 리뉴얼(고도몰)',
                        desc2: 'html, css, j-query',
                        compl: '100%'
                },
                {
                        tit:'DI성형외과',
                        desc1: '중국어 사이트 추가작업',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'KABP',
                        desc1: '사이트제작 & 디자인',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'에이비블라인드',
                        desc1: '사이트제작 & 디자인',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'한영코엠',
                        desc1: '사이트리뉴얼',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'유플러스노동조합',
                        desc1: '사이트 제작 & 디자인 & 관리자페이지 회원관리',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'든든패키지',
                        desc1: '사이트 제작 & 디자인',
                        desc2: 'html, css, j-query, php',
                        compl: '100%'
                },
                {
                        tit:'채움애드',
                        desc1: '사이트 제작 & 디자인',
                        desc2: 'html, css, j-query, php',
                        compl: '100%'
                },
                {
                        tit:'TPC메카트로',
                        desc1: '사이트 제작 & 디자인',
                        desc2: 'html, css, j-query, php',
                        compl: '100%'
                },
                {
                        tit:'inflstation',
                        desc1: '사이트 제작 & 디자인',
                        desc2: 'html, css, j-query, php',
                        compl: '100%'
                },
                {
                        tit:'더그리움',
                        desc1: '사이트 제작 & 디자인 & 관리자페이지 커스텀',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'UNI-STUDIO',
                        desc1: '사이트 리뉴얼',
                        desc2: 'html, css, j-query, php',
                        compl: '100%'
                },
                {
                        tit:'만수금속',
                        desc1: '쇼핑몰사이트 리뉴얼(메이크샵)',
                        desc2: 'html, css, j-query',
                        compl: '100%'
                },
                {
                        tit:'얀의원',
                        desc1: '사이트 리뉴얼',
                        desc2: 'html, css, j-query, php',
                        compl: '100%'
                },
                {
                        tit:'이안스쿨',
                        desc1: '사이트제작',
                        desc2: 'html, css, j-query',
                        compl: '100%'
                },
                {
                        tit:'DI성형외과',
                        desc1: '일본어 사이트 추가 및 관리자페이지 커스텀',
                        desc2: 'html, css, j-query, javascript, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'Jobrowne',
                        desc1: '쇼핑몰 사이트제작(고도몰)',
                        desc2: 'html, css, j-query, javascript',
                        compl: '100%'
                },
                {
                        tit:'폴라텍코리아',
                        desc1: '사이트제작 & 디자인',
                        desc2: 'html, css, j-query, php, PhotoShop',
                        compl: '100%'
                },
                {
                        tit:'대한건축학회',
                        desc1: '사이트리뉴얼',
                        desc2: 'html, css, j-query, php',
                        compl: '100%'
                },
                {
                        tit:'바른간판',
                        desc1: '사이트제작, 포트폴리오 관리자페이지 관리시스템',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'올리커',
                        desc1: '사이트제작',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'이비치',
                        desc1: '사이트제작(워드프레스) 디자인 & 개발',
                        desc2: 'html, css, j-query, php, PhotoShop',
                        compl: '100%'
                },
                {
                        tit:'AIRSCREAM',
                        desc1: '사이트제작 & 쇼핑몰 작업(카페24)',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'삼진푸드',
                        desc1: '사이트 리뉴얼',
                        desc2: 'html, css, j-query, javascript',
                        compl: '100%'
                },
                {
                        tit:'피아노투게더',
                        desc1: '수강생관리 및 레슨시간표 관리 시스템',
                        desc2: 'html, css, j-query, php, mysql',
                        compl: '100%'
                },
                {
                        tit:'유노성형외과',
                        desc1: '타언어 사이트 추가',
                        desc2: 'html, css, j-query, php, PhotoShop',
                        compl: '100%'
                },
        ];
        const omAos = [
                // 'fade-up',
                // 'fade-down',
                // 'fade-left',
                // 'fade-right',
                'flip-left',
                'flip-right',
                'flip-up',
                'flip-down',
        ];
        function rand(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return (
                <div className="workwrap alltop">
                        <div className="tit" style={{backgroundImage:"url(/main.jpg)"}}><span data-aos="fade-down" data-aos-duration="1000">Work</span></div>
                        <div className="work">
                                {complete.map((d,i)=>{
                                        return (
                                                <div className="one" key={i} data-aos={omAos[rand(0,3)]} data-aos-duration="1000" >
                                                        <div className="tit">{d.tit}</div>
                                                        <div className="desc">{d.desc1}</div>
                                                        <div className="desc">{d.desc2}</div>
                                                        <div className="complete">
                                                                <div className="bg">
                                                                        <div className="bar" style={{width:d.compl}}>
                                                                                <span>진행률</span>
                                                                                <span>{d.compl}</span>
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

export default Work