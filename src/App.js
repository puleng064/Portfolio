import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Services />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
