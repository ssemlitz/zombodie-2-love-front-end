import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom" 
import { getDetails } from "../../services/profileService"

const ProfilePage = () => {
  const [ profileDetails, setProfileDetails] = useState({})
  const location = useLocation()
  console.log('What is inside the location object?????', location)
  console.log(profileDetails)

  useEffect(() => {
    const fetchDetails = async () => {
      const profileDetails = await getDetails(location.state._id)
      setProfileDetails(profileDetails)

    }
    fetchDetails()
  }, [location.state._id])
  
  return ( 
    <>
    <br/>
    <br/>
    <div className="profile-page">

      <h1>{profileDetails.name}</h1>
        <p> Species: 
          {profileDetails.species} </p>
        <p> Do You Eat Brains?
          {profileDetails.brains = true ? "Yes" : "No"} </p>
        <p> Preferences: 
          {profileDetails.prefersZombie = true ? "Zombies" : profileDetails.prefersHalfbie = true ? "Halfbies": profileDetails.prefersHuman = true ? "Humans" : "No Preferences"}</p>
        <p>
          {profileDetails.prefersHuman}</p>
        <p>
          {profileDetails.prefersHalfbie}</p>
        <p>
          Age: {profileDetails.age} </p>
        <p>
          Height(inches): {profileDetails.height} </p>
        <p>
          About Me: {profileDetails.bio} </p> 
    </div>
      
    </>

  )
}

export default ProfilePage;




/* <h1>Wanna Date me? </h1>
      {location.props.profiles.name ? 
        <>        
          <p> Species: 
              {location.props.profiles.species}
              </p>
              <p> Do you eat brains?
              {props.profiles.brains = true ? "yes, I eat brains" : "do not prefer to eat brains"}
              </p>
              <p> Prefer to date: 
              {props.profiles.prefersZombie = true ? "Zombies" : props.profiles.prefersHalfbie = true ? "Halbies": props.profiles.prefersHuman = true ? "Humans" : "I ain't got no type"}
              </p>
              <p>
              {props.profiles.prefersHuman}

              </p>
              <p>
              {props.profiles.prefersHalfbie}
              </p>
              <p>
              {props.profiles.age} years old

              </p>
              height:
              <p>
              {props.profiles.height}"

              </p>
              About Me: 
              <p>
              {props.profiles.bio}
              </p> 
        </>
      :
        <p>No info</p>
      }
   */ 