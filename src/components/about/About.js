import './about.css'

function About(){
        const text = [
                '홈페이지를 만들어야 하는데 어떻게 시작을 해야할지..',
                '어떤 업체를 선택해야할지.. 막막하시죠?',
                '',
                '제작에 필요한 자료나 정보를 제작업체에 정확하게 전달하지 못하면',
                '사이트 작업 결과는 만족스럽지 않을 수 있습니다.',
                '',
                '이제는 디자인만 멋진 사이트 보다는 깔끔하고 복잡하지 않은',
                '쉽게 정보를 찾을 수 있고 실제 매출이 일어나는',
                '그런 사이트를 만들어야 합니다.',
                '',
                '제작전 어떤 준비를 해야하는지',
                '어떻게 하면 제작비용을 최대한 줄일 수 있는지',
                '옴니어스(OMNIUS)가 같이 고민해드리고 만들어 드리겠습니다.',
                '',
                '함께 고민할 수 있는',
                '친구 같은 웹디자이너 & 웹개발자',
                '옴니어스(OMNIUS)입니다.',
                /*
                '',
                '작업 가능 기술',
                'React, Vue, Html, CSS, JavaScript, J-Query',
                'PHP, Node JS, Python, MySQL, MariaDB, AWS',
                '고도몰, 카페24, 그누보드, 워드프레스, 메이크샵'
                */
        ];
        const member = [
                {
                        img: '/about/1.png',
                        txt: '옴니어스 대표 & 웹개발'
                },
                {
                        img: '/about/2.png',
                        txt: '웹기획 & 마케팅기획 팀장'
                },
                {
                        img: '/about/3.png',
                        txt: '백엔드 개발 & 서버관리 팀장'
                },
                {
                        img: '/about/4.png',
                        txt: '프론트엔드 개발 & 디자인 팀장'
                }
        ];
        return (
                <div className="aboutwrap alltop">
                        <div className="tit" style={{backgroundImage:"url(/main.jpg)"}}><span data-aos="fade-down" data-aos-duration="1000">About US</span></div>
                        <div className="about">
                                <div className="con" data-aos="fade-right" data-aos-duration="1000">
                                        {text.map((t,i)=>{
                                                return (
                                                        <li key={i}>{t}</li>
                                                )
                                        })}
                                </div>
                                <div className="top" data-aos="fade-left" data-aos-duration="1000">
                                        {member.map((d,i)=>{
                                                return (
                                                        <div key={i}>
                                                                <li>
                                                                        <img src={d.img}  alt={i}/>
                                                                </li>
                                                                <li>
                                                                        {d.txt}
                                                                </li>
                                                        </div>
                                                )
                                        })}
                                </div>
                        </div>
                </div>
        )
}

export default About