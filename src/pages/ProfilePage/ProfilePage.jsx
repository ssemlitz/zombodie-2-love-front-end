import React from "react"
import { useLocation } from "react-router-dom"

const ProfilePage = (props) => {
  // const [profileDetails, setProfileDetails] = useState({})
  // console.log(props.profileDetails)
  const location = useLocation()
  // console.log(location, "LOCATION")

  // useEffect(() => {
  //   const fetchDetails = async () => 
  //   {
  //     const profileData = await 
  //     profileService.getDetails(location.state.profile)
  //     setProfileDetails(profileData)
  //   }
  //   fetchDetails()
  // }, [location.state.profile])


  return (
    <>
      <h1>Wanna Date me? </h1>
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
    </>
  )  
}

export default ProfilePage 