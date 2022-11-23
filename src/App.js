import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Welcome } from './components/Welcome';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const App = () => {

  return(
    <Router>
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation" id="Welcome">
          <div className="navbar-brand">
              <AnchorLink href="#Welcome" className="navbar-item">
                <img src="https://live.staticflickr.com/65535/52306659962_edec6176a3_o.png" alt=""/>
              </AnchorLink>
          </div>
          <div className="navbar-start">    
            <AnchorLink className="navbar-item" href="#About">About</AnchorLink>
            <AnchorLink className="navbar-item" href="#Skills">Skills</AnchorLink>  
            <AnchorLink className="navbar-item" href="#Projects">Projects</AnchorLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="https://github.com/albertzeap" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            </div>
            <div className="navbar-item">
              <a href="https://www.linkedin.com/in/albert-paez-30501a1b5/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <div className="navbar-item">
              <button className="button is-primary">Contact me</button>
            </div>
          </div>
        </nav>
        <Welcome/>
        <About />
        <Skills/>
        <Projects/>
        <footer className="footer has-background-black">
          <div class="content has-text-centered has-text-light">
            <p>
              <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </footer>
      </>
    </Router>
  );
}

export default App;
