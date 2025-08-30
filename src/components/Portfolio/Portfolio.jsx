// components/Portfolio/Portfolio.jsx
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
      <h2 className="portfolio-title">Portofoliu</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveUrl={project.linkLive}
            githubUrl={project.linkGithub}
            index={index} // Trimitem indexul pentru delay
            isVisible={isInView}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;