import emblem from './emblem.png'
import amb from './LogoAmb.png'
import poshan from './poshan.png'
import nhm from './NHM-logo.png'

import './nav.css'
const Nav = () => {
    return(
        <div className = 'navBar'>
        <ul>
            <li><a href='https://mohfw.gov.in/'><img src={emblem} alt ="satya"/></a></li>
            <li><a href='https://mohfw.gov.in/'><img src={amb} alt ="satya"/></a></li>
            <li><a href='http://poshanabhiyaan.gov.in/'><img src={poshan} alt ="satya"/></a></li>
            <li><a href='https://nhm.gov.in/'><img src={nhm} alt ="satya"/></a></li>
            
            <li><a href="#Home">Home</a></li>
            <li><a href="#programme">Program</a></li>
            <li><a href="ambR">Report</a></li>
            <li><a href="stocks">Stocks</a></li>
            <li><a href="ambRanking">Ranking</a></li>
            <li><a href="ambD">Dashboard</a></li>
            <li><a href="resources">Resources</a></li>
            <li><a href="connect">Connect</a></li>
        </ul>
            
        </div>

   )
}
export default Nav;