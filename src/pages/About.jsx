import React from "react";
import profile from "../Assests/profile.jpeg";
import Service from "./Service";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Ensures animation triggers only once
      threshold: 0.5, // Adjust this threshold based on your preference
    });

  return (
    <>
      <div className="container  pl-6 pr-6 md:p-2">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} // Animate only when in view
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <img
              src={profile}
              alt="Profile"
              className="w-full md:w-1/2 h-full md:h-auto object-cover  shadow-lg mb-8 md:mb-0"
            />
            <div className="md:ml-8 p-5">
              <div className="flex items-center gap-2 pl-4 pb-1">
                {/* Horizontal Line */}
                <div className="w-12 h-1 bg-red-500"></div>

                {/* Dot */}
                <div className="w-1 h-1  bg-red-500"></div>
                <p className="font-semibold text-gray-400">
                  LEARN MORE ABOUT ME
                </p>
              </div>
              <h1 className="text-gray-600 text-3xl pl-3 font-extrabold">
                3 Years Experience
              </h1>
              <p className="text-lg md:text-xl leading-relaxed p-5 text-gray-500">
                As a seasoned React developer with a track record of three years
                in web development, I bring both experience and a relentless
                passion for staying at the forefront of this dynamic field. My
                commitment to personal growth and the pursuit of excellence
                aligns seamlessly with my dedication to advancing organizational
                goals and objectives. Excellent problem-solving skills and a
                proven ability to work effectively in fast-paced, collaborative
                environments.
              </p>
              {/*here for the down side */}
              {/*skills and process web design */}
              <div className="p-5">
                <div className="skills mb-4">
                  <div className="skill-name flex justify-between items-center text-gray-400 text-lg">
                    <p className="">Web Design</p>
                    <p>85%</p>
                  </div>
                  <ProgressBar ref={ref} percentage={85} />
                </div>
                <div className="skills mb-4 ">
                  <div className="skill-name flex justify-between items-center text-gray-400 text-lg">
                    <p className="">Web Development</p>
                    <p>95%</p>
                  </div>
                  <ProgressBar percentage={95} />

                  {/* Add more skills and progress bars as needed */}
                </div>
                <div className="skills mb-4">
                  <div className="skill-name flex justify-between items-center text-gray-400 text-lg">
                    <p>Apps Design</p>
                    <p>90%</p>
                  </div>
                  <ProgressBar percentage={90} />

                  {/* Add more skills and progress bars as needed */}
                </div>
                <div className="skills mb-4">
                  <div className="skill-name flex justify-between items-center text-gray-400 text-lg">
                    <p>Apps Development</p>
                    <p>85%</p>
                  </div>
                  <ProgressBar percentage={85} />
                  {/* Add more skills and progress bars as needed */}
                </div>
              </div>

              <a
                href="/"
                className="btn bg-red-500 text-white px-4 py-2 rounded-full inline-block mt-4 ml-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/**the service side */}
      <div id="service">
        <Service />
      </div>
    </>
  );
};

export default About;
