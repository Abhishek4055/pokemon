import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Header() {
  return (
    <AppBar position="fixed"  sx={{background: "black"}}>
      <Toolbar>
        <Typography> This is Pokemon Header</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header