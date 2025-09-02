import { useInView } from '../../hooks/useInView';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Portfolio.css';

function Portfolio({ projects }) {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="portfolio" ref={ref} className="portfolio">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Proiectele Mele</h2>
        <p className="portfolio-subtitle">De la idei la realitate digitală</p>

        <div className="portfolio-stats">
          <div className="stat">
            <span className="stat-number">{projects.length}+</span>
            <span className="stat-label">Proiecte</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Pasiune</span>
          </div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Inovație</span>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveUrl={project.linkLive}
            githubUrl={project.linkGithub}
            technologies={project.technologies || []}
            index={index}
            isVisible={isInView}
          />
        ))}
      </div>

      <div className="portfolio-cta">
        <p>💡 Ai un proiect interesant? Hai să colaborăm!</p>
        <button
          className="cta-button"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contactează-mă
        </button>
      </div>
    </section>
  );
}

export default Portfolio;