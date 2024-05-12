import React, { useState } from "react";
import Bioba from "../Assests/Bioba.jpeg";
import Abby from "../Assests/Abby.jpeg";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Review() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const reviews = [
    {
      name: " Mr. Daniel Mayowa Agbeleshebioba",
      profession: "Software Engineer",
      image: Bioba,
      review:
        "As a seasoned software developer, I had the pleasure of working with Lucy Ameh, a talented frontend developer. her expertise in crafting intuitive and visually appealing user interfaces was immediately evident. she demonstrated a deep understanding of modern web technologies, seamlessly integrating responsive design principles to ensure optimal performance across various devices.",
    },
    {
      name: "Miss Abigal Ene Nbegde",
      profession: "Amazon Writer",
      image: Abby,
      review:
        "you brings a unique blend of creativity and technical expertise to every project. your attention to detail and innovative approach result in beautifully designed websites that not only function flawlessly but also engage users on a deeper level.",
    },
    {
      name: "Alice Johnson",
      profession: "UX Designer",
      image: "https://via.placeholder.com/150",
      review:
        " I've had the privilege of reviewing the work of Lucy, a frontend developer, and I must say, the experience has been nothing short of enlightening. Your technical prowess and creative approach to frontend development have truly set you apart.",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    if (zoomedImage === imageSrc) {
      // If the clicked image is already zoomed, close it
      setZoomedImage(null);
    } else {
      // Otherwise, show the clicked image in zoomed view
      setZoomedImage(imageSrc);
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <div className="bg-red-600 w-full p-20">
          <div className="flex flex-col items-center ">
            <div className="text-center text-lg mb-4 border-2 bg-white rounded-md md:rounded-full w-85 p-20 relative pl-2 pr-2">
              <img
                src={reviews[currentReviewIndex].image}
                alt={reviews[currentReviewIndex].name}
                className="w-20 h-20 rounded-full m-auto absolute -top-9 left-0 right-0 cursor-pointer"
                onClick={() =>
                  handleImageClick(reviews[currentReviewIndex].image)
                }
              />
              <div className="text-center text-base mb-4 text-gray-400 leading-5">
                {reviews[currentReviewIndex].review}
              </div>
              <div className="text-center">
                <h2 className="text-lg font-bold text-red-600">
                  {reviews[currentReviewIndex].name}
                </h2>
                <p className="text-sm text-gray-500">
                  {reviews[currentReviewIndex].profession}
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentReviewIndex ? "bg-white" : "bg-red-300"
                  }`}
                  onClick={() => setCurrentReviewIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div id='portfolio'> 
        <Portfolio />
        </div>

      {/* Zoomed Image Display */}
      {zoomedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setZoomedImage(null)} // Close zoomed image on click
        >
          <img
            src={zoomedImage}
            alt="Zoomed "
            className="max-w-3/4 max-h-3/4 object-contain"
          />
        </div>
      )}
    </>
  );
}

export default Review;
