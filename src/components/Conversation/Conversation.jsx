import { useEffect, useState } from "react"
import * as profileService from '../../services/profileService'
import Profiles from "../../pages/Profiles/Profiles"
import './Conversation.css'

const Conversation = (props) => {
  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    const userId = props.chat.members.find((id)=>id !== props.currentUserId)
    // console.log(props.currentUserId)
    // console.log(userId)
    const getUserData = async() => {
      try {
        const data = await props.profiles.find((profile) => {
          return profile._id.toString() === userId
        })
        setUserData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [props.profiles])

  return(
    <>
      <div className="follower conversation">
        <div>
          <div className="online-dot"></div>
          {/* <img src="{userData?.profilePicture ? " alt="" /> */}
          <div className="name" style={{fontSize: "0.8rem"}}>
            <span>{userData?.name}</span>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}


export default Conversation