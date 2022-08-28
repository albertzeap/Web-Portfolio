import React from 'react'
import "./Project.css"
import { Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material'
import Button from '@mui/material/Button';
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="projects" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="300">
        <h2>Projects.</h2>
        <div className="cards" data-aos="slide-up">
          <Card sx={{maxWidth: 345}}>
            
            <CardMedia 
            component="img" 
            height="200"
            image='https://images.unsplash.com/photo-1600859343572-566b5ee12973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
            alt="facebook"
            />
            <CardHeader title="Facebook Clone" disableTypography={true} />
            <CardContent>
              This project uses React and JS in order to create a clone of the famous social media site, Facebook. 
              It features Google authentication using Firebase and realtime posting using a combination of Firebase and
              React Context API. Lastly, the Material-UI library was used for styling.
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                variant="contained" 
                href="https://facebook-clone-5a055.web.app/" 
                target="_blank">
                See Live
              </Button>

              <Button 
                size="small" 
                href="https://github.com/albertzeap/Facebook-Clone" 
                target="_blank">
                Source Code
              </Button>

            </CardActions>
          </Card>

          <Card>
            
            <CardMedia 
            component="img" 
            height="200"
            image='https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt="github"
            />
            <CardHeader title="Github Timelines" disableTypography={true}/>
            <CardContent>
              Developed with a team, this project allows employers to view a timeline view of a user's repository history.
              This project uses the NextJS framework and github user API to fetch user data.
            </CardContent>
            <CardActions>

              <Button 
                size="small" 
                variant="contained" 
                href="https://timelines-ismael-barajas.vercel.app/" 
                target="_blank">
                See Live
              </Button>

              <Button 
                size="small" 
                href="https://github.com/Ismael-Barajas/Timelines" 
                target="_blank">
                Source Code
              </Button>

            </CardActions>
          </Card>

          <Card>
            
            <CardMedia 
            component="img" 
            height="200"
            image='https://images.unsplash.com/photo-1652116759161-047b747091a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
            alt="beat board"
            />
            <CardHeader title="Python Beat Board" disableTypography={true}/>
            <CardContent>
              Developed as a passion project, this program allows any user to enjoy the beauty of music.
              This program uses python and tkinter to create a GUI where the user can activate specific sounds
              based on the button or key pressed 
            </CardContent>
            <CardActions>

              <Button 
                size="small" 
                href="https://github.com/albertzeap/Python-Beat-Board/tree/main/Beat-Board" 
                target="_blank">
                Source Code
              </Button>

            </CardActions>
          </Card>
        </div>
    </div>
  )
}

export default Projects