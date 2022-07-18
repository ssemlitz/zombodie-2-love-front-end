import { Link } from 'react-router-dom'
import Logo from '../../assets/zombieapp-logo.png'
import { Button } from '@mui/material'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <img src={Logo} alt="" id="logo" />
            {/* Welcome, {user.name} */}
            <Link to="/profiles">Profiles</Link>
            {/* <Link to="/changePassword">Change Password</Link> */}
            <Link to="/Messages">Messages</Link>
            <Link to="" onClick={handleLogout}>Log Out</Link>
            <Button variant='primary'>Edit Profile</Button>
          <Button variant='primary'>Log Out</Button>
        </nav>
      :
        <nav>
          <img src={Logo} alt="" id="landing-logo" />
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      }
    </>
  )
}

export default NavBar
