import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom" 
import { getDetails } from "../../services/profileService"

const ProfilePage = (props) => {
  const [ profileDetails, setProfileDetails] = useState({})
  const location = useLocation()
  console.log('What is inside the location object?????', location)

  useEffect(() => {
    const fetchDetails = async () => {
      const profileData = await getDetails(location.state._id)
      console.log(profileData, "HERE YOU GO SCOTT JUST FOR YOU")
      console.log(location.state._id)
      setProfileDetails(profileData)

    }
    fetchDetails()
  }, [location.state._id])
  
  return ( 
    <>
      <h1>Individual ProfileId
      </h1>
    
      {/* <div>
        {props.profile.map (p =>
        <div key={p._id}>
          <p> Species: 
              {p.species}
              </p>
              <p> Do you eat brains?
              {p.brains = true ? "yes, I eat brains" : "do not prefer to eat brains"}
              </p>
              <p> Prefer to date: 
              {p.prefersZombie = true ? "Zombies" : p.prefersHalfbie = true ? "Halbies": p.prefersHuman = true ? "Humans" : "I ain't got no type"}
              </p>
              <p>
              {p.prefersHuman}

              </p>
              <p>
              {p.prefersHalfbie}
              </p>
              <p>
              {p.age} years old

              </p>
              height:
              <p>
              {p.height}"

              </p>
              About Me: 
              <p>
              {p.bio}
              </p> 
                {/* :
              <p>No info</p> */}
    
      {/* </div> */}


    {/* //   )} */}
    {/* // </div> */} */

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