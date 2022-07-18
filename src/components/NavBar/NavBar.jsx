import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/zombieapp-logo.png'
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material'
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box } from '@mui/system'

const NavBar = ({ user, handleLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const openMenu = Boolean(anchorEl)

  const handleOpen = (evt) => {
    setAnchorEl(evt.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      {user ?
            <AppBar elevation={5} sx={{ backgroundColor: "#fff" }}>
              <Toolbar>
                <img src={Logo} alt="" id="logo" />
                <Box 
                  sx={{ 
                    display: "flex", 
                    // justifyContent: "space-between", 
                    width: "100%",
                  }} 
                  component="div">
                  <Box 
                    sx={{ display: "flex" }}>
                    <Typography 
                      sx={{ 
                        marginRight: "20px", 
                        cursor: "pointer", 
                        color: "#616161" }}>Messages</Typography>
                    <Typography 
                      sx={{ 
                        marginRight: "20px", 
                        cursor: "pointer", 
                        color: "#616161" }}
                        aria-controls="profile-dropdown"
                        aria-haspopup="true"
                        aria-expanded={openMenu ? "true" : undefined }
                        onClick={handleOpen}
                        >
                          Profile
                    </Typography>
                    <Menu id="profile-dropdown" anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    >
                      <Link to="/edit-profile">
                        <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                      </Link>
                        <Link to="" onClick={handleLogout}>
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                      </Link>
                    </Menu>
                  </Box>
                  {/* <Box>
                    <IconButton>
                      <MenuRoundedIcon/>
                    </IconButton>
                  </Box> */}
                </Box>
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
