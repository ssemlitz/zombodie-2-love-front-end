import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/zombieapp-logo.png'

const NavBar = ({ user, handleLogout, profile }) => {

  return (
    <>
    <header className="App-header">
      {user ? (
        <nav>
          <Link to="/profiles">
            <img src={Logo} alt="" id="logo" />
          </Link>
          <Link to="/chat">Chat</Link>
          <Link to="/edit-profile" state={{profile}}>Edit Profile</Link>
          <Link to="" onClick={handleLogout}>Log Out</Link>
        </nav>
      ) : 
        <> </>
      }
      </header>
    </>
  );
};


export default NavBar