import React from 'react'
import Navbar from "../Compoent/Common/Navbar"
import Slider from '../Compoent/Home/Slider'
import Aboutus from '../Compoent/Home/Aboutus'
import RecentProect from '../Compoent/Home/RecentProect'
import Footer from '../Compoent/Common/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Aboutus/>
      <RecentProect/>
      <Footer/>
    </div>
  )
}

export default Home
