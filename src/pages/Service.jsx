import { useState } from "react";
import "../index.scss";
import Exprience from "./Exprience";
import { FaLaptop, FaLaptopCode, FaAndroid, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const [serviceId, setServiceId] = useState("");
const { ref, inView } = useInView({
  triggerOnce: true, // Ensures animation triggers only once
  threshold: 0.5, // Adjust this threshold based on your preference
});

  return (
    <>
      <div className="service scroll-smooth relative md:px-20 w-full py-12 md:py-16 gap-10 font-0 ">
        <div className="container mx-auto">
          <div
            className="section-header text-center mb-12 wow zoom-in"
            data-wow-delay="0.1s"
          >
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
                <p className="-semibold text-gray-400"> WHAT WE DO</p>
              </div>

              <h2 className="text-4xl md:text-4xl font-bold pb-3 text-gray-700">
                Awesome Quality Services
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} // Animate only when in view
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 wow fadeInUp font-poppins p-8 mx-10 "
              data-wow-delay="0.2s"
            >
              {services.map((service) => (
                <div
                  onMouseOver={() => {
                    setServiceId(service.id);
                  }}
                  onMouseLeave={() => {
                    setServiceId("");
                  }}
                  key={service.id}
                  className="button --move --left- service-item flex items-center relative hover:translate-x-4  hover:text-white transition-colors duration-300 ease-in-out"
                >
                  <div className="service-icon flex items-center justify-center w-20 h-20 md:w-40 md:h-40 border border-red-600 bg-white mr-6 hover:text-white ">
                    <div
                      className={`${
                        serviceId === service.id &&
                        " transition-transform duration-[0.5s] transform scale-150 ease-in-out "
                      }`}
                    >
                      {service.icon}
                    </div>
                  </div>

                  <div className="service-text flex-1  text-gray-700 ">
                    <div
                      className={` ${
                        serviceId === service.id &&
                        "text-white transition-colors duration-[0.5s] ease-in-out "
                      }`}
                    >
                      <h3 className="text-md md:text-xl font-semibold mb-2 ">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/**here the calling of the exorience page */}
      <div id="exprience">
        <Exprience />
      </div>
    </>
  );
};

// Array of service items
const services = [
  {
    id: 1,
    icon: <FaLaptop size={60} className="text-red-500  text-sm md:text-md" />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.",
  },
  {
    id: 2,
    icon: (
      <FaLaptopCode size={60} className="text-red-500  text-sm md:text-md" />
    ),
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.",
  },
  {
    id: 3,
    icon: <FaAndroid size={60} className="text-red-500 text-sm md:text-md" />,
    title: "SEO optimizition",
    description:
      "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.",
  },
  {
    id: 4,
    icon: <FaApple size={60} className="text-red-500  text-sm  md:text-md" />,
    title: "Apps Development",
    description:
      "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.",
  },
];

export default Service;
