import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/zombieapp-logo.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Box } from "@mui/system";

const NavBar = ({ user, handleLogout, profile }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleOpen = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {user ? (
        <nav>
          <Link to="/profiles">
            <img src={Logo} alt="" id="logo" />
          </Link>
          <Box
            sx={{
              display: "flex",
              // justifyContent: "space-between",
              width: "100%",
            }}
            component="div"
          >
            <Box sx={{ display: "flex" }}>
              <Link to="/chat">
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Messages
                </Typography>
              </Link>
              <Box
                sx={{
                  marginRight: "20px",
                  cursor: "pointer",
                  color: "#616161",
                }}
                aria-controls="profile-dropdown"
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleOpen}
              >
                <IconButton>
                  <MenuRoundedIcon />
                </IconButton>
              </Box>
              <Menu
                id="profile-dropdown"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
              >
                <Link to="/edit-profile" state={{ profile }}>
                  <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                </Link>
                <Link to="" onClick={handleLogout}>
                  <MenuItem onClick={handleClose}>Log Out</MenuItem>
                </Link>
              </Menu>
            </Box>
            <Box></Box>
          </Box>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBar;
