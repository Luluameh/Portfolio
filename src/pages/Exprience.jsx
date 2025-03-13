import React from "react";
import "../components/Exprience.css";
import Review from "./Review";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Updated experiences based on your resume
  const experiences = [
    {
      date: "May 2024 - December 2024",
      title: "Frontend Developer",
      company: "TukShop — Vendor Website & SuperAdmin Dashboard",
      description:
        "Designed and developed an intuitive vendor interface using React, TypeScript, and Mantine UI that streamlined order management. Implemented dynamic order timelines, integrated Google Maps for geolocation services, and built advanced analytics dashboards with Recharts. Utilized React Query for efficient API integration and created real-time notification systems.",
      skills: ["React", "TypeScript", "Redux Toolkit", "GraphQL", "Mantine UI", "Recharts"],
      direction: "left",
    },
    {
      date: "July 2023 - January 2024",
      title: "Frontend Web Developer",
      company: "ReferAPro, Canada - North America",
      description:
        "Enhanced user interface functionalities using ReactJS and Material-UI, ensuring responsive design and cross-browser compatibility. Analyzed and resolved critical errors within the existing codebase while collaborating with developers to seamlessly integrate new features into established projects.",
      skills: ["ReactJS", "Material-UI", "Responsive Design"],
      direction: "right",
    },
    {
      date: "May 2022 - June 2023",
      title: "Google Play App Manager and Developer Relations",
      company: "BigMerchant, Nigeria",
      description:
        "Managed Android apps within the Big Merchant ecosystem on the Google Play Store. Drove developer relations initiatives to enhance collaboration and implemented strategic approaches for app promotion and user engagement. Conducted thorough testing across desktop, web, and mobile applications to ensure product quality.",
      skills: ["App Management", "Developer Relations", "Testing"],
      direction: "left",
    },
    {
      date: "September 2021 - 2022",
      title: "Frontend Web Developer",
      company: "Paperdaz, California - US (Contract)",
      description:
        "Architected scalable and reusable components for the admin website using React and TypeScript, prioritizing code efficiency and maintainability. Elicited and analyzed customer requirements as a software system designer and collaborated with backend developers to integrate frontend components with APIs.",
      skills: ["React", "TypeScript", "Component Architecture"],
      direction: "right",
    },
  ];

  return (
    <>
      <div className="md:px-20 w-full pl-6 pr-6 md:p-0 py-12 bg-gray-50" id='exprience'>
        <div className="container mx-auto">
          <header className="section-header text-center mb-16">
            <motion.div
              className="box"
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{
                duration: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <div className="flex items-center justify-center gap-2 pb-2">
                <div className="w-12 h-1 bg-red-500"></div>
                <div className="w-1 h-1 bg-red-500"></div>
                <p className="font-semibold text-gray-400">MY RESUME</p>
              </div>

              <h2 className="font-extrabold text-4xl text-gray-800 pb-4">
                Working Experience
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Over 3+ years building scalable, responsive web applications using modern
                frameworks like React.js and TypeScript. Specializing in state management,
                API integration, and performance optimization.
              </p>
            </motion.div>
          </header>
          
          <div className="experience" id="experience">
            <div className="container">
              <div className="timeline pr-3 pl-3 md:p-0">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div
                      className={`timeline-item ${experience.direction} wow slideIn${
                        experience.direction.charAt(0).toUpperCase() +
                        experience.direction.slice(1)
                      }`}
                      data-wow-delay="0.1s"
                    >
                      <div className="timeline-text">
                        <div className="timeline-date">{experience.date}</div>
                        <h2 className="text-xl font-bold text-gray-800 mb-1">{experience.title}</h2>
                        <h4 className="text-red-500 font-medium mb-3">{experience.company}</h4>
                        <p className="mb-4 text-gray-600">{experience.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="review">
        <Review />
      </div>
    </>
  );
};

export default Experience;