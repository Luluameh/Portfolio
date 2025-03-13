import React, { useState, useEffect } from "react";
import Bioba from "../Assests/Bioba.jpeg";
import Abby from "../Assests/Abby.jpeg";
import Portfolio from "./Portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Review() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Enhanced review content
  const reviews = [
    {
      name: "Mr. Daniel Mayowa Agbeleshebioba",
      profession: "Software Engineer",
      company: "BigMerchant",
      image: Bioba,
      review:
        "Lucy's expertise in crafting intuitive and visually appealing user interfaces is exceptional. Her deep understanding of modern web technologies and responsive design principles ensures optimal performance across all devices. What sets her apart is her ability to translate complex requirements into elegant solutions that exceed expectations.",
    },
    {
      name: "Miss Abigail Ene Nbegde",
      profession: "Content Strategist",
      company: "ReferAPro",
      image: Abby,
      review:
        "Working with Lucy has been a highlight of our project. She brings a unique blend of creativity and technical expertise that elevates every application she touches. Her attention to detail and innovative approach result in beautifully designed interfaces that not only function flawlessly but also engage users on a deeper level.",
    },
    {
      name: "Alice Johnson",
      profession: "UX Designer",
      company: "Paperdaz",
      image: "https://via.placeholder.com/150",
      review:
        "Lucy's technical prowess and creative approach to frontend development truly set her apart. Her collaborative nature and ability to transform our design concepts into working applications has been instrumental to our success. She consistently delivers high-quality work that performs exceptionally well on all platforms.",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc === zoomedImage ? null : imageSrc);
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentReviewIndex((prevIndex) => 
      (prevIndex + 1) % reviews.length
    );
  };

  return (
    <>
      <div className="bg-gradient-to-r from-red-600 to-red-700 w-full py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              ref={ref}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-12 h-1 bg-white"></div>
                <div className="w-1 h-1 bg-white"></div>
                <p className="font-semibold text-white text-sm tracking-wider">TESTIMONIALS</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What People Say
              </h2>
              <p className="text-red-100 max-w-xl mx-auto">
                Here's what colleagues and clients have to say about my work and collaboration skills.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReviewIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white">
                    <img
                      src={reviews[currentReviewIndex].image}
                      alt={reviews[currentReviewIndex].name}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => handleImageClick(reviews[currentReviewIndex].image)}
                    />
                  </div>
                </div>
                
                <div className="text-center pt-10 md:pt-12">
                  <FaQuoteLeft className="text-red-500 text-opacity-20 text-4xl absolute top-16 left-8" />
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {reviews[currentReviewIndex].review}
                  </p>
                  <FaQuoteRight className="text-red-500 text-opacity-20 text-4xl absolute bottom-16 right-8" />
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {reviews[currentReviewIndex].name}
                    </h3>
                    <p className="text-red-600 font-medium mb-1">
                      {reviews[currentReviewIndex].profession}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {reviews[currentReviewIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button 
              onClick={handlePrevious}
              className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-md text-red-600 hover:bg-red-50 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-md text-red-600 hover:bg-red-50 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReviewIndex ? "bg-white scale-125" : "bg-red-300 bg-opacity-50"
                }`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentReviewIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      {/* Zoomed Image Display */}
      {zoomedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <motion.img
            src={zoomedImage}
            alt="Zoomed profile"
            className="max-w-[80%] max-h-[80%] object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </>
  );
}

export default Review;