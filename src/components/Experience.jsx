import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

const Experience = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="experience" className="section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Professional Experience
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto"
          >
            My journey in software development has been filled with exciting challenges, 
            continuous learning, and meaningful contributions to various projects.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto space-y-8"
          >
            {data.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                I'm always excited to take on new challenges and collaborate on interesting projects. 
                Let's discuss how we can work together to create something amazing.
              </p>
              <motion.a
                href="mailto:your.email@example.com"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
