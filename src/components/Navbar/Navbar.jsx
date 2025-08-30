// components/Navbar/Navbar.jsx
import Logo from '../Logo/Logo';
import './Navbar.css';

function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <Logo />
        <ul className="nav-links">
          <li><a href="#home">Acasă</a></li>
          <li><a href="#about">Despre</a></li>
          <li><a href="#portfolio">Portofoliu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;