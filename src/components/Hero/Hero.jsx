import './Hero.css';

function Hero({ name, country }) {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Salut, eu sunt {name}</h1>
        <p>Un front-end developer pasionat din {country}</p>
        <button onClick={scrollToPortfolio}>Vezi proiectele mele</button>
      </div>
    </section>
  );
}

export default Hero;