import React from 'react'
import Experience from "./Experience"
import Projects from './Projects'
import "./Welcome.css"


const Welcome=() => {
  return (
    <div id="welcome__body">
        
        <h1>Hello! I'm Albert Paez</h1>
        <p>An asipring web developer and designer</p>
        <Experience />
        <Projects />
    </div>

  )
}

export default Welcome