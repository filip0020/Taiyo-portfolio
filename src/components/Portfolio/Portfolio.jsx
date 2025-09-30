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
        <h2 className="portfolio-title">My Projects</h2>
        <p className="portfolio-subtitle">From ideas to digital reality</p>

        <div className="portfolio-stats">
          <div className="stat">
            <span className="stat-number">{projects.length}+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Passion</span>
          </div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Innovation</span>
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
        <p>💡 Do you have an interesting idea? Let’s collaborate and build something great.</p>
        <button
          className="cta-button"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
