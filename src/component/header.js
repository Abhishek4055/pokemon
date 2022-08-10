import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './searchBar';
import HomeIcon from '@mui/icons-material/Home';
import {  Button} from '@mui/material';
import { useNavigate } from "react-router-dom";



function Header() {
  const navigation = useNavigate()
  return (
    <AppBar position="fixed"  sx={{background: "black"}}>
      <Toolbar>
            <Button color="inherit"  onClick={()=> navigation('/')} >
              <HomeIcon color="inherit" />
            </Button>
        <Typography> This is Pokemon Header</Typography> 
        <SearchBar/>
      </Toolbar>
    </AppBar>
  )
}

export default React.memo(Header)