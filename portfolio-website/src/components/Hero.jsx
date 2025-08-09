import { useState } from "react";
import React from "react";
import ProfilePicture from "../assets/london-pfp.jpg";
import "../css/hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useFadeInOnScroll } from "../hooks/FadeInOnScroll";

function Hero() {
  const [hasCopyEmail, setCopyEmail] = useState(false);

  const fadeRef = useFadeInOnScroll();

  function copyEmail() {
    navigator.clipboard.writeText("eggGreatorex@gmail.com");
    setCopyEmail(true);
    setTimeout(() => setCopyEmail(false), 2000);
  }

  return (
    <>
      <div className="hero-content" ref={fadeRef}>
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
          <a href="https://github.com/EthanGreatorex" target="_blank" rel="noreferrer">
            <FaGithub></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-greatorex-240983327/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a onClick={copyEmail}>
            {hasCopyEmail ? (
              <p className="copied-email">Copied!</p>
            ) : (
              <FaEnvelope></FaEnvelope>
            )}
          </a>
          <p className="hero-about__hobbies">
            Besides web development, I enjoy music, running and watching movies!
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
