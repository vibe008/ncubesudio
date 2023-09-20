import React,{useState ,useEffect} from 'react'
import "../../Css/RecentProject.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../../Data/DHANOTIYA JI_LIVING & KITCHEN_VIEW1_R00_30.03.23.png"
import img2 from "../../Data/p10/WILSHIRE_CABIN1_VIEW1_R01_24.03.2023.png"
import img3 from "../../Data/p2/DHANOTIYA JI_OFFICE_VIEW3_R00_02.04.23.png"
import img4 from "../../Data/p3/DUDI JI_LIVING ROOM_VIEW1_R00_08.04.2022.png"
import img5 from "../../Data/p5/MAHAVEER JI_LIVING & DINNING_VIEW3_R01.png"
import img6 from "../../Data/p6/NAMO_INTERIOR_VIEW3_R00_11.06.2023 copy.png"
import { Link } from 'react-router-dom';
function RecentProect() {

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 642) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once to set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='recent-project-section'>
      <div className="recent-project-heading">
        <h3>Recent Projects</h3>
      </div>
      <div className="recent-project-slider-container">
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
            clickable: true,
          }}
        modules={[Pagination]}
        className="recent-project-slider"
      >
        <SwiperSlide className='recent-project-slider-img'><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className='recent-project-slider-img'><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide className='recent-project-slider-img'><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide className='recent-project-slider-img'><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide className='recent-project-slider-img'><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide className='recent-project-slider-img'><img src={img6} alt="" /></SwiperSlide>
      </Swiper>
      <div className="see-more">
       <p><Link to="/project">View more ...</Link></p> 
      </div>
      </div>
    </div>
  )
}

export default RecentProect
