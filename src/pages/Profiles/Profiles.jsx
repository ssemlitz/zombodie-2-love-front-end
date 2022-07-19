import { useState, useEffect } from 'react'
import DateCard from '../../components/DateCard/DateCard'
import * as profileService from '../../services/profileService'


const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Potential Matches</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <div key={profile._id}>
              <DateCard key={profile._id} profile={profile}/>
            
              <h1>
              {profile.name}
              </h1> 
              <p> Species: 
              {profile.species}
              </p>
              <p> Do you eat brains?
              {profile.brains = true ? "yes, I eat brains" : "do not prefer to eat brains"}
              </p>
              <p> Prefer to date: 
              {profile.prefersZombie = true ? "Zombies" : profile.prefersHalfbie = true ? "Halbies": profile.prefersHuman = true ? "Humans" : "I ain't got no type"}
              </p>
              <p>
              {profile.prefersHuman}

              </p>
              <p>
              {profile.prefersHalfbie}
              </p>
              <p>
              {profile.age} years old

              </p>
              height:
              <p>
              {profile.height}"

              </p>
              About Me: 
              <p>
              {profile.bio}
              </p>

              </div>


          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles