import React from 'react'
import "./Header.css"
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link, Route, Routes } from 'react-router-dom';
// import Home from './Home';


function Header() {
  return (
    <div className="header">

        <div className="header__left">
            {/* <Link to="/"> */}
            {/* <a href="/"> */}
            <AnchorLink href='#app'>
                <img src="https://live.staticflickr.com/65535/52306659962_edec6176a3_o.png" alt=""/>
            </AnchorLink>    
            {/* </a> */}
            {/* </Link> */}
        </div>
        
        <div className="header__center">
            
        </div>

        <div className="header__right">
            <IconButton href="https://github.com/albertzeap" target="_blank" rel="noopener">
                <GitHubIcon/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/albert-paez-30501a1b5" target="_blank" rel="noopener">
                <LinkedInIcon/>
            </IconButton>
        </div>

        {/* <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div> */}



    </div>

  )
}

export default Header