import { socialLinks } from '../../data';
import './SocialLinks.css';

function SocialLinks() {
  return (
    <div className="social-links-grid">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <svg className="social-logo">
            <use xlinkHref={`/sprite.svg#${link.icon}-icon`} />
          </svg>
          <span className="social-name">{link.name}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;