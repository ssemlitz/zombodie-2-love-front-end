import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import * as profileService from '../../services/profileService'

const ProfilePage = (props) => {
  const [profileDetails, setProfileDetails] = useState({})
  console.log(props.profileDetails)
  const location = useLocation()
  console.log(location, "LOCATION")

  useEffect(() => {
    const fetchDetails = async () => 
    {
      const profileData = await 
      profileService.getDetails(location.state.profile)
      setProfileDetails(profileData)
    }
    fetchDetails()
  }, [location.state.profile])


  return (
    <>
      <h1>Wanna Date me? </h1>
      {props.profiles.name ? 
        <>        
          <p> Species: 
              {props.profile.species}
              </p>
              <p> Do you eat brains?
              {profileDetails.brains = true ? "yes, I eat brains" : "do not prefer to eat brains"}
              </p>
              <p> Prefer to date: 
              {profileDetails.prefersZombie = true ? "Zombies" : profileDetails.prefersHalfbie = true ? "Halbies": profileDetails.prefersHuman = true ? "Humans" : "I ain't got no type"}
              </p>
              <p>
              {profileDetails.prefersHuman}

              </p>
              <p>
              {profileDetails.prefersHalfbie}
              </p>
              <p>
              {profileDetails.age} years old

              </p>
              height:
              <p>
              {profileDetails.height}"

              </p>
              About Me: 
              <p>
              {profileDetails.bio}
              </p> 
        </>
      :
        <p>No info</p>
      }
    </>
  )  
}

export default ProfilePage 