import React from 'react'
import "./Sidebar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Sidebar() {
  return (
    <div id="sidebar">
        

        <AnchorLink id='sidebar__experience' href='#experience'>
          experience.
        </AnchorLink>
         <br/>
        <AnchorLink id='sidebar__projects' href='#projects'>
          projects.
        </AnchorLink>
       
        

        
    
    
    </div>
  )
}

export default Sidebar