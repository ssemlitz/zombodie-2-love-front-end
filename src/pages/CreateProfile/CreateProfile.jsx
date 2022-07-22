import CreateProfileForm from "../../components/CreateProfileForm/CreateProfileForm"

const CreateProfile = props => {

  return (
    <>
      <main>
      <CreateProfileForm handleUpdateProfile={props.handleUpdateProfile} setProfile={props.setProfile}/>
      </main>
    </>
  )
  }


export default CreateProfile