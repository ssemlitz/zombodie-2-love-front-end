import React from 'react'
import * as profileService from '../../services/profileService.js'
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Box } from '@mui/system'


function EditProfile(props) {
  const formElement = useRef()
  const location = useLocation()
  const navigate = useNavigate()
  const [validForm, setValidForm] = useState(false)
  console.log(location)
  const [profileData, setProfileData] = useState(location.state.profile)
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [profileData])

  const handleChange = evt => {
    setProfileData({ ...profileData, [evt.target.name]: evt.target.value })
  }

  const handleToggle = evt => {
    setProfileData({ ...profileData, [evt.target.name]: !!evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const data = await profileService.update(profileData)
    console.log(data)
    navigate("/profiles")
  }

  



  return (
    <>
    <Box sx={{ marginTop: "150px" }}>
      <h1>Edit Your Profile</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit} >
        <div className="create-profile-form">
          <div>
          <label>Species required </label>
          <select
              type="text"
              className="create-form"
              id="species-input"
              name="species"
              onChange={handleChange}
              required>
                <option value={profileData.species="Human"}>Human</option>
                <option value={profileData.species="Zombie"}>Zombie</option>
                <option value={profileData.species="Halfbie"}>Halfbie</option>
              </select>
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
            <Link to="/profiles">
              <button>Cancel</button>
            </Link>

            <button
              type="submit"
              className="btn-finish"
              disabled={!validForm}
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