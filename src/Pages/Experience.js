import { Card, CardContent, CardHeader } from '@mui/material'
import React, { useEffect } from 'react'
import "./Experience.css"
import AOS from "aos";
import "aos/dist/aos.css";
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import SecurityIcon from '@mui/icons-material/Security';

function Experience() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="experience"data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="300">
      <h2>Experience.</h2>
      <div className="cards" data-aos="slide-up" data-aos-duration= "400">
        <Card>
          <CardHeader title="Frontend Dev (React & JS)" disableTypography="true"/>
          <CardContent>
            <LanguageIcon/>
            <p>
              Aspiring in the web development field. Created several projects both individually and 
              in teams using HTML, CSS, JS, React, and NextJS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Software Development" disableTypography="true">
            <ComputerIcon/>
          </CardHeader>
          <CardContent>
            <ComputerIcon/>
            <p>
              Built many projects in college that helped build experience in OOP, following software 
              development metholodgies, using development tools,team delegation/coordination, and open source development.
              The following projects required experience in the following languages: Python, C++/C.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Cyber Security" disableTypography="true"/>
          <CardContent>
            <SecurityIcon/>
            <p>
              Took many classes and built projects that involved encryption/decryption schemes, static/dynamic analysis, blockchain technologies, 
              and IDs/IDPS systems. The projects and assignments requries sufficiency in the following languages and programs: Python, C++, IDA Pro,
              Snort, etc.
            </p>
          </CardContent>
        </Card>


      </div>
      
      
      
    </div>
  )
}

export default Experience