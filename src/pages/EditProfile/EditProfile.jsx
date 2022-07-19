import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/zombieapp-logo.png'
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box } from '@mui/system'


function EditProfile(props) {
  const formElement = useRef()
  const [profileForm, setProfileForm] = useState(false)
  const [profileData, setProfileData] = useState({
    species: "",
    brains: false,
    prefersZombie: false,
    prefersHuman: false,
    prefersHalfbie: false,
    height: "",
    bio: ""
  })

  const handleChange = evt => {
    setProfileData({ ...profileData, [evt.target.name]: evt.target.value })

  }
  const handleToggle = evt => {
    setProfileData({ ...profileData, [evt.target.name]: !!evt.target.value })
    console.log(profileData)


  }

  const navigate = useNavigate()
  const handleSubmit = evt => {
    evt.preventDefault()
    // update(profileData)
    navigate("/profiles")
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setProfileForm(true) : setProfileForm(false)
  }, [profileData])



  return (
    <>
    <Box sx={{ marginTop: "150px" }}>
      <h1>Edit Your Profile</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit} >
        <div className="create-profile-form">
          <div>
            <label>Species required </label>
            <input
              type="text"
              className="create-form"
              id="species-input"
              name="species"
              value={profileData.species}
              onChange={handleChange}
              require
            />
            <label>Who you want to date? :</label>
            <input
              type="checkbox"
              className="create-form"
              id="species-input"
              name="prefersZombie"
              value={profileData.prefersZombie}
              onChange={handleToggle}

            />D E A D
            <input
              type="checkbox"
              className="create-form"
              id="species-input"
              name="prefersHuman"
              value={profileData.prefersHuman}
              onChange={handleToggle}

            /> HUMAN
            <input
              type="checkbox"
              className="create-form"
              id="species-input"
              name="prefersHalfbie"
              value={profileData.prefersHalfbie}
              onChange={handleToggle}

            /> HALFBIE

          </div>
          <div>
            <label>Height: </label>
            <input
              type="text"
              className="create-form"
              id="height-input"
              name="height"
              value={profileData.height}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Do you eat brains? </label>
            <input
              type="checkbox"
              className="create-form"
              id="brains-input"
              name="brains"
              value={profileData.brains}
              onChange={handleToggle}

            />Yes
            <input
              type="checkbox"
              className="create-form"
              id="brains-input"
              name="brains"
              value={profileData.brains}
              onChange={handleToggle}
            /> No

          </div>
          <div>
            <label>Bio: </label>
            <textarea
              autoComplete="off"
              className="create-form"
              id="bio-input"
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
            />

          </div>
          <div className="btn">
            <Link to="/">
              <button>Cancel</button>
            </Link>

            <button
              type="submit"
              className="btn-finish"
              disabled={!profileForm}
            >
              Update</button>
          </div>

        </div>

      </form>

    </Box>
    </>
  )

}


export default EditProfile