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
      <h2>Get in Touch</h2>
      <p>Have an exciting project? Let’s connect and make it happen.</p>
      <SocialLinks />
    </section>
  );
}

export default Contact;
