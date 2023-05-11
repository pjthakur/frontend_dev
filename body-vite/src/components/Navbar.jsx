import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram,BsFacebook,BsTwitter } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import navimage from '../assets/bodylab1.png'

import { AiOutlineUser } from "react-icons/ai";
import { Component, useRef } from 'react';


const Navbar =()=> {
    const [showmob, setShowmob] = useState(false)
  return (
    <div className='navbar' style={{paddingTop:"0", backgroundColor:'#0E0E10'}}>
        <div className='nav-logo'>
            <img src= {navimage} className='nav-image' />
        </div>
        <div className={showmob?"mobile-nav-content":'nav-content '}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Sevices'>Services</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                <li><Link to='/Diet'>Nutrition</Link></li>
                <li><Link to='/About'>About us</Link></li>
                <li><Link to='/Contact'>Contact us</Link></li>
            </ul>
        </div>
        <div className='nav-social '>
            <ul>
                <li><a href='#facebook'><BsFacebook/></a></li>
                <li><a href='#insta'><BsInstagram/></a></li>
                <li><Link to='/Login'><AiOutlineUser/></Link></li>
            </ul>
        </div>
        
        <div className='mob-nav'>
            <AiOutlineMenu className='menu-open' onClick={()=>{setShowmob(!showmob)}}/>
            <AiOutlineClose className='menu-close'/>
        </div>
    </div>
  )
}

export default Navbar