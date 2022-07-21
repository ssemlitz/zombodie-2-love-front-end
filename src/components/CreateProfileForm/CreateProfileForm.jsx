import {useState, useRef, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'
import {update} from "../../services/profileService"

function CreateProfileForm (props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [profileData, setProfileData] = useState({
    species:["Human", "Zombie", "Halfbie"],
    brains: false,
    prefersZombie: false, 
    prefersHuman: false, 
    prefersHalfbie: false,
    age: "",
    height: "", 
    bio: "", 

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
    console.log(props.user)
    update(profileData)
    navigate("/profiles")
  }
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [profileData])


  
  return(
    <>

    <h1>Tell us more about you </h1>
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
          <label>Age: </label>
          <input
              type="text"
              className="create-form"
              id="age-input"
              name="age"
              value={profileData.age}
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
          <Link to="/signup">
          <button>Back:</button>
          </Link>
          
          <button
          type="submit"
          className="btn-finish"
          disabled={!validForm}
          >
            Finish</button>
        </div>

      </div>

    </form>
    
    </>

  )
  
}

export default CreateProfileForm