import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  }

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift relative">
        {/* Project Image */}
        <div className="relative overflow-hidden h-48">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            variants={imageVariants}
            initial="rest"
            whileHover="hover"
            transition={{ duration: 0.3 }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex space-x-2">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Featured
              </span>
            </div>
          )}
        </div>
        
        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: techIndex * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Code
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
