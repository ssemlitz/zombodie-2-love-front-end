import React from 'react'
import * as profileService from '../../services/profileService.js'
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Box } from '@mui/system'
import "./EditProfile.css";


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
    <main className='edit-body'>

        <Box sx={{ marginTop: "150px" }}>
          <h1>Edit Your Profile</h1>
          <form className="edit-profile-form" autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
            <div >
              <div>
              <label className='sp'>Species required 
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
              </label>
                <label className='check-input'>Preferences:
                  <input
                    type="checkbox"
                    className="create-form-type"
                    id="species-input"
                    name="prefersZombie"
                    value={profileData.prefersZombie}
                    onChange={handleToggle}
                    checked={profileData.prefersZombie}
                  />
                  Zombie
                  <input
                    type="checkbox"
                    className="create-form"
                    id="species-input"
                    name="prefersHuman"
                    value={profileData.prefersHuman}
                    onChange={handleToggle}
                    checked={profileData.prefersHuman}
                  />
                  Human
                  <input
                    type="checkbox"
                    className="create-form"
                    id="species-input"
                    name="prefersHalfbie"
                    value={profileData.prefersHalfbie}
                    onChange={handleToggle}
                    checked={profileData.prefersHalfbie}
                  />
                  Halfbie

                </label>
              </div>
              <div>
                <label className='height'>Height(inches): 
                  <input
                    type="text"
                    className="create-form"
                    id="height-input"
                    name="height"
                    value={profileData.height}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label className='check-input'>Do You Eat Brains? 
                <input
                  type="checkbox"
                  className="create-form"
                  id="brains-input"
                  name="brains"
                  value={profileData.brains}
                  onChange={handleToggle}
                />
                Yes
                <input
                  type="checkbox"
                  className="create-form"
                  id="brains-input"
                  name="brains"
                  value={profileData.brains}
                  onChange={handleToggle}
                />{" "}
                No
              </label>
              </div>
              <div>
                <label className='bio'>Bio: 
                  <textarea
                    autoComplete="off"
                    className="create-form"
                    id="bio-input"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className='btns'>
                <Link to="/profiles">
                  <button className="btn-cancel">Cancel</button>
                </Link>

                <button
                  type="submit"
                  className="btn-finish"
                  disabled={!validForm}
                >
                  Update
                </button>
                <h2> I Found Zombodie2Love .... </h2>
                  <button className='btn-delete' onClick={() => props.handleDeleteProfile(profileData._id)}>Delete
                  </button>             
              </div>
            </div>
        </form>

      </Box>
    </main>
  )

}


export default EditProfile