import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ percentage }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      setWidth(percentage);
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1.5, ease: "easeOut" }
      });
    }
  }, [controls, inView, percentage]);

  return (
    <div ref={ref} className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        className="bg-red-500 h-2.5 rounded-full"
      />
    </div>
  );
};

export default ProgressBar;