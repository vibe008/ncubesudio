import React from 'react'
import Navbar from "../Compoent/Common/Navbar"
import "../Css/Contact.css"
// import Footer from '../Compoent/Common/Footer'
function Contactus() {
    const img = "https://cdni.iconscout.com/illustration/premium/thumb/contact-us-4550295-3779199.png?f=webp"
    return (
        <>
        <div>
            <Navbar backgrund="black" />
            <div className="contact-container">
                <div className="contact-inner">
                    <div className="contactimg">
                        <img src={img} alt="" />
                    </div>
                    <div className="form-container">
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
                </div>
            </div>
        </div>
        <div>
            <Navbar backgrund="black" />
            <div className="contact-container">
                <div className="contact-inner">
                    <div className="contactimg">
                        <img src={img} alt="" />
                    </div>
                    <div className="form-container">
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
                </div>
            </div>
        </div>
        </>
    )
}

export default Contactus
