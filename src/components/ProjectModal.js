import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md z-10 hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="text-center">
                  <a
                    className="inline-block px-6 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors duration-300"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;