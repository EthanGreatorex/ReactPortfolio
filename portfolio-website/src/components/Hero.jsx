import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import ProfilePicture from "../assets/pfp.jpeg";
import "../css/hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  const [hasCopyEmail, setCopyEmail] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("eggreatorex@icloud.com");
    setCopyEmail(true);
    setTimeout(() => setCopyEmail(false), 2000);
  }

  return (
    <>
      <motion.div
      animate={{ opacity: 1.5, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}>
        <div className="hero-content">
          <div className="hero__profile">
            <img
              className="hero__profile-image"
              src={ProfilePicture}
              alt="ethan taking selfie in London"
            />
          </div>
          <div className="hero-about">
            <h1 className="hero-about__title">Hi,</h1>
            <h3 className="hero-about__name">I&apos;m Ethan.</h3>
            <p className="hero-about__occupation">Student learning Web Dev</p>
            <a
              href="https://github.com/EthanGreatorex"
              className="hero__link"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/ethan-greatorex-240983327/"
              target="_blank"
              className="hero__link"
              rel="noreferrer"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <button onClick={copyEmail} tabIndex={0} className="hero__link">
              {hasCopyEmail ? (
                <p className="copied-email">Copied!</p>
              ) : (
                <FaEnvelope></FaEnvelope>
              )}
            </button>
            <p className="hero-about__hobbies">
              Besides web development, I enjoy music, running and watching
              movies!
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
