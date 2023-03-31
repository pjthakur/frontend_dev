import footimg1 from './stickyIEGlogo.png';
import footimg2 from './nutritionlogo.png';
import footimg3 from './UNICEFLogo.png';


const Footer = () =>{
    return <div className="footer">
        <img src={footimg1} alt="1st"/>
        <img src={footimg2} alt="2nd"/>
        <img src={footimg3} alt="3rd"/>
    </div>
}
export default Footer;