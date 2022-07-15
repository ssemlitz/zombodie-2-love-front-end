import {useState } from "react"

function CreateProfileForm (props) {
  const [profileData, setProfileData] = useState({
    species:"",
    brains: Boolean,
    age: Number,
    height: Number, 
    bio: "", 

  })
  
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
              // value={profileData.species}
              required
            />
          <label>Who you want to date? :</label>
            <input
              type="checkbox"
              className="create-form"
              id="species-input"
              name="species"
              // value={profileData.species}
              required
            />D E A D
            <input
              type="checkbox"
              className="create-form"
              id="species-input"
              name="species"
              // value={profileData.species}
              required
            /> HUMAN
            <input
              type="checkbox"
              className="create-form"
              id="species-input"
              name="species"
              // value={profileData.species}
              required
            /> HALFBIE

        </div>
        <div>
          <label>Height: </label>
          <input
              type="text"
              className="create-form"
              id="height-input"
              name="height"
              // value={profileData.height}
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
              // value={profileData.age}
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
              // value={profileData.brains}
              required
            />Yes
            <input
              type="checkbox"
              className="create-form"
              id="brains-input"
              name="brains"
              // value={profileData.brains}
              required
            /> No

        </div>
        <div>
          <label>Bio: </label>
          <input
              type="text"
              className="create-form"
              id="bio-input"
              bio="bio"
              // value={profileData.bio}
              required
            />
        


        </div>
        <div className="btn">
          <button>Back:</button>
          <button>Submit</button>
        </div>

      </div>

    </form>
    
    </>

  )
  
}

export default CreateProfileForm