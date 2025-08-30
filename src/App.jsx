
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { personalData, projects } from './data';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero name={personalData.name} country={personalData.country} />
      <About description={personalData.description} />
      <Portfolio projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;