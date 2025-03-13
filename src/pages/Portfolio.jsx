import React, { useState } from "react";
import lulu from "../Assests/lulu pic.jpeg";
import profile from "../Assests/profile.jpeg";
import country from "../Assests/country.png";
import eyewitnex from "../Assests/eyewitnex.png";
import insureclever from "../Assests/insureclever.png";
import medcon from "../Assests/medcon.png";
import weather from "../Assests/weather.png";
// You'll need to add these images to your assets folder
// import tukshopVendor from "../Assests/tukshop-vendor.png"; 
// import tukshopAdmin from "../Assests/tukshop-admin.png"; 
// import referApro from "../Assests/referapro.png"; 
// import paperdazAdmin from "../Assests/paperdaz.png"; 

import Contact from "./Contact";
import ProjectModal from "../components/ProjectModal"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [activeFilter, setActiveFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleFilterClick = (filter) => {
    if (filter === "filter-2") {
      alert("This category is in progress!");
    } else {
      setActiveFilter(filter.replace(".", ""));
    }
  };

  const portfolioItems = [
    {
      id: 1,
      category: "filter-1",
      title: "TukShop Vendor Website",
      image: eyewitnex, // Replace with actual image when available
      link: "https://tukshop.com/vendor", // Update with actual URL
      description: "Intuitive vendor interface with dynamic order timelines and Google Maps integration.",
      technologies: ["React", "TypeScript", "Mantine UI", "Axios", "React Query"],
      features: [
        "Dynamic order timeline visualization",
        "Google Maps geolocation integration",
        "Responsive vendor dashboard",
        "Real-time order status updates"
      ]
    },
    {
      id: 2,
      category: "filter-1",
      title: "TukShop SuperAdmin Dashboard",
      image: eyewitnex, 
      link: "https://admin.tukshop.com", // Update with actual URL
      description: "Advanced analytics dashboard with interactive data visualization and real-time notifications.",
      technologies: ["React", "TypeScript", "Mantine UI", "Recharts", "Storybook"],
      features: [
        "Interactive data charts with Recharts",
        "Real-time notification system",
        "Comprehensive admin controls",
        "User management interface"
      ]
    },
    {
      id: 3,
      category: "filter-1",
      title: "ReferAPro Platform",
      image: eyewitnex, // Replace with actual image when available
      link: "https://referapro.com", // Update with actual URL
      description: "Enhanced user interface with ReactJS and Material-UI, focusing on responsive design.",
      technologies: ["React", "Material-UI", "Responsive Design"],
      features: [
        "Cross-browser compatibility",
        "Enhanced user interface components",
        "Error resolution and code optimization",
        "Integration of new features with existing codebase"
      ]
    },
    {
      id: 4,
      category: "filter-1",
      title: "Paperdaz Admin Portal",
      image: eyewitnex, // Replace with actual image when available
      link: "https://admin.paperdaz.com", // Update with actual URL
      description: "Admin website developed using React and TypeScript with scalable component architecture.",
      technologies: ["React", "TypeScript", "Component Architecture"],
      features: [
        "Scalable and reusable component design",
        "Custom admin management tools",
        "Backend service integration",
        "User-centric design for administrators"
      ]
    },
    {
      id: 5,
      category: "filter-1",
      title: "eCommerce Website",
      image: eyewitnex,
      link: "https://eyewitnex-mzek.vercel.app/",
      description: "Fully responsive eCommerce platform with product catalog and checkout functionality.",
      technologies: ["React", "Next.js", "Tailwind CSS", "API Integration"],
      features: [
        "Responsive product browsing",
        "Shopping cart functionality",
        "User account management",
        "Seamless checkout process"
      ]
    },
    {
      id: 6,
      category: "filter-1",
      title: "Countries Explorer",
      image: country,
      link: "https://countries-rmst0skrm-luluameh.vercel.app/",
      description: "Interactive country information explorer with search and filtering capabilities.",
      technologies: ["React", "REST API", "Responsive Design"],
      features: [
        "Country search functionality",
        "Detailed country information display",
        "Filtering by region and other parameters",
        "Clean, responsive UI"
      ]
    },
    {
      id: 7,
      category: "filter-1",
      title: "InsureClever Platform",
      image: insureclever,
      link: "https://insureclever.com/",
      description: "Insurance services website with user-friendly interface and responsive design.",
      technologies: ["WordPress", "Custom CSS", "Responsive Design"],
      features: [
        "Insurance product showcase",
        "User-friendly navigation",
        "Contact and inquiry forms",
        "Mobile-responsive layout"
      ]
    },
    {
      id: 8,
      category: "filter-1",
      title: "Medcon Medical Portal",
      image: medcon,
      link: "https://nimble-raindrop-351b61.netlify.app/",
      description: "Medical services platform with appointment scheduling and information resources.",
      technologies: ["React", "Responsive Design", "Form Handling"],
      features: [
        "Medical services directory",
        "Appointment scheduling system",
        "Healthcare information resources",
        "Medical professional profiles"
      ]
    },
    {
      id: 9,
      category: "filter-3",
      title: "Weather Application",
      image: weather,
      link: "https://splendid-belekoy-9fd52d.netlify.app/",
      description: "Real-time weather forecasting application with location-based data.",
      technologies: ["JavaScript", "Weather API", "Responsive Design"],
      features: [
        "Current weather conditions display",
        "Location-based forecasting",
        "Multi-day forecast visualization",
        "Temperature and condition tracking"
      ]
    },
   
  ];

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="portfolio relative p-12">
        <div className="container mx-auto pb-12">
          <motion.div
            className="box"
            ref={headerRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              headerInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
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
            <div
              className="section-header text-center wow zoomIn pb-4"
              data-wow-delay="0.1s"
            >
              <div className="flex items-center justify-center gap-2 pb-2">
                <div className="w-12 h-1 bg-red-500"></div>
                <div className="w-1 h-1 bg-red-500"></div>
                <p className="-semibold text-gray-400">My Portfolio</p>
              </div>
              <h2 className="text-4xl md:text-4xl font-bold pb-3 text-gray-700">
                My Excellent Portfolio
              </h2>
            </div>
          </motion.div>

          <div className="row pb-5">
            <div className="col-12">
              <ul id="portfolio-filter" className="flex justify-center flex-wrap">
                <li
                  className={`cursor-pointer m-2 p-3 text-sm font-semibold ${
                    activeFilter === "*"
                      ? "text-red-500 bg-white border-red-500"
                      : "text-white bg-red-500 border-red-500"
                  } border-2 rounded-none shadow-inner`}
                  onClick={() => handleFilterClick("*")}
                >
                  All
                </li>

                <li
                  className={`cursor-pointer m-2 p-3 text-sm font-semibold ${
                    activeFilter === "filter-1"
                      ? "text-red-500 bg-white border-red-500"
                      : "text-white bg-red-500 border-red-500"
                  } border-2 rounded-none shadow-inner`}
                  onClick={() => handleFilterClick("filter-1")}
                >
                  Web Design
                </li>
                <li
                  className={`cursor-pointer m-2 p-3 text-sm font-semibold ${
                    activeFilter === "filter-2"
                      ? "text-red-500 bg-white border-red-500"
                      : "text-white bg-red-500 border-red-500"
                  } border-2 rounded-none shadow-inner`}
                  onClick={() => handleFilterClick("filter-2")}
                >
                  Mobile Apps
                </li>
                <li
                  className={`cursor-pointer m-2 p-3 text-sm font-semibold ${
                    activeFilter === "filter-3"
                      ? "text-red-500 bg-white border-red-500"
                      : "text-white bg-red-500 border-red-500"
                  } border-2 rounded-none shadow-inner`}
                  onClick={() => handleFilterClick("filter-3")}
                >
                  Game Dev
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="row portfolio-container flex flex-wrap justify-center">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`portfolio-item ${item.category} wow fadeInUp w-full sm:w-[90%] md:w-[45%] lg:w-[30%] m-4`}
                >
                  <div className="portfolio-wrap rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <div className="portfolio-img h-[220px] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="portfolio-info p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm h-[60px] overflow-hidden">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{item.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <a
                          className="inline-block px-4 py-2 bg-red-500 text-white font-medium text-sm rounded-md hover:bg-red-600 transition-colors duration-300"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                        <button 
                          className="text-red-500 hover:text-red-700" 
                          onClick={() => openProjectDetails(item)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Portfolio;