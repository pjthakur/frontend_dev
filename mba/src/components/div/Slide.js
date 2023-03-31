import './slide.css'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import akam from './images/akam-300x203-1.jpg'
const Slide = (props) =>{
 return(
    <div className="slidee" style ={{backgroundImage: `url(${props.image})`}}> 
        <div className='slide1 sub-slide'>
            <img className="slide1-image slide1-content" src={akam} alt="akam-img" />
            <a href="http://anemiamuktbharatelearning.org/" className='slide1-content'>Anemia Mukt Bharat E-Training Module</a>
            <div className='slide1-content'>
                <a href='https://www.youtube.com/channel/UCBcME2WtmOXkaSOSZratYhw'><BsTwitter className='icons' /></a>
                <a href='https://www.youtube.com/channel/UCBcME2WtmOXkaSOSZratYhw'><BsYoutube className='icons'/></a>
            </div>
        </div>
        <div className='slide2 sub-slide'>
            <h3>ANEMIA PREVALENCE</h3>
            <hr/>
            <h4>National Family Health Survey-5 (2019-21)</h4>

        </div>
    </div>
 ) 
}
export default Slide;
