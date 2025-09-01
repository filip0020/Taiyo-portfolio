import { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`burger-menu ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      {/* Meniul dropdown */}
      <div className={`nav-overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="nav-content" onClick={(e) => e.stopPropagation()}>
          <nav className="mobile-nav">
            <a href="#about" onClick={toggleMenu}>Despre</a>
            <a href="#portfolio" onClick={toggleMenu}>Portofoliu</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;