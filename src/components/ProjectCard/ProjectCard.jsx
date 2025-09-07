import { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, imageUrl, liveUrl, githubUrl, technologies, index, isVisible }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="project-card"
      style={{
        transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
      }}
    >
      <div className="project-image-container">
        {imageError ? (
          <div className="project-placeholder">💻</div>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="project-image"
            onError={() => setImageError(true)}
          />
        )}
        <div className="project-overlay">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Vezi Live
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Github Code
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>

        {technologies && technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;