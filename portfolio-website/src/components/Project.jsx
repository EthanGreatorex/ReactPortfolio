import "../css/project.css";

function Projects({ title, image, description, link, technologies }) {
  return (
    <div className="project">
      <img
        className="project__image"
        src={image}
        alt={`${title} project screenshot`}
      />
      <div className="project-description">
        <h2 className="project-description__title">{title}</h2>
        <p className="project-description__overview">{description}</p>
        <a href={link} target="_blank" className="project__link">
          View Project
        </a>
        <div className="project__technologies">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return <Icon key={index} className="project__technology-icon" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
