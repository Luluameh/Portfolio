import React, { useState } from "react";
import lulu from "../Assests/lulu pic.jpeg";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Review() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation triggers only once
    threshold: 0.5, // Adjust this threshold based on your preference
  });
 const reviews = [
    {
      name: "John Doe",
      profession: "Software Engineer",
      image: lulu,
      review: "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.Lorem ipsum dolor sit amet elit. Phase nec preti mi.",
    },
    {
      name: "Jane Smith",
      profession: "Product Manager",
      image: "https://via.placeholder.com/150",
      review: "We've added an onClick event handler to the container div of the reviews. Inside the event handler, we check the position where the click occurred. If it's on the left half of the screen we trigger a swipe to the left (previous review) and if it's on the right half, we trigger a swipe to the right (next review).",
    },
    {
      name: "Alice Johnson",
      profession: "UX Designer",
      image: "https://via.placeholder.com/150",
      review: "Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non.Lorem ipsum dolor sit amet elit. Phase nec preti mi.",
    },
 ];

 const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

 
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} // Animate only when in view
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <div className="bg-red-600 w-full p-20">
          <div className="flex flex-col items-center">
            <div className="text-center text-lg mb-4 border-2 bg-white rounded-md md:rounded-full w-85 p-20 relative">
              <img
                src={reviews[currentReviewIndex].image}
                alt={reviews[currentReviewIndex].name}
                className="w-20 h-20 rounded-full m-auto absolute -top-9 left-0 right-0"
              />
              <div className="text-center text-lg mb-4 text-gray-400 leading-5">
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
      <Portfolio />
    </>
  );
}

export default Review;
