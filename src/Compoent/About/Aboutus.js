import React from 'react'
import myVideo from "../../Data/pexels-kindel-media-7578554 (1080p).mp4"
import "../../Css/About.css"
import img1 from "../../Data/ConstructionExcellence.jpg"
import img2 from "../../Data/ResidenceInteriors.jpg"
import img3 from "../../Data/ComprehensiveConstructionSolutions.jpg"
import team1 from "../../Data/team01.jpg"
import team2 from "../../Data/team03.jpg"
function Aboutus() {
    return (
        <div className='about-section'>
            <div className="video-section">
                <video className='video' autoPlay muted loop>
                    <source src={myVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="about-container">
                <div className="about-heading">
                    <h3>Construction Excellence</h3>
                    <p>At N Cube Design Studio, we take immense pride in our construction expertise. With years of experience in the field, we have honed our skills to deliver projects of the highest quality. Our team of seasoned professionals ensures that every structure we build stands as a testament to durability, functionality, and aesthetic appeal. From conceptualization to completion, we oversee every phase with meticulous attention to detail, ensuring that your vision is brought to life with precision.</p>
                </div>
                <div className="aboutimage">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="about-container">
                <div className="aboutimage">
                    <img src={img2} alt="" />
                </div>
                <div className="about-heading">
                    <h3>Residence Interiors</h3>
                    <p>Transforming houses into homes is our forte. Our team of talented interior designers at N Cube Design Studio believes in creating spaces that not only exude style but also resonate with the unique essence of each client. We understand that your home is an extension of your personality, and our designs are tailored to reflect just that. Whether it's a cozy living room, a functional kitchen, or a serene bedroom, we blend creativity with practicality to curate interiors that are both visually stunning and highly livable.</p>
                </div>
            </div>
            <div className="about-container">
                <div className="about-heading">
                    <h3>Comprehensive Construction Solutions</h3>
                    <p>Beyond the confines of individual projects, N Cube Design Studio offers a holistic approach to construction. From initial concept and architectural planning to the final coat of paint, we ensure seamless coordination throughout the entire process. Our comprehensive solutions encompass everything from structural integrity to intricate finishing touches. With a keen eye for detail and a commitment to excellence, we guarantee that every project undertaken by us is delivered to perfection.</p>
                </div>
                <div className="aboutimage">
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className="about-info">
                <div className="about-card">
                    <div className="card-img">
                     <img src={team1} alt="" />
                    </div>
                    <div className="card-info">
                        <h4>Ankush nagar</h4>
                        <p>M.tech (structure)</p>
                        <p>Founder</p>
                    </div>
                </div>
                <div className="about-card">
                    <div className="card-img">
                        <img src={team2} alt="" />
                    </div>
                    <div className="card-info">
                        <h4>Mohan nagar</h4>
                        <p>B.arch</p>
                        <p>Co-Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
