import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import * as authService from "./services/authService";
import * as profileService from "./services/profileService";
import "./styles/App.css";
import Matches from "./pages/Matches/Matches";
import EditProfile from "./pages/EditProfile/EditProfile";
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Chat from "./pages/Chat/Chat";


const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [user, setUser] = useState(authService.getUser());
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles();
      setProfiles(profileData);
      if (user) {
        setProfile(profileData.find((item) => item._id === user.profile));
      }
    };
    fetchProfiles();
  }, []);

  useEffect(() => {
    const fetchAllProfiles = async () => {
      const profileData = await profileService.getAll();
      setProfiles(profileData);
    };
    fetchAllProfiles();
  }, []);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  const handleUpdateProfile = async (profileData) => {
    const newProfile = await profileService.update(profileData);
    setProfiles([...profiles, newProfile]);
  };

  const handleEditProfile = async editedProfileFormData => {
    const newProfilesArray = profiles.map(profile =>
      profile._id === editedProfileFormData._id ? editedProfileFormData : profile
    )
    setProfiles(newProfilesArray)
    navigate('/')
  }

  return (
    <>
      <NavBar profile={profile} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route 
          path="/profiles/:profileId"
          element={<ProfilePage profiles={profiles}/>} 
          />
        <Route
          path="edit-profile"
          element={<EditProfile handleEditProfile={handleEditProfile} />}
          />
        <Route
          path="/create-profile"
          element={<CreateProfile user={user} handleUpdateProfile={handleUpdateProfile} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles profiles={profiles} setProfile={setProfile} profile={profile}/> : <Navigate to="/login" />}
        />
        <Route path="/matches" element={<Matches />} />
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
        <Route
          path="/chat"
          element={
            user ? (
              <Chat profiles={profiles} profile={profile} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
