import React, { useState } from "react";
import lulu from "../Assests/lulu pic.jpeg";
import profile from "../Assests/profile.jpeg";
import country from "../Assests/country.png";
import eyewitnex from "../Assests/eyewitnex.png";
import insureclever from "../Assests/insureclever.png";
import medcon from "../Assests/medcon.png";
import weather from "../Assests/weather.png";

import Contact from "./Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => {
    if (filter === "filter-2" || filter === "filter-3") {
      alert("This category is in progress!");
    } else {
      setActiveFilter(filter.replace(".", ""));
    }
  };

  const portfolioItems = [
    {
      id: 1,
      category: "filter-1",
      title: "eCommerce Website",
      image: eyewitnex,
      link: "https://eyewitnex-mzek.vercel.app/",
    },
    {
      id: 6,
      category: "filter-1",
      title: "country Website",
      image: country,
      link: "https://countries-rmst0skrm-luluameh.vercel.app/",
    },
    {
      id: 2,
      category: "filter-1",
      title: "WordPress Website",
      image: insureclever,
      link: "https://insureclever.com/",
    },
    {
      id: 3,
      category: "filter-3",
      title: "Weather site",
      image: weather,
      link: "https://splendid-belekoy-9fd52d.netlify.app/",
    },
    {
      id: 4,
      category: "filter-1",
      title: "Medcon medical",
      image: medcon,
      link: "https://nimble-raindrop-351b61.netlify.app/",
    },
    {
      id: 5,
      category: "filter-3",
      title: "JavaScript quiz game",
      image: lulu,
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
              <ul id="portfolio-filter" className="flex justify-center">
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
            <div className="row portfolio-container flex flex-wrap gap-10 justify-center">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${item.category} wow fadeInUp flex-none w-full md:w-1/4`}
                  data-wow-delay="0.0s"
                >
                  <div className="portfolio-wrap relative">
                    <div className="portfolio-img w-full h-auto transform hover:-translate-x-4 transition-transform duration-500">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="portfolio-text absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg text-black p-2 text-center flex gap-10 w-64 max-w-xl mx-auto">
                      <h3>{item.title}</h3>
                      <a
                        className="btn border border-red-500 text-white bg-red-600 hover:text-red-500 hover:bg-white hover:border-red-600 py-2 px-4 m-auto inline-block"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                       
                        data-lightbox="portfolio"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Portfolio;
