import {useState, useRef, useEffect } from "react"

function CreateProfileForm (props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [profileData, setProfileData] = useState({
    species:"",
    brains: Boolean,
    age: Number,
    height: Number, 
    bio: "", 

  })

  const handleChange = evt => {
    setProfileData({ ...profileData, [evt.target.name]: evt.target.value })
  
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleCreateProfile(profileData)
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
            <input
              type="text"
              className="create-form"
              id="species-input"
              name="species"
              value={profileData.species}
              onChange={handleChange}
              required
            />
          <label>Who you want to date? :</label>
            <input
              type="checkbox"
              className="create-form"
              id="species-input"
              name="species"
              value={profileData.species}
              onChange={handleChange}
        
            />D E A D
            <input
              type="checkbox"
              className="create-form"
              id="species-input"
              name="species"
              value={profileData.species}
              onChange={handleChange}

            /> HUMAN
            <input
              type="checkbox"
              className="create-form"
              id="species-input"
              name="species"
              value={profileData.species}
              onChange={handleChange}
        
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
              onChange={handleChange}

            />Yes
            <input
              type="checkbox"
              className="create-form"
              id="brains-input"
              name="brains"
              value={profileData.brains}
              onChange={handleChange}
              /> No

        </div>
        <div>
          <label>Bio: </label>
          <input
              type="text"
              className="create-form"
              id="bio-input"
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
            />

        </div>
        <div className="btn">
          <button>Back:</button>
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