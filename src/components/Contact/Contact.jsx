import { useInView } from '../../hooks/useInView';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Contact.css';

function Contact() {
  const [ref, isInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact ${isInView ? 'contact-visible' : ''}`}
    >
      <h2>Contactează-mă</h2>
      <p>Ai un proiect interesant? Hai să vorbim!</p>
      <SocialLinks />
    </section>
  );
}

export default Contact;