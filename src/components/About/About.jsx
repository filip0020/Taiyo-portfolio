import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('artist');
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" ref={ref} className={`about ${isInView ? 'about-visible' : ''}`}>
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">Artist • Developer</p>

      <div className="about-compact">
        <div className="about-header">
          <div className="about-avatar">
            <img src="../Filip-Todorov.jpg" alt="Filip Todorov" />
          </div>

          <div className="about-bio">
            <h3>Filip Todorov</h3>
            <p>💻 Frontend Developer • 🎨 Artist</p>
            <div className="bio-stats">
              <span>2+ years coding</span>
              <span>10+ years drawing</span>
              <span>100% passion</span>
            </div>
          </div>
        </div>

        {/* Compact Tabs */}
        <div className="compact-tabs">
          {['artist', 'developer', 'goals'].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'compact-active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'artist' && '🎨 Artist'}
              {tab === 'developer' && '💻 Developer'}
              {tab === 'goals' && '🚀 Goals'}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="compact-content">
          {activeTab === 'artist' && (
            <div className="tab-artist">
              <h4>Creativity</h4>
              <ul>
                <li>🎨 Drawing for over 10 years - from sketches to paintings</li>
                <li>🎭 Love turning emotions into visual art</li>
                <li>🌈 Strong eye for detail and color harmony</li>
              </ul>
            </div>
          )}

          {activeTab === 'developer' && (
            <div className="tab-developer">
              <h4>From Art to Algorithms</h4>
              <ul>
                <li>💻 2 years of frontend development with React, HTML5, CSS3, JS</li>
                <li>🎯 Focused on intuitive and beautiful interfaces</li>
                <li>🚀 Dedicated self-learner - improving every day</li>
                <li>❤️ Passion for clean, functional code</li>
              </ul>
            </div>
          )}

          {activeTab === 'goals' && (
            <div className="tab-goals">
              <h4>Vision & Ambition</h4>
              <ul>
                <li>⭐ Becoming an expert in React and JavaScript</li>
                <li>🌍 Working on high-impact projects</li>
                <li>📚 Continuously learning and sharing with the community</li>
                <li>🎨 Blending art and technology in unique projects</li>
              </ul>
            </div>
          )}
        </div>

        {/* Inspirational Quote */}
        <blockquote className="about-quote">
          "Turning abstract ideas into digital realities"
        </blockquote>
      </div>
    </section>
  );
};

export default About;
