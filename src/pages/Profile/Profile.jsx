import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profile = () => {
  // const [profiles, setProfiles] = useState([])
  return (
    <h1>Here is your profile!</h1>
  )
}

export default Profile








// useEffect(() => {
  //   const fetchProfiles = async () => {
  //     const profileData = await profileService.getAllProfiles()
  //     setProfiles(profileData)
  //   }
  //   fetchProfiles()
  // }, [])
//   <>
//   <h1>Hello. This is a list of all the profiles.</h1>
// {
//   profiles.length ?
//   <>
//     {profiles.map(profile =>
//       <p key={profile._id}>{profile.name}</p>
//     )}
//   </>
//   :
//   <p>No profiles yet</p>
// }
//     </>
//   )