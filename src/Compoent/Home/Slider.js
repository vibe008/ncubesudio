import React from 'react'
import "../../Css/Swiper.css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { EffectCreative, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
function Slider() {

  const HeroImages = [
    {
      id: 1,
      ImagePath: "https://images.adsttc.com/media/images/64f7/7dec/9e3f/b910/9f7f/9b36/slideshow/butterfly-house-oliver-leech-architects_21.jpg?1693941309",
      Linkto: "",
      name: "Residence"
    },
    {
      id: 2,
      ImagePath: "https://images.adsttc.com/media/images/64d0/73b2/edf1/6953/595a/6a6c/slideshow/xingyao-science-and-innovation-park-gad-design_11.jpg?1691382762",
      Linkto: "",
      name: "construction"
    },
    {
      id: 3,
      ImagePath: "https://images.adsttc.com/media/images/64f1/4377/fc81/0442/2349/0cb1/slideshow/apartamento-casa-brasileira-umdiedro-arquitetura_27.jpg?1693533138",
      Linkto: "",
      name: "Interior"
    },
    {
      id: 4,
      ImagePath: "https://images.adsttc.com/media/images/64f1/4377/fc81/0442/2349/0cb1/slideshow/apartamento-casa-brasileira-umdiedro-arquitetura_27.jpg?1693533138",
      Linkto: "",
      name: "Commerical"
    },
  ]

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='Home_swiper_Container'>

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
        {HeroImages.map((item, key) => {
          return (
            
            <SwiperSlide key={key} className='hero-swiper-slide'>
              {console.log("item.name",item.name)}
              <div className="overlay"></div>
              <div className="project-info">
                <div className="project-name">
                  <h3>{item.name}</h3>
                  <div className="project-name-line"></div>
                </div>
                <div className="linkto-project">
                  <div className="link-line"></div>
                  <h4><Link to="/project" state={{ route:item.name }}>Project</Link></h4>
                </div>
              </div>
              <img src={item.ImagePath} alt="" />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={closeModal}
        // style={customStyles}
        style={{
          overlay: {
            backgroundColor: 'rgb(0 0 0 / 75%)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width:'45%',
            border:"none"
          },
        }}
        contentLabel="Example Modal"
      >
                    <div className="home-form-container">
                      <div className="cross" >
                      <i class="fa-solid fa-circle-xmark" onClick={closeModal}></i>
                      </div>
                        <h3>Contact Us</h3>
                        <form>
                            <label>
                                Name
                                <input type="text" name="name" />
                                <span></span>
                            </label>
                            <label>
                                Email
                                <input type="email" name="email" />
                                <span></span>
                            </label>
                            <label>
                                Phone
                                <input type="Phone" name="Phone" />
                                <span></span>
                            </label>
                            <p>Enter your Message</p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <div className="input-container">
                            <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
      </Modal>
    </div>
  )
}

export default Slider
