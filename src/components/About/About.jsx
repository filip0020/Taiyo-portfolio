import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('artist');
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const fx = (extra = '') => `fade-item ${isInView ? 'fade-in' : ''} ${extra}`.trim();

  return (
    <section
      id="about"
      ref={ref}
      className={`about ${isInView ? 'about-visible' : ''}`}
    >
      <h2 className={fx('about-title')}>
        About Me
      </h2>

      <p className={fx('about-subtitle')}>
        Artist • Developer
      </p>

      <div className={fx('about-compact')}>
        <div className="about-header">
          <div className={fx('about-avatar')}>
            <img src="../Filip-Todorov.jpg" alt="Filip Todorov" />
          </div>

          <div className={fx('about-bio')}>
            <h3 className={fx()} >Filip Todorov</h3>
            <p className={fx()}>💻 Frontend Developer • 🎨 Artist</p>
            <div className="bio-stats">
              <span className={fx()}>2+ years coding</span>
              <span className={fx()}>10+ years drawing</span>
              <span className={fx()}>100% passion</span>
            </div>
          </div>
        </div>

        {/* Compact Tabs */}
        <div className={fx('compact-tabs')}>
          {['artist', 'developer', 'goals'].map((tab) => (
            <button
              key={tab}
              className={`${activeTab === tab ? 'compact-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'artist' && '🎨 Artist'}
              {tab === 'developer' && '💻 Developer'}
              {tab === 'goals' && '🚀 Goals'}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className={fx('compact-content')}>
          {activeTab === 'artist' && (
            <div className="tab-artist">
              <h4 className={fx()}>Creativity</h4>
              <ul>
                <li className={fx()}>🎨 Drawing for over 10 years - from sketches to paintings</li>
                <li className={fx()}>🎭 Love turning emotions into visual art</li>
                <li className={fx()}>🌈 Strong eye for detail and color harmony</li>
              </ul>
            </div>
          )}

          {activeTab === 'developer' && (
            <div className="tab-developer">
              <h4 className={fx()}>From Art to Algorithms</h4>
              <ul>
                <li className={fx()}>💻 2 years of frontend development with React, HTML5, CSS3, JS</li>
                <li className={fx()}>🎯 Focused on intuitive and beautiful interfaces</li>
                <li className={fx()}>🚀 Dedicated self-learner - improving every day</li>
                <li className={fx()}>❤️ Passion for clean, functional code</li>
              </ul>
            </div>
          )}

          {activeTab === 'goals' && (
            <div className="tab-goals">
              <h4 className={fx()}>Vision & Ambition</h4>
              <ul>
                <li className={fx()}>⭐ Becoming an expert in React and JavaScript</li>
                <li className={fx()}>🌍 Working on high-impact projects</li>
                <li className={fx()}>📚 Continuously learning and sharing with the community</li>
                <li className={fx()}>🎨 Blending art and technology in unique projects</li>
              </ul>
            </div>
          )}
        </div>

        {/* Inspirational Quote */}
        <blockquote className={fx('about-quote')}>
          "Turning abstract ideas into digital realities"
        </blockquote>
      </div>
    </section>
  );
};

export default About;
