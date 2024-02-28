import React, { useState } from 'react';
import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar />
      <Menu />
      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
