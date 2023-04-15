import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram,BsFacebook,BsTwitter } from "react-icons/bs";
import navimage from '../assets/download.png'

const Navbar =()=> {
  return (
    <div className='navbar '>
        <div className='nav-logo '>
            <img src={navimage} alt='gym-logo'/>
        </div>
        <div className='nav-content'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Sevices'>Services</Link></li>
                <li><Link to='/Sevices'>Gallery</Link></li>
                <li><Link to='/Sevices'>Nutrition</Link></li>
                <li><Link to='/About'>About us</Link></li>
                <li><Link to='/Contact'>Contact us</Link></li>
            </ul>
        </div>
        <div className='nav-social '>
            <ul>
                <li><a href='#facebook'><BsFacebook/></a></li>
                <li><a href='#insta'><BsInstagram/></a></li>
                <li><a href='#twitter'><BsTwitter/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar