// ProgressBar.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ percentage }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const progressVariants = {
    hidden: { width: "0%" },
    visible: { width: `${percentage}%` },
  };

  return (
    <div ref={ref} className="relative h-2 bg-gray-400 rounded-full">
      <motion.div
        className="absolute h-full bg-red-500 rounded-full"
        variants={progressVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <div
          className="h-full bg-red-500 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </motion.div>
    </div>
  );
};

export default ProgressBar;
