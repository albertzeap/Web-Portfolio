import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import "./SimpleDialog.css"

export default function SimpleDialog(props) {

    const {onClose, selectedValue, open} = props

    const handleClose = () => {
      onClose(selectedValue)
    }
  
    return (
      <Dialog
        onClose={handleClose}
        open={open}
      >
        <DialogTitle>
          <h4>About me...</h4>
        </DialogTitle>
        <DialogContent>
          
            As a recent graduate from Cal State Fullerton, 
            I am excited to continue my learning journey through
            the workplace. Through my career, I aim to further develop
            my web development skills so that I am capable of providing users with a phenomenal
            web experience. I am a firm believer that anyone can achieve greatness as long as 
            they have the humility to learn.
          
        </DialogContent>
      </Dialog>
    )

}