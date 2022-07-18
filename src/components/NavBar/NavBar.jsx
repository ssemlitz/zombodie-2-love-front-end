import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/zombieapp-logo.png'
import { Button } from '@mui/material'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box } from '@mui/system'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
            <AppBar elevation={5} sx={{ backgroundColor: "#fff" }}>
              <Toolbar>
                <Box 
                  sx={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    width: "100%",
                  }} 
                component="div">
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}>Logo</Typography>
                <Typography sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}>Messages</Typography>
                  </Box>
                </Box>
                <IconButton>
                  <MenuRoundedIcon/>
                </IconButton>

                
              </Toolbar>
            </AppBar>
            
        // <nav>
        //   <img src={Logo} alt="" id="logo" />
        //     Welcome, {user.name}
        //     <Link to="/profiles">Profiles</Link>
        //     <Link to="/changePassword">Change Password</Link>
        //     <Link to="/Messages">Messages</Link>
        //     <Link to="" onClick={handleLogout}>Log Out</Link>
        //     <Button variant='primary'>Edit Profile</Button>
        //     <Button variant='primary'>Log Out</Button>
        // </nav>
      :
        <nav>
          <img src={Logo} alt="" id="landing-logo" />
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      }
    </>
  )
}

export default NavBar
