import React from 'react'
import "./Header.css"
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <a href="/">
                <img src="https://live.staticflickr.com/65535/52306659962_edec6176a3_o.png" alt=""/>
            </a>
        </div>
        
        <div className="header__center">
            <h2>Web Developer</h2>
        </div>

        <div className="header__right">
            <IconButton href="https://github.com/albertzeap" target="_blank" rel="noopener">
                <GitHubIcon/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/albert-paez-30501a1b5" target="_blank" rel="noopener">
                <LinkedInIcon/>
            </IconButton>


        </div>



    </div>

  )
}

export default Header