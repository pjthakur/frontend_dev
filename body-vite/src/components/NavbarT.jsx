import React, { useState } from "react";
import "./navbar.css";
import { BsInstagram,BsFacebook,BsTwitter } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import navimage from '../assets/bodylab1.png'
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { color } from "framer-motion";

const NavbarT = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <img src= {navimage} className='nav-image' />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
          
            <li>
                <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li>
                <NavLink to="/Diet">Nutrition</NavLink>
            </li>
            <li>
              <NavLink to="/About">about</NavLink>
            </li>
            <li>
              <NavLink to="/Services">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
          
                <li><a href='#facebook' className="facebook"><BsFacebook/></a></li>
                <li><a href='#insta' className="instagram"><BsInstagram/></a></li>
                <li><NavLink to='/Login' className="login"><AiOutlineUser/></NavLink></li>
            </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
          
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu style={{color:'#c3073f'}}/>
            </a>
          </div>
          <NavLink to='/Login' className="login-mobile"><AiOutlineUser/></NavLink>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default NavbarT;