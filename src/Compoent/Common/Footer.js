import React from 'react'
import "../../Css/Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    // <div className='Footer-section'>
    //   <div className="footer-inner">
    //     <div className="footer-content">
    //       <div className="footer-content-inner">
    //         <h3>Contact Us</h3>
    //         <div className="contact-info">
    //           <div className="email info">
    //             <i class="fa-solid fa-envelope"></i>
    //             <p>abcc@gmail.com</p>
    //           </div>
    //           <div className="phone info">
    //             <i class="fa-solid fa-phone"></i>
    //             <p>+918978975776</p>
    //           </div>
    //           <div className="address info">
    //             <i class="fa-solid fa-location-dot"></i>
    //             <p>Indore, Madhya Pradesh</p>
    //           </div>
    //         </div>
    //         <div className="quick-links ">
    //           <h4>quick-links</h4>
    //           <div className="liks">
    //             <i class="fa-solid fa-location-dot"></i>
    //             <i class="fa-solid fa-phone"></i>
    //             <i class="fa-solid fa-envelope"></i>
    //             <i class="fa-brands fa-instagram"></i>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="map">
    //       <iframe title="ncube" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="600" height="450" style={{ height: "100%", border: "0px", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    //     </div>
    //   </div>
    // </div>
    <footer class="footer">
  <div class="footer__top">
    <div class="footer__container">
      <div class="row">
        <div class="col-md-4">
          <p class="footer__text">Elegance, innovation, and precision - these are the hallmarks of our architectural designs. We're dedicated to creating spaces that inspire.</p>
        </div>
        <div className="footer-container">
          <h3>Contact Us</h3>
          <p>Khandwa Naka, Sant Nagar <br /> Indore, Madhya Pradesh 452001</p>
          <p>Email: <br />ncube.studio.indore@gmail.com</p>
          <p>Phone: <br />+919827246225</p>
          <p>Phone: <br />+918103225590</p>
        </div>
        {/* <div class="col-md-4">
          <h4 class="footer__heading">Services</h4>
          <ul class="footer__list">
            <li>Khandwa Naka, Sant Nagar <br /> Indore, Madhya Pradesh 452001</li>
            <li><a href="#">Commercial Spaces</a></li>
            <li><a href="#">Interior Styling</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4 class="footer__heading">Contact Us</h4>
          <div class="footer__address">
            <p>Khandwa Naka, Sant Nagar</p><br/>
            <p>Indore, Madhya Pradesh 452001</p><br/>
            Phone: (123) 456-7890<br/>
            Email: info@example.com
          </div>
        </div> */}
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="footer__bottom_container">
      <div class="footer__bottom_container_row">
        <div class="col-md-6">
          <p>&copy; 2023 N Cube Design Studio. All Rights Reserved.</p>
        </div>
        <div class="col-md-6">
          <ul class="footer__social-icons">
            <li><Link target='blank' to="https://www.instagram.com/n_cube_design_studio/"><i class="fab fa-instagram"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
