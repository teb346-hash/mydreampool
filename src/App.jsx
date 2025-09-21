import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import SmokeEffect from './components/SmokeEffect'
import content from './content.json'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="App">
      <SmokeEffect mousePosition={mousePosition} />
      <Navigation />
      
      <main>
        <Hero data={content.personalInfo} />
        <About data={content.about} />
        <Skills data={content.skills} />
        <Projects data={content.projects} />
        <Experience data={content.experience} />
      </main>
    </div>
  )
}

export default App

