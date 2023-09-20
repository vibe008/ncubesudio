import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Compoent/Common/Navbar'
import "../Css/Projectshown.css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { EffectCreative, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../Compoent/Common/Footer';
function ProjectShown() {
    const location = useLocation()
    const data = location.state.data

    console.log("data",data)
  return (
    <>
      <Navbar/>
      <div className="shown-slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, EffectCreative, Autoplay]}
        effect='Creative'
        className="HeroSlider"
      >
        {data?.map((item, key) => {
          return (
            
            <SwiperSlide key={key} className='hero-swiper-slide'>
                {console.log("item",item)}
              <div className="overlay"></div>
              <img src={item.imageUri} alt="" />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Footer/>
      </div>
    </>
  )
}

export default ProjectShown
