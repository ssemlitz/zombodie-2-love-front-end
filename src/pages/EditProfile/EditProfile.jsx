import { useState, useEffect } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/zombieapp-logo.png'
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box } from '@mui/system'


const EditProfile = () => {

  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        <h1>Edit your profile</h1>
      </Box>
    </>
  )
}


export default EditProfile