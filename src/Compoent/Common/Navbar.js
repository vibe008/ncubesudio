import React,{useState} from 'react'
import logo from "../../Data/n studio.png"
import '../../Css/Navbar.css'
import { Link } from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
function Navbar(props) {
  const [isOpen, setOpen] = useState(false)
  const [navbar , setNavbar] = useState(false)

  const   changebackground = ()=>{
        if(window.scrollY >= 100){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }
    window.addEventListener( 'scroll' , changebackground )
  return (
    <div className='navbar' style={{background:navbar?"black":props.backgrund}}>
      <div className="logo">
         <Link to="/"><img src={logo} alt="" className="logo-img" /></Link>
      </div>
      <div className={isOpen?"menu-container-active":"menu-container"}>
       <ul className="menu">
        <li className="menu-list">
            <Link to="/" className='menu-items'>Home</Link>
        </li>
        <li className="menu-list">
            <Link to="/about"  className='menu-items'>About Us</Link>
        </li>
        <li className="menu-list">
            <Link to="/project" className='menu-items'>Project</Link>
        </li>
        <li className="menu-list">
            <Link to="/Contactus" className='menu-items'>Contact</Link>
        </li>
       </ul>
      </div>
      <div className="hemburger">
      <Hamburger toggled={isOpen} toggle={setOpen}  color='white'/>
      </div>
    </div>
  )
}

export default Navbar
