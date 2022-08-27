import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./SidebarRow.css"


function SidebarRow({title, link}) {
  return (
    <div id="sidebarRow">
        <AnchorLink href={link}>
          <h4>{title}</h4>
        </AnchorLink>

    </div>
  )
}

export default SidebarRow