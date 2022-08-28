import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "./Welcome.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SimpleDialog from '../Components/SimpleDialog';

const Welcome=() => {

  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value) => {
    setOpen(false)
    setSelectedValue(value)
  }


  return (
    <div className="welcome__body">
      <div className="line"/>
      <div className="basic__info">
        <h1>ALBERT PAEZ</h1>
        <h4>Aspiring Web developer and Designer</h4>
        <Avatar 
          alt="Albert Paez" 
          src="https://live.staticflickr.com/65535/52311816679_b21d68fb0d_b.jpg"
        />

        <IconButton onClick={handleClickOpen}>
          <MoreHorizIcon sx={{fontSize: 40}}/>
        </IconButton>
        <SimpleDialog 
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />

      </div>
     

    </div>

  )
}

export default Welcome