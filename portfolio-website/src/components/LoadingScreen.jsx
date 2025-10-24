import { motion } from "framer-motion";
import "../css/loading.css";
import React from "react";
import ProfilePicture from "../assets/pfp-2.jpeg";
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
        color: "var(--text-color)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <img
        src={ProfilePicture}
        alt="profile picture"
        className="expand-on-hover"
        style={{
          width: "200px",
          marginBottom: "50px",
          borderRadius: "50%"
        }}
      />
      Ethan<span style={{ color: "rgb(255, 149, 19)" }}> Greatorex</span>
    </motion.div>
  );
}

export default LoadingScreen;
