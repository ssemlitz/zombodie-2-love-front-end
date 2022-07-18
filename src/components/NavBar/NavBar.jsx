import { Link } from 'react-router-dom'
import Logo from '../../assets/zombieapp-logo.png'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <img src={Logo} alt="" id="logo" />
            {/* Welcome, {user.name} */}
            {/* <Link to="/profiles">Profiles</Link> */}
            <Link to="/Messages">Messages</Link>
            <Link to="" onClick={handleLogout}>log out</Link>
            {/* <Link to="/changePassword">Change Password</Link> */}
        </nav>
      :
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      }
    </>
  )
}

export default NavBar
