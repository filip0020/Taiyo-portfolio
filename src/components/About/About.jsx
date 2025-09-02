import { useInView } from '../../hooks/useInView';
import './About.css';

function About({ description }) {
  const [ref, isInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`about ${isInView ? 'about-visible' : ''}`}
    >
      <h2 className="about-title">
        Despre Mine
      </h2>
      <p className="about-description">
        {description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error deserunt nostrum sunt consequatur fuga dolores nobis quia possimus, minus asperiores non quo perferendis perspiciatis, praesentium aperiam alias labore? Dolorem, dicta?
      </p>
    </section>
  );
}

export default About;