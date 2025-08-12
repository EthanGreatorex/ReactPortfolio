import { motion } from "framer-motion";
import React from "react";
function LoadingScreen() {
  return (
    <motion.div className="loading-screen"
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "40vh",

      }}
    >
      Ethan.dev
    </motion.div>
  );
}

export default LoadingScreen;

