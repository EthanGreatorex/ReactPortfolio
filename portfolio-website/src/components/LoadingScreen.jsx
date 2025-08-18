import { motion } from "framer-motion";
import '../css/loading.css'
import React from "react";
function LoadingScreen() {
  return (
    <motion.div
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
        marginTop: "20vh",
        color: "white"

      }}
    >
      Ethan<span style={{color:"rgb(255, 149, 19)"}}>.dev</span>
    </motion.div>
  );
}

export default LoadingScreen;

