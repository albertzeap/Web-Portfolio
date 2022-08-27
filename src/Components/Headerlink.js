import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Headerlink.css"


function Headerlink({title, link}) {
  return (
    <div id="header__link">
        <AnchorLink href={link}>
          <h4>{title}</h4>
        </AnchorLink>

    </div>
  )
}

export default Headerlink