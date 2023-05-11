import React  from 'react'
import Contact from './pages/Contact'
import './App.css'
import Navbar from './components/Navbar'
import NavbarT from './components/NavbarT'
import { Route, Routes, useLocation } from 'react-router-dom'
import Service from './pages/Service'
import { AnimatePresence } from "framer-motion"
import About from './pages/About'
import Carousels from './components/Carousels'
import Homepage from './pages/Homepage'
import Gallery from './pages/Gallery'
import Diet from './pages/Diet'
import Login from './pages/Login'
const App = () => {
  const location = useLocation();
  return (
    <div className='body'>
      <NavbarT/>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Services' element={<Service/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Diet' element={<Diet/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element= {<Contact/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App