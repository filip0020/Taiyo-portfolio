import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero({ name, country }) {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    // Typewriter effect
    const titleElement = document.querySelector(".hero-title");
    const text = `Hello, I'm ${name}`;
    let index = 0;
    titleElement.innerHTML = "";
    const typeWriter = () => {
      if (index < text.length) {
        titleElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 500);

    // Particles effect
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(52, 212, 201, ${Math.random() * 0.5 + 0.2})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animateParticles);
    };

    createParticles();
    animateParticles();

    // Fade-in
    const contentElements = document.querySelectorAll(".hero-content > *");
    contentElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 1000 + index * 300);
    });

    // Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [name]);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <canvas ref={canvasRef} className="particles-canvas"></canvas>

      {/* Grid parallax background */}
      <div className="parallax-grid"></div>

      {/* Floating tech badges */}
      <div className="tech-badges">
        <div className="badge react">React</div>
        <div className="badge js">JavaScript</div>
        <div className="badge node">Node.js</div>
        <div className="badge css">CSS</div>
      </div>

      <div className="hero-content">
        <h1
          className="hero-title"
          data-text={`Hello, I'm ${name}`}
        ></h1>

        <div className="subtitle-container">
          <p className="hero-subtitle">
            A passionate <span className="typing-text"></span> from {country}
          </p>
        </div>

        <div className="cta-container">
          <button className="cta-button" onClick={scrollToPortfolio}>
            <span>See my projects</span>
            <div className="button-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
