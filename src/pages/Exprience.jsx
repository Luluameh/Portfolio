import React from "react";
import "../components/Exprience.css";
import Review from "./Review";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation triggers only once
    threshold: 0.5, // Adjust this threshold based on your preference
  });

  // Sample data for demonstration. You can replace this with your actual data.
  const expect = [
    {
      date: "July 2023 -January 2024",
      title: "Web Developer",
      company: "ReferAPro, Canada - North America",
      description:
        "Implemented responsive design and cross-browser compatibility for web applications to optimize user experience. Collaborated on enhancing UI functionalities using ReactJS and Material-UI. Resolved code errors to improve quality and functionality, while integrating new features into existing projects with developers.",
      direction: "left", // 'left' or 'right' for alternating timeline items
    },
    // Add more experiences as needed
    {
      date: "May 2022 - June 2023",
      title: "Google Play App Manager and Developer Relations",
      company: " BigMerchant,Nigeria - Jos",
      description:
        "Led oversight of Android apps in the BigMerchant ecosystem on Google Play, driving developer relations and ensuring app performance, visibility, and user experience. Implemented promotion and engagement strategies, streamlined deployment processes, and conducted comprehensive testing across desktop, web, and mobile applications, identifying and reporting software issues.",
      direction: "right", // 'left' or 'right' for alternating timeline items
    },
    {
      date: "September 2021 - 2022",
      title: "Web Developer",
      company: "Paperdaz, California - US (Contract)",
      description:
        "Led a collaborative development effort to create custom web applications, emphasizing scalable architecture, efficient code, and seamless integration with backend services.",
      direction: "left", // 'left' or 'right' for alternating timeline items
    },
  ];

  return (
    <>
      <div className=" md:px-20 w-full  pl-6 pr-6 md:p-0 ">
        <div className="container  ">
          <header className="section-header text-center">
            <motion.div
              className="box"
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              } // Animation based on inView state
              transition={{
                duration: 2,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <div className="flex items-center justify-center gap-2 pb-2 ">
                {/* Horizontal Line */}
                <div className="w-12 h-1 bg-red-500"></div>

                {/* Dot */}
                <div className="w-1 h-1  bg-red-500"></div>
                <p className="font-semibold text-gray-400"> MY RESUME</p>
              </div>

              <h2 className="-extrabold text-4xl text-gray-800 pb-12 ">
                Working Experience
              </h2>
            </motion.div>
          </header>
          <div className="experience" id="experience">
            <div className="container">
              <div className="timeline pr-3 pl-3 md:p-0">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  } // Animation base
                  transition={{ duration: 1 }}
                >
                  {expect.map((expect, index) => (
                    <div
                      key={index}
                      className={`timeline-item ${
                        expect.direction
                      } wow slideIn${
                        expect.direction.charAt(0).toUpperCase() +
                        expect.direction.slice(1)
                      }`}
                      data-wow-delay="0.1s"
                    >
                      <div className="timeline-text">
                        <div className="timeline-date">{expect.date}</div>
                        <h2>{expect.title}</h2>
                        <h4>{expect.company}</h4>
                        <p>{expect.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**the First Banner */}

      <div id="review">
        <Review />
      </div>
    </>
  );
};

export default Experience;
