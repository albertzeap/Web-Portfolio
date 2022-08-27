import React from 'react'
import "./Project.css"
import { Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material'
import Button from '@mui/material/Button';

function Projects() {
  return (
    <div id="projects">
        <h2>//projects</h2>
        <div className="cards">
          <Card sx={{maxWidth: 345}}>
            <CardHeader title="Facebook Clone" disableTypography={true} />
            <CardMedia 
            component="img" 
            height="194"
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
            alt="homepage"
            />
            <CardContent>
              This project uses React and JS in order to create a clone of the famous social media site, Facebook. 
              It features Google authentication using Firebase and realtime posting using a combination of Firebase and
              React Context API. Lastly, the Material-UI library was used for styling.
            </CardContent>
            <CardActions>
              <Button size="small" href="https://facebook-clone-5a055.web.app/" target="_blank">See Live</Button>
              <Button size="small" href="https://github.com/albertzeap/Facebook-Clone" target="_blank">Source Code</Button>
            </CardActions>
          </Card>

          <Card>
            <CardHeader title="Github Timelines" disableTypography={true}/>
            <CardMedia 
            component="img" 
            height="194"
            image='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
            alt="homepage"
            />
            <CardContent>
              Developed with a team, this project allows employers to view a timeline view of a user's repository history.
              This project uses the NextJS framework and github user API to fetch user data.
            </CardContent>
            <CardActions>
              <Button size="small" href="https://timelines-ismael-barajas.vercel.app/" target="_blank">See Live</Button>
              <Button size="small" href="https://github.com/Ismael-Barajas/Timelines" target="_blank">Source Code</Button>
            </CardActions>
          </Card>

          <Card>
            <CardHeader title="Python Beat Board" disableTypography={true}/>
            <CardMedia 
            component="img" 
            height="194"
            image='https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png'
            alt="homepage"
            />
            <CardContent>
              Developed as a passion project, this program allows any user to enjoy the beauty of music.
              This program uses python and tkinter to create a GUI where the user can activate specific sounds
              based on the button or key pressed 
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/albertzeap/Python-Beat-Board/tree/main/Beat-Board" target="_blank">Source Code</Button>
            </CardActions>
          </Card>
        </div>
    </div>
  )
}

export default Projects