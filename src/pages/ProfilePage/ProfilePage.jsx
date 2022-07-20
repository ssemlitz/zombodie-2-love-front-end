const ProfilePage = (props) => {
  return ( 
    <>
      <h1>Individual ProfileId</h1>
    
      <div>
        {props.profiles.map (profile => 
        <div key={profile._id}>
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
                :
              <p>No info</p>
    
      </div>


      )}
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