import Project from "./Project.jsx";
import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaCss3, FaHtml5, FaFlask } from "react-icons/fa";
import CosmoAI from "../assets/cosmo-chat.png";
import ReactMovieApp from "../assets/react-movie-app.png";
import ReactQuizApp from "../assets/react-quiz-app.png";
import TerminalWebsite from "../assets/terminal-website.png";
import EasyArticle from "../assets/easy-article.png";
import SpaceGame from "../assets/space-game.png";
import "../css/projects.css";

const project_data = [
  {
    title: "Cosmo AI",
    image: CosmoAI,
    link: "https://cosmoai-v2z5.onrender.com/",
    technologies: [
      { icon: FaPython },
      { icon: FaCss3 },
      { icon: FaHtml5 },
      { icon: FaFlask },
    ],
    description: "An app built using Flask that allows users to chat with AI and upload files & website URLs."
  },
  {
    title: "React Movie App",
    image: ReactMovieApp,
    link: "https://ethangreatorex.github.io/ReactMovieApp/",
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }, { icon: FaReact }],
    description: "An app built using React to search for movies and view details.",
  },
  {
    title: "React Quiz App",
    image: ReactQuizApp,
    link: "https://ethangreatorex.github.io/ReactQuizApp/",
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }, { icon: FaReact }],
    description: "This app allows users to take quizzes on various topics. Built using React and The Trivia API.",
  },
  {
    title: "Terminal Website",
    image: TerminalWebsite,
    link: "https://ethangreatorex.github.io/TerminalWebsiteV2/",
    technologies: [{ icon: FaCss3 }, { icon: FaHtml5 }],
    description: "A fun project that simulates a terminal interface. Built using HTML, JS and CSS"
  },
  {
    title: "Easy Article",
    image: EasyArticle,
    link: "https://github.com/EthanGreatorex/EasyArticleFlaskAPP",
    technologies: [
      { icon: FaCss3 },
      { icon: FaHtml5 },
      { icon: FaFlask },
      { icon: FaPython },
    ],
    description: "A Flask app that allows users to view articles in a simple format through web scraping. Orignally started as a Python Tkinter app."
  },
  {
    title: "Space Game",
    image: SpaceGame,
    link: "https://github.com/EthanGreatorex/SpaceGame",
    technologies: [{ icon: FaPython }],
    description: "A game build using Python and Pygame. Players must avoid the asteroids which get faster over time.",
  },
];

function Projects() {
  return (
    <div className="project-list">
      {project_data.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="project-list__motion">
          <Project
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
            technologies={project.technologies}
            description={project.description}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
