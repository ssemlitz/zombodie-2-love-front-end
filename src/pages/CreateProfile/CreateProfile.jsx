import CreateProfileForm from "../../components/CreateProfileForm/CreateProfileForm"

const CreateProfile = props => {

  return (
    <>
      <h1>Create Profile</h1>
      <main>
      <CreateProfileForm handleUpdateProfile={props.handleUpdateProfile} setProfile={props.setProfile}/>

      </main>



    </>
  
  )
  }


export default CreateProfile