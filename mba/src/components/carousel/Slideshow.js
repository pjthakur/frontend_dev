// react bootstrap carousel begins 
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import im from "./images/akam-300x203-1.jpg"
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

import image1 from './images/slide-1.jpg'
import image2 from './images/slide-2.jpg'
import image3 from './images/slide-3.jpg'
import image4 from './images/slide-4.jpg'
import image5 from './images/slide-5.jpg'
import image6 from './images/slide-6.jpg'
import image7 from './images/slide-7.jpg'

const Slideshow = () => {
  const items = [
        {
          image: image1,
          alt: "Image 1",
          heading: "ANAEMIA PREVALENCE",
          caption :"All Districs Affected"
        },
        {
          image: image2,
          alt: "Image 2",
          heading: "ANAEMIA PREVALENCE",
          caption :"All Districs Affected"
        },
        {
          image: image3,
          alt: "Image 3",
          heading: "ANAEMIA PREVALENCE",
          caption :"All Districs Affected"
          
        },
        {
          image: image4,
          alt: "Image 4",
          heading: "ANAEMIA PREVALENCE",
          caption : "All at Risks to Anemia"
          
        },
        {
          image: image5,
          alt: "Image 5",
          heading: "ANAEMIA PREVALENCE",
          caption :"514 districts Anemia ≥ 40% among children 6-59 months",
          
        },
        {
          image: image6,
          alt: "Image 6",
          heading: "ANAEMIA PREVALENCE",
          caption : "139 districts Anemia ≥ 40% among women of reproductive age"
          
        },
        {
          image: image7,
          alt: "Image 7",
          heading: "ANAEMIA PREVALENCE",
          caption : "65 districtsAnemia ≥ 40% among pregnant women 15-49 years"
        },
      ];
  return (
    <Carousel fade>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt={item.alt} />
          {index!==0 ?
          <Carousel.Caption className="slideshow-carousel">
            <h3>{item.heading}</h3>
            <hr/>
            <h5>{item.caption}</h5>
          </Carousel.Caption>:
          <div className="slideshoe-akam">
            <img src={im} alt="slideshoe-akam" className="slideshoe-akam"/>
            <a href="http://anemiamuktbharatelearning.org/" id="bharat-75">Anemia Mukt Bharat E-Training Module</a>
            <div id='slide1-content'>
                <a href='https://www.youtube.com/channel/UCBcME2WtmOXkaSOSZratYhw'><BsTwitter className='icons' /></a>
                <a href='https://www.youtube.com/channel/UCBcME2WtmOXkaSOSZratYhw'><BsYoutube className='icons'/></a>
            </div>
          </div>
          }   
        </Carousel.Item>
      ))}
      
    </Carousel>
  );
};

export default Slideshow;

// react bootstrap carousel ends 
/* react-slideshow-image slider begins  */

// import React from 'react';
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// import {BsFillCaretRightFill} from "react-icons/bs";
// import {BsFillCaretLeftFill} from "react-icons/bs";


// const fadeImages = [
//   {
//     url: 'https://anemiamuktbharat.info/wp-content/uploads/2023/03/slide-7.jpg',
//     caption: 'First Slide'
//   },
//   {
//     url: 'https://anemiamuktbharat.info/wp-content/uploads/2023/03/slide-6.jpg',
//     caption: 'Second Slide'
//   },
//   {
//     url: '	https://anemiamuktbharat.info/wp-content/uploads/2023/03/slide-5.jpg',
//     caption: 'Third Slide'
//   },
// ];

// const indicators = (index) => (<div className="indicator">{index + 1}</div>);


// const buttonStyle = {
//   width: "80px",
//   background: 'none',
//   border: '100px'
// };

// const properties = {
//   prevArrow: <button style={{ ...buttonStyle }}><BsFillCaretLeftFill className='slide-button'/></button>,
//   nextArrow: <button style={{ ...buttonStyle }}><BsFillCaretRightFill className='slide-button'/></button>
// }

// const responsiveSettings = [
//   {
//       breakpoint: 800,
//       settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3
//       }
//   },
//   {
//       breakpoint: 500,
//       settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//       }
//   }
// ];

// const Slideshow = () => {
//   return (
//     <div className="slide-container" >
//       <Fade {...properties} indicators={indicators} responsive={responsiveSettings}>
//         {fadeImages.map((fadeImage, index) => (
//           <div key={index}>
//             <img style={{ width: '100%' }} src={fadeImage.url} />
//             <h2>{fadeImage.caption}</h2>
//           </div>
//         ))}
//       </Fade>
//     </div>
//   )
// }
// export default Slideshow;

/* react-slideshow-image slider ends  */


// react bootstrap carousel begins 
