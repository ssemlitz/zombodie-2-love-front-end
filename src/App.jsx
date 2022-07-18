import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import CreateProfile from "./pages/CreateProfile/CreateProfile"
import * as authService from './services/authService'
import * as profileService from "./services/profileService"
import './styles/App.css'
import Matches from './pages/Matches/Matches'
import Messages from './pages/Messages/Messages'
import editProfile from './pages/EditProfile/EditProfile'

const App = () => {
  const [profiles, setProfiles] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchAllProfiles = async () => {
      const profileData = await profileService.getAll()
      setProfiles(profileData)
    }
    fetchAllProfiles()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleCreateProfile = async newProfileData => {
    const newProfile = await profileService.create(newProfileData)
    setProfiles([...profiles, newProfile])
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route 
          path="/create-profile"
          element={<CreateProfile handleCreateProfile={handleCreateProfile}/>}
          />
        <Route
          path="edit-profile"
          element={<editProfile />}
        />
        { <Route  
          path="/messages"
          element={<Messages />}
        /> }
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/matches"
          element={<Matches />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
