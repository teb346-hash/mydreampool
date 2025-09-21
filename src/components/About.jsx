import React from 'react'
import { motion } from 'framer-motion'

const About = ({ data }) => {
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
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            {data.title}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                {data.content.split('\n\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-gray-600 leading-relaxed mb-6 text-lg"
                    variants={itemVariants}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap gap-4 justify-center"
              >
                <motion.div
                  className="flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-indigo-600 font-semibold">🎯</span>
                  <span className="text-indigo-700">Goal-Oriented</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-pink-600 font-semibold">🚀</span>
                  <span className="text-pink-700">Innovative</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center space-x-2 bg-cyan-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-cyan-600 font-semibold">💡</span>
                  <span className="text-cyan-700">Creative</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-green-600 font-semibold">🤝</span>
                  <span className="text-green-700">Collaborative</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
