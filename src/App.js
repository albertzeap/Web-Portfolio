import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
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
        <nav className="navbar is-light" role="navigation" aria-label="main navigation" id="Welcome">
          <div className="navbar-brand">
              {/* <Link className="navbar-item" to="/">
                <img src="https://live.staticflickr.com/65535/52306659962_edec6176a3_o.png" alt=""/>
              </Link> */}
              <AnchorLink href="#Welcome" className="navbar-item">
                <img src="https://live.staticflickr.com/65535/52306659962_edec6176a3_o.png" alt=""/>
              </AnchorLink>
          </div>
          <div className="navbar-start">    
            <AnchorLink className="navbar-item" href="#About">About</AnchorLink>
            <AnchorLink className="navbar-item" href="#Skills">Skills</AnchorLink>  
            <AnchorLink className="navbar-item" href="#Projects">Projects</AnchorLink>
            {/* <Link className="navbar-item" to="/About">About</Link>
            <Link className="navbar-item" to="/Skills">Skills</Link>  
            <Link className="navbar-item" to="/Projects">Projects</Link> */}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-primary">Contact me</button>
            </div>
          </div>
        </nav>
        <Welcome/>
        <About />
        <Skills/>
        <Projects/>
      </>
      {/* <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes> */}
    </Router>
  );
}

export default App;
