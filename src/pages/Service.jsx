import { useState } from "react";
import "../index.scss";
import Exprience from "./Exprience";
import { FaReact,  FaServer, FaMobileAlt, FaChartBar } from "react-icons/fa";
import { SiTypescript, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const [serviceId, setServiceId] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Updated services based on your resume and skills
  const services = [
    {
      id: 1,
      icon: <FaReact size={60} className="text-red-500" />,
      title: "React Development",
      description:
        "Building scalable, responsive web applications using React, Next.js, and modern frontend frameworks with a focus on performance optimization and user experience.",
    },
    {
      id: 2,
      icon: <SiTypescript size={60} className="text-red-500" />,
      title: "TypeScript Integration",
      description:
        "Implementing TypeScript for type-safe code, reducing bugs and enhancing developer experience while creating maintainable frontend solutions.",
    },
    {
      id: 3,
      icon: <SiRedux size={60} className="text-red-500" />,
      title: "State Management",
      description:
        "Architecting efficient state management using Redux Toolkit, Zustand, and React Query for optimized data flow and responsive user interfaces.",
    },
    {
      id: 4,
      icon: <FaServer size={60} className="text-red-500" />,
      title: "API Integration",
      description:
        "Seamlessly connecting frontend applications with REST and GraphQL APIs using React Query, SWR, and Axios for efficient data fetching and caching.",
    },
    {
      id: 5,
      icon: <FaChartBar size={60} className="text-red-500" />,
      title: "Dashboard & Analytics",
      description:
        "Creating interactive data visualization dashboards with Recharts and Mantine Charts for insightful analytics and business intelligence solutions.",
    },
    {
      id: 6,
      icon: <FaMobileAlt size={60} className="text-red-500" />,
      title: "Responsive & PWA",
      description:
        "Developing mobile-friendly applications and Progressive Web Apps (PWA) that work seamlessly across all devices and platforms.",
    },
  ];

  return (
    <>
      <div className="service scroll-smooth relative md:px-20 w-full py-16 md:py-24 gap-10 font-0 bg-gray-50">
        <div className="container mx-auto">
          <div className="section-header text-center mb-16">
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
                <p className="font-semibold text-gray-400">MY EXPERTISE</p>
              </div>

              <h2 className="text-4xl font-bold pb-3 text-gray-700">
                Specialized Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto px-6 md:px-0">
                With over 3+ years of experience in frontend development, I offer comprehensive
                solutions tailored to your specific needs and challenges.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseOver={() => setServiceId(service.id)}
                onMouseLeave={() => setServiceId("")}
                className={`service-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform ${
                  serviceId === service.id ? "scale-105" : ""
                }`}
              >
                <div className="p-6">
                  <div className={`service-icon mb-6 transition-transform duration-300 ${
                    serviceId === service.id ? "transform scale-110" : ""
                  }`}>
                    {service.icon}
                  </div>

                  <div className="service-text">
                    <h3 className={`text-xl font-bold mb-4 ${
                      serviceId === service.id ? "text-red-500" : "text-gray-800"
                    } transition-colors duration-300`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className={`h-1 w-full bg-red-500 transform origin-left transition-transform duration-300 ${
                  serviceId === service.id ? "scale-x-100" : "scale-x-0"
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div id="experience">
      <Exprience />
      </div>
    </>
  );
};

export default Service;