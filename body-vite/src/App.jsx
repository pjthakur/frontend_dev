import React  from 'react'
import Contact from './pages/Contact'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Service from './pages/Service'

import About from './pages/About'
import Carousels from './components/Carousels'
import Homepage from './pages/Homepage'
const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar/>
      <Routes location={location} key={location.pathname}>
        <Route link='/' element={<Homepage/>} />
        <Route link='/Services' element={<Service/>} />
        <Route link='/About' element={<About/>} />
        <Route link='/Contact' element= {<Contact/>} />
      </Routes>
    
    </>
  )
}

export default App