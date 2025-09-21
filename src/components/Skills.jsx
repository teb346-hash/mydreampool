import React from 'react'
import { motion } from 'framer-motion'

const Skills = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="section">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & Technologies
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {data.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white rounded-xl p-6 shadow-lg hover-lift text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of web development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
