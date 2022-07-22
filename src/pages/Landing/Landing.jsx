import './Landing.css'
import { Link } from 'react-router-dom'
import LandingImg from '../../assets/Zombodie2Love-1.png'


const Landing = () => {
  return (
    <>
    <main className='landing-container'>
      <img src={LandingImg} alt="landing-logo" />
      <div className="auth-links">
      <button className="loginBtn"><Link to="/login">Log In</Link></button>
      <button className="signUpBtn"><Link to="/signup">Sign Up</Link></button>
      </div>
    </main>
    </>
  )
}

export default Landing
