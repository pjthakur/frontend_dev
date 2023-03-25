import emblem from './emblem.png'
import amb from './LogoAmb.png'
import poshan from './poshan.png'
import nhm from './NHM-logo.png'
const Nav = props =>{
    return <div className="navBar">
        <ul> 
            <li><img src={emblem} alt ="satya"/></li>
            <li><img src={amb} alt="logo"/></li>
            <li><img src={poshan} alt="poshan"/></li>
            <li><img src={nhm} alt = "NHM"/></li>
            <li><a href="#Home">Home</a></li>
            <li><a href="#programme">Program</a></li>
            <li><a href="ambR">Amb Report</a></li>
            <li><a href="stocks">Stocks</a></li>
            <li><a href="ambRanking">Amb Ranking</a></li>
            <li><a href="ambD">Amb Dashboard</a></li>
            <li><a href="resources">Resources</a></li>
            <li><a href="connect">Connect With Us</a></li>
        </ul>
    </div>
    
}
export default Nav;