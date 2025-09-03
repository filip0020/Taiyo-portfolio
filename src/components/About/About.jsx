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
      <h2 className="about-title">Despre mine</h2>
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
              <span>2+ ani coding</span>
              <span>10+ ani desen</span>
              <span>100% pasiune</span>
            </div>
          </div>
        </div>

        {/* Tabs compacte */}
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

        {/* Conținut dinamic */}
        <div className="compact-content">
          {activeTab === 'artist' && (
            <div className="tab-artist">
              <h4>Creativitate în sânge</h4>
              <ul>
                <li>🎨 Desenez de peste 10 ani - de la schițe la tablouri</li>
                <li>🎭 Iubesc să transform emoțiile în artă vizuală</li>
                <li>🌈 Am ochi pentru detalii și armonie cromatică</li>
              </ul>
            </div>
          )}

          {activeTab === 'developer' && (
            <div className="tab-developer">
              <h4>De la artă la algoritmi</h4>
              <ul>
                <li>💻 2 ani de frontend development cu React, HTML5, CSS3, JS</li>
                <li>🎯 Specializat pe interfețe intuitive și frumoase</li>
                <li>🚀 Autodidact dedicat - învăț zilnic ceva nou</li>
                <li>❤️ Pasiune pentru cod elegant și funcțional</li>
              </ul>
            </div>
          )}

          {activeTab === 'goals' && (
            <div className="tab-goals">
              <h4>Viziune și ambiție</h4>
              <ul>
                <li>⭐ Devin expert React și JavaScript</li>
                <li>🌍 Lucrez la proiecte cu impact mare</li>
                <li>📚 Învăț continuu și împărtășesc cu comunitatea</li>
                <li>🎨 Unesc arta cu tehnologia în proiecte unice</li>
              </ul>
            </div>
          )}
        </div>

        {/* Citat inspirational */}
        <blockquote className="about-quote">
          "Transform ideile abstracte în realități digitale"
        </blockquote>
      </div>
    </section>
  );
};

export default About;