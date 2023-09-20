import React from 'react'
import "../../Css/HomeAbouts.css"
import heroaboutImg from "../../Data/heroabout.jpg"
import { Link } from 'react-router-dom'

function Aboutus() {
    return (
        <div className='about-container'>
            <div className="hero-about-inner">
                <div className="hero-about-box">
                    <div className="hero-about-content">
                        <p>Welcome to N Cube Design Studio, where creativity meets precision in every architectural endeavor. Nestled in the heart of Indore, Madhya Pradesh, our studio is located at 9, Ganesh Nagar Main Rd, near 2.NO KUA, Khandwa Naka, Sant Nagar, Indore, Madhya Pradesh 452001. With a fervent passion for design, we pride ourselves on offering a comprehensive suite of services ranging from construction and residence interiors to architectural marvels <Link to="/about">Read more ...</Link> </p>
                    </div>
                    <div className="hero-about-img">
                        <div className="hero-about-img-overlay"></div>
                        <img src={heroaboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
