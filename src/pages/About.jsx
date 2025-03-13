import React from "react";
import profile from "../Assests/profile.jpeg";
import Service from "./Service";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Skills data based on your resume
  const skills = [
    { name: "React/Next.js", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "State Management (Redux, Zustand)", percentage: 92 },
    { name: "UI Libraries (Mantine, Material-UI)", percentage: 88 },
    { name: "API Integration (GraphQL, REST)", percentage: 85 },
    { name: "Testing (Jest, React Testing Library)", percentage: 80 },
  ];

  return (
    <>
      <div className="container mx-auto py-16 px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.7 }}
          ref={ref}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image section with overlay */}
            <div className="w-full md:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/30 z-10"></div>
              <img
                src={profile}
                alt="Lucy Joy Ameh - Frontend Developer"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Social links */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-4 z-20">
                <a href="https://github.com/luluameh" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-gray-800 hover:text-red-500 transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/amehlucyajumi" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-gray-800 hover:text-red-500 transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com/lulugreg_4" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-gray-800 hover:text-red-500 transition-colors">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
            
            {/* Content section */}
            <div className="w-full md:w-3/5 p-8 md:p-10">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-1 bg-red-500"></div>
                  <div className="w-1 h-1 bg-red-500"></div>
                  <p className="font-semibold text-gray-500 uppercase text-sm tracking-wider">
                    About Me
                  </p>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Lucy Joy Ameh
                </h1>
                <h2 className="text-xl text-red-500 font-medium mb-6">
                  Frontend Developer with 3+ Years Experience
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm a passionate Frontend Developer specializing in building scalable, responsive web applications using modern frameworks like React.js and TypeScript. With expertise in state management, API integration, and performance optimization, I transform complex designs into elegant, functional interfaces.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  My experience spans across multiple industries, working with clients from North America to Nigeria, where I've contributed to vendor platforms, analytics dashboards, and admin interfaces. I pride myself on writing clean, maintainable code and creating exceptional user experiences.
                </p>
                
                {/* Contact info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  <div>
                    <p className="text-gray-500 font-medium">Email:</p>
                    <p className="text-gray-800">amehajumi3@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium">Location:</p>
                    <p className="text-gray-800">Lagos, Nigeria</p>
                  </div>
                </div>
                
                <a
                  href="/resume.pdf" 
                  className="btn bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md inline-block font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
              
              {/* Skills section */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Technical Proficiency</h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    >
                      <div className="skill-name flex justify-between items-center text-gray-700 mb-2">
                        <p className="font-medium">{skill.name}</p>
                        <p className="text-red-500 font-semibold">{skill.percentage}%</p>
                      </div>
                      <ProgressBar percentage={skill.percentage} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Service section */}
      <div id="service">
        <Service />
      </div>
    </>
  );
};

export default About;