import Project from "./Project.jsx";
import { FaPython, FaReact, FaCss3, FaHtml5, FaFlask } from "react-icons/fa";
import CosmoAI from "../assets/cosmo-chat.png";
import ReactMovieApp from "../assets/react-movie-app.png";
import ReactQuizApp from "../assets/react-quiz-app.png";
import TerminalWebsite from "../assets/terminal-website.png";
import EasyArticle from '../assets/easy-article.png';
import SpaceGame from '../assets/space-game.png';
import '../css/projects.css';

function Projects() {
  return (
    <div className="project-list">
      <Project
        title="Cosmo AI"
        image={CosmoAI}
        link="https://cosmoai-v2z5.onrender.com/"
        technologies={[
          { icon: FaPython },
          { icon: FaCss3 },
          { icon: FaHtml5 },
          { icon: FaFlask }
        ]}
      ></Project>
      <Project
        title="React Movie App"
        image={ReactMovieApp}
        link="https://ethangreatorex.github.io/ReactMovieApp/"
        technologies={[
          { icon: FaCss3 },
          { icon: FaHtml5 },
          { icon: FaReact }
        ]}
      ></Project>
      <Project
        title="React Quiz App"
        image={ReactQuizApp}
        link="https://ethangreatorex.github.io/ReactQuizApp/"
        technologies={[
          { icon: FaCss3 },
          { icon: FaHtml5 },
          { icon: FaReact }
        ]}
      ></Project>
      <Project
        title="Terminal Website"
        image={TerminalWebsite}
        link="https://ethangreatorex.github.io/TerminalWebsiteV2/"
        technologies={[
          { icon: FaCss3 },
          { icon: FaHtml5 }
        ]}
      ></Project>
      <Project
        title="Easy Article"
        image={EasyArticle}
        link="https://github.com/EthanGreatorex/EasyArticleFlaskAPP"
        technologies={[
          { icon: FaCss3 },
          { icon: FaHtml5 },
          { icon: FaFlask },
          { icon: FaPython },
        ]}
      ></Project>
      <Project
        title="Space Game"
        image={SpaceGame}
        link="https://github.com/EthanGreatorex/SpaceGame"
        technologies={[
          { icon: FaPython }
        ]}
      ></Project>
    </div>
  );
}

export default Projects;
