import { Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'
import "./Experience.css"

function Experience() {
  return (
    <div id="experience">
      <h2>//experience.</h2>
      <div className="cards">
        <Card>
          <CardHeader title="Frontend Dev (React & JS)" disableTypography="true"/>
          <CardContent>Aspiring in the web development field. Created several projects both individually and 
            in teams using HTML, CSS, JS, React, and NextJS.
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Software Development" disableTypography="true"/>
          <CardContent>
            Built many projects in college that helped build experience in OOP, following software 
            development metholodgies, using development tools,team delegation/coordination, and open source development.
            The following projects required experience in the following languages: Python, C++/C.
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Cyber Security" disableTypography="true"/>
          <CardContent>
            Took many classes and built projects that involved encryption/decryption schemes, static/dynamic analysis, blockchain technologies, 
            and IDs/IDPS systems. The projects and assignments requries sufficiency in the following languages and programs: Python, C++, IDA Pro,
            Snort, etc.
          </CardContent>
        </Card>


      </div>
      
      
      
    </div>
  )
}

export default Experience