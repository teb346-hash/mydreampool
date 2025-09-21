import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const SmokeEffect = ({ mousePosition }) => {
  const [particles, setParticles] = useState([])
  const containerRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const createParticle = () => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: mousePosition.x + (Math.random() - 0.5) * 20,
        y: mousePosition.y + (Math.random() - 0.5) * 20,
        size: Math.random() * 6 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        duration: Math.random() * 2000 + 1000,
        delay: Math.random() * 500
      }
      
      setParticles(prev => [...prev.slice(-15), newParticle])
    }

    const interval = setInterval(createParticle, 100)
    
    return () => {
      clearInterval(interval)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  useEffect(() => {
    const removeOldParticles = () => {
      setParticles(prev => prev.filter(particle => {
        const age = Date.now() - particle.id
        return age < particle.duration
      }))
    }

    const interval = setInterval(removeOldParticles, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="smoke-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="smoke-particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            background: `radial-gradient(circle, rgba(99, 102, 241, ${particle.opacity}) 0%, rgba(236, 72, 153, ${particle.opacity * 0.5}) 50%, transparent 70%)`
          }}
          initial={{ 
            scale: 0,
            opacity: particle.opacity,
            x: 0,
            y: 0
          }}
          animate={{ 
            scale: [0, 1, 1.5],
            opacity: [particle.opacity, particle.opacity * 0.5, 0],
            x: (Math.random() - 0.5) * 100,
            y: -Math.random() * 80 - 20
          }}
          transition={{
            duration: particle.duration / 1000,
            delay: particle.delay / 1000,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default SmokeEffect
