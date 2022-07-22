import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className="signup-container">  
      <h1>READY TO FIND <span>ZOMBODIE 2 LOVE</span> ?</h1>
    
      <SignupForm {...props} updateMessage={updateMessage} />
    </div>
  )
}

export default Signup
