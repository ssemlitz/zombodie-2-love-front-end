import {useState } from "react"

function CreateProfileForm (props) {
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
  
  return(
    <>

    <h1>Tell us more about you </h1>
    <form>
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
              required
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
              required
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
              type="textarea"
              className="create-form"
              id="bio-input"
              bio="bio"
              value={profileData.bio}
              onChange={handleChange}
              required
            />
        


        </div>
        <div className="btn">
          <button>Back:</button>
          <button>Finish</button>
        </div>

      </div>

    </form>
    
    </>

  )
  
}

export default CreateProfileForm