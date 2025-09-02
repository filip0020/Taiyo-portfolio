import { useEffect, useRef, useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const stageTimeout = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => {
      const opening = !prev;

      if (stageTimeout.current) {
        clearTimeout(stageTimeout.current);
        stageTimeout.current = null;
      }

      if (opening) {
        // pas 1: 3 → 1
        btnRef.current?.classList.add('open');
        // pas 2: 1 → X
        stageTimeout.current = setTimeout(() => {
          btnRef.current?.classList.add('x-formation');
        }, 200);
      } else {
        // pas 1: X → 1
        btnRef.current?.classList.remove('x-formation');
        // pas 2: 1 → 3
        stageTimeout.current = setTimeout(() => {
          btnRef.current?.classList.remove('open');
        }, 200);
      }

      return opening;
    });
  };

  useEffect(() => {
    return () => {
      if (stageTimeout.current) clearTimeout(stageTimeout.current);
    };
  }, []);

  return (
    <>
      <div
        ref={btnRef}
        className="burger-menu"
        onClick={toggleMenu}
        role="button"
        aria-label="Deschide/închide meniul"
        aria-expanded={isOpen}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

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
