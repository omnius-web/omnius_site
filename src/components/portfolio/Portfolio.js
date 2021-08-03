// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
import './portfolio.css';

// install Swiper modules
SwiperCore.use([Navigation]);



function Portfolio(){

        const pf = [];

        for (let i = 1; i <= 21; i++) {
                pf.push({
                        img: `/swiper/h500/${i}.png`,
                        bigimg: `/swiper/${i}.png`
                });
        }

        return (
        
                <div className="portfolio">

                        <Swiper
                                slidesPerView={'auto'} 
                                spaceBetween={10} 
                                navigation={true} 
                                className="mySwiper" >

                                {pf.map((img,i)=>{
                                        
                                        return (

                                                <SwiperSlide key={i}>
                                                        <img src={img.img} alt={i}/>
                                                </SwiperSlide>

                                        )
                                        
                                })}

                        </Swiper>

                        <div className="pf_mo">
                                {pf.map((img,i)=>{
                                        
                                        return (

                                                <div className="one" key={i}>
                                                        <img src={img.img} alt={i}/>
                                                </div>

                                        )
                                        
                                })}
                        </div>

                </div>
        
        )
}

export default Portfolio