// react bootstrap carousel begins 
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import im from "./images/akam-300x203-1.jpg"
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import navimage from '../assets/download.png'
import image1 from '../assets/workout1.avif'
import image2 from '../assets/workout2.jpg'
import image3 from '../assets/workout3.avif'

// import image1 from './images/slide-1.jpg'
// import image2 from './images/slide-2.jpg'
// import image3 from './images/slide-3.jpg'
// import image4 from './images/slide-4.jpg'
// import image5 from './images/slide-5.jpg'
// import image6 from './images/slide-6.jpg'
// import image7 from './images/slide-7.jpg'

const Carousels = () => {
  const items = [
        {
          image: image1,
          alt: "Image 1",
          heading: "Body Lab",
          caption :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          image: image2,
          alt: "Image 2",
          heading: "Body Lab",
          caption :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          image:image3,
          alt: "Image 3",
          heading: "Body Lab",
          caption :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          
        },
        {
          image: navimage,
          alt: "Image 4",
          heading: "Body Lab",
          caption : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          
        },
        {
          image: navimage,
          alt: "Image 5",
          heading: "Body Lab",
          caption :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          
        },
        {
          image: navimage,
          alt: "Image 6",
          heading: "Body Lab",
          caption : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          
        },
        {
          image: navimage,
          alt: "Image 7",
          heading: "Body Lab",
          caption : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
      ];
  return (
    <Carousel fade indicators={false}>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt={item.alt} />
  
          <Carousel.Caption className="slideshow-carousel">
            <h3>{item.heading}</h3>
            <hr/>
            <h5>{item.caption}</h5>
          </Carousel.Caption>
          
        </Carousel.Item>
      ))}
      
    </Carousel>
  );
};

export default Carousels;

// react bootstrap carousel ends 
