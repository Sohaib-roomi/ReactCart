import React from 'react'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import {BrowserRouter as Router,Routes, Route, Link } from "react-router-dom"
import About from './pages/About'


export default function App() {
  return (
    <>
    <Router>
        <Navigation/>
        <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/about' element = {<About/>}></Route>
        </Routes>

    </Router>    
    
    </>
  )
} 
