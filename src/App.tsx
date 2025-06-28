import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
