import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FullScreenOverlay = ({ isActive = false }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isActive]);

  const variants = {
    visible: { scaleY: 1, originY: 0 },
    hidden: { scaleY: 0, originY: 0 },
    exit: { scaleX: 0, originX: 0 },
    enter: { scaleY: 0, originY: 0 },
  };

  const rectVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 },
  };

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          key="overlay"
          initial="hidden"
          animate="visible"
          exit="exit"
          enter="enter"
          variants={variants}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "none",
            zIndex: 999,
          }}
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={rectVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                position: "absolute",
                width: "25%",
                height: "100%",
                top: 0,
                left: `${index * 20}%`,
                background: "#15241e",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenOverlay;
