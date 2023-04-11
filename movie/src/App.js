import React from 'react'
import Home from './pages/Home.js'
import MoviePage from './pages/MoviePage.js'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Error from './pages/Error.js'
import './App.css'
const App = () => {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element = {<MoviePage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App