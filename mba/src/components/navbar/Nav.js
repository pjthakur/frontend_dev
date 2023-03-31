import emblem from './emblem.png'
import amb from './LogoAmb.png'
import poshan from './poshan.png'
import nhm from './NHM-logo.png'
import './nav.css'
import {Link } from "react-router-dom";
const Nav = () => {
    return(
        <div className = 'navBar'>
        <ul>
            <li><a href="https://www.mohfw.gov.in/"><img src={emblem} alt ="satya"/></a></li>
            <li><a href='https://mohfw.gov.in/'><img src={amb} alt ="satya"/></a></li>
            <li><a href='http://poshanabhiyaan.gov.in/'><img src={poshan} alt ="satya"/></a></li>
            <li><a href='https://nhm.gov.in/'><img src={nhm} alt ="satya"/></a></li>
            
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Program'>Program</Link></li>
            <li><Link to='/Report'>Report</Link></li>
            <li><Link to='/stocks'>Stocks</Link></li>
            <li><Link to='/ambRanking'>Ranking</Link></li>
            <li><Link to='/ambD'>Dashboard</Link></li>
            <li><Link to='/Resources'>Resources</Link></li>
            <li><Link to='/Connect'>Connect</Link></li>
        </ul>  
        </div>

   )
}
export default Nav;