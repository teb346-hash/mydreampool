import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const cardVariants = {
    hidden: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative"
    >
      {/* Timeline line */}
      {index < 2 && (
        <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-pink-500"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
      
      <div className="ml-16 bg-white rounded-2xl p-6 shadow-lg hover-lift">
        {/* Company Image */}
        <div className="flex items-start space-x-4 mb-4">
          <img
            src={experience.image}
            alt={experience.company}
            className="w-16 h-16 rounded-lg object-cover shadow-md"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {experience.title}
            </h3>
            <p className="text-lg font-semibold text-indigo-600 mb-1">
              {experience.company}
            </p>
            <div className="flex items-center space-x-2 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">{experience.location}</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm font-medium">{experience.period}</span>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {experience.description}
        </p>
        
        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {experience.achievements.slice(0, isExpanded ? experience.achievements.length : 2).map((achievement, achievementIndex) => (
              <motion.li
                key={achievementIndex}
                className="flex items-start space-x-2 text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: achievementIndex * 0.1 }}
              >
                <span className="text-indigo-500 mt-1">•</span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
          
          {experience.achievements.length > 2 && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Show Less' : `Show ${experience.achievements.length - 2} More`}
            </motion.button>
          )}
        </div>
        
        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="bg-gradient-to-r from-indigo-50 to-pink-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: techIndex * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceCard
