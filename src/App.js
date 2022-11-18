import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./styles/App.css"
import "bulma/css/bulma.css"
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Welcome } from './components/Welcome';

const App = () => {

  return(
    <Router>
      <>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="https://live.staticflickr.com/65535/52306659962_edec6176a3_o.png" alt=""/>
              </Link>
          </div>
          <div className="navbar-start">    
            <Link className="navbar-item" to="/About">About</Link>
            <Link className="navbar-item" to="/Skills">Skills</Link>  
            <Link className="navbar-item" to="/Projects">Projects</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-primary">Contact me</button>
            </div>
          </div>
        </nav>
        {/* <Welcome/>
        <About/>
        <Skills/>
        <Projects/> */}
      </>
      <Routes>
        <Route path="/" exact element={<Welcome/>}/>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
