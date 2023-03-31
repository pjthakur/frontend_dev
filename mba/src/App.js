import Nav from './components/navbar/Nav'
import './App.css';
import { Routes, Route, useLocation} from "react-router-dom";
import Homepage from './pages/Homepage';
import Program from './pages/Program'

import Footer from './components/navbar/Footer';
import { AnimatePresence } from "framer-motion"
import Connect from './pages/Connect';

function App(){
  const location = useLocation();
  return (
  <div className='App'>
    <Nav/>
    <AnimatePresence mode='wait'>

        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Program" element={<Program />}></Route>
        <Route path="/Report" element={<Footer/>}></Route>
        <Route path="/Stocks" element={<Footer />}></Route>
        <Route path="/Report" element={<Footer />}></Route>
        <Route path="/Report" element={<Footer />}></Route>
        <Route path="/Report" element={<Footer />}></Route>
        <Route path="/Connect" element={<Connect/>}></Route>
        </Routes>
    </AnimatePresence>
        <Footer/>
  </div>
  )
}
export default App;