import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow';


function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow link='#experience' title="experience."/>
        <SidebarRow link='#projects' title="projects."/>    
    </div>
  )
}

export default Sidebar