import React from "react";
import "../components/Exprience.css";
import Review from './Review'
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
      date: "2045 - 2050",
      title: "Web Developer",
      company: "Soft Agency, San Francisco, CA",
      description:
        "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.",
      direction: "left", // 'left' or 'right' for alternating timeline items
    },
    // Add more experiences as needed
    {
      date: "2045 - 2050",
      title: "Web Developer",
      company: "Soft Agency, San Francisco, CA",
      description:
        "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.",
      direction: "right", // 'left' or 'right' for alternating timeline items
    },
    {
      date: "2045 - 2050",
      title: "Web Developer",
      company: "Soft Agency, San Francisco, CA",
      description:
        "Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.",
      direction: "left", // 'left' or 'right' for alternating timeline items
    },
  ];

  return (
    <>
      <div className=" md:px-20 w-full ">
        <div className="container">
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
              <div className="timeline">
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
