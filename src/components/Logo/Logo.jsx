// components/Logo/Logo.jsx
import './Logo.css';

function Logo() {
  return (
    <div className="logo-container">
      <svg className="logo-svg" width="50" height="50" viewBox="0 0 50 50">
        <defs>
          {/* Gradient pentru efectul de neon */}
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3caaa3" />
            <stop offset="50%" stopColor="#4ecdc4" />
            <stop offset="100%" stopColor="#168275" />
          </linearGradient>

          {/* Glow effect */}
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer glow circle */}
        <circle cx="25" cy="25" r="22" className="logo-glow" />

        {/* Main circle with gradient */}
        <circle cx="25" cy="25" r="18" className="logo-circle" />

        {/* Abstract geometric pattern */}
        <path className="logo-geometry" d="M15 15 L35 15 L35 35 L15 35 Z M20 20 L30 20 L30 30 L20 30 Z" />

        {/* Central F symbol with multiple effects */}
        <g className="logo-f-symbol">
          <path d="M18 18 L18 32 M18 18 L28 18 M18 25 L25 25" />
          <circle cx="25" cy="25" r="2" className="logo-dot" />
        </g>
      </svg>

      {/* Text with matching effects */}
      <div className="logo-text-container">
        <span className="logo-text-main">FILIP</span>
        <span className="logo-text-sub">DEV</span>
      </div>
    </div>
  );
}

export default Logo;