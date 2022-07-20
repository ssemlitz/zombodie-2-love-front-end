import DateCard from '../../components/DateCard/DateCard'
import { Link } from 'react-router-dom'



const Profiles = (props) => {

  return (
    <>
      <h1>Potential Matches</h1>
      {props.profiles.length ? 
        <>
          {props.profiles.map(profile =>
          <Link to={`/profiles/${profile._id}`} profiles={props.profiles} key={profile._id}>
            {/* <ProfilePage key={profile._id}/> */}
            <div key={profile._id}>
              <DateCard key={profile._id} profile={profile}/>
            
              <h1>
              
              </h1> 
              {/* <p> Species: 
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
              </p> */}

              </div>

          </Link>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles