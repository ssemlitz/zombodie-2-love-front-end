import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignupForm.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, photoData.photo)
      props.handleSignupOrLogin()
      navigate('/create-profile')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="form-container"
    >
        <label htmlFor="name" className="label">First Name</label>
      <div className="signup-input">
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
        <label htmlFor="email" className="label">Email</label>
      <div className="signup-input">
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
        <label htmlFor="password" className="label">Password</label>
        <div className="signup-input">
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
        <label htmlFor="confirm" className="label">
          Confirm Password
        </label>
      <div className="signup-input">
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
        <label htmlFor="photo-upload" className="label">
          Upload Photo
        </label>
      <div className="signup-input" id='photo-upload'>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
      </div>
      <div className="input-btn">
        <Link to="/">
          <button className='cancel-btn'>Cancel</button>
        </Link>
          <button disabled={isFormInvalid()} className="signup-form-btn">
            Sign Up
          </button>
      </div>
    </form>
  )
}

export default SignupForm
