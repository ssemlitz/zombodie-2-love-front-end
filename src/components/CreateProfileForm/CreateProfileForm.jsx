import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { update } from "../../services/profileService";
import "./CreateProfileForm.css";

function CreateProfileForm(props) {
  const formElement = useRef();
  const [validForm, setValidForm] = useState(false);
  const [profileData, setProfileData] = useState({
    species: "Human",
    brains: false,
    prefersZombie: false,
    prefersHuman: false,
    prefersHalfbie: false,
    age: "",
    height: "",
    bio: "",
  });

  const handleChange = (evt) => {
    setProfileData({ ...profileData, [evt.target.name]: evt.target.value });
  };
  const handleToggle = (evt) => {
    setProfileData({ ...profileData, [evt.target.name]: !!evt.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const updatedProfile = await update(profileData);
    props.setProfile(updatedProfile);
    navigate("/profiles");
  };

  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [profileData]);

  return (
    <div className="cp-container" id="create-profile">
      <h1>TELL US MORE ABOUT YOU</h1>
      <form
        className="create-form-container"
        autoComplete="off"
        ref={formElement}
        onSubmit={handleSubmit}
      >
        <div className="create-form">
        <label className="cp-label">SPECIES</label>
          <select
            type="text"
            className="create-form"
            id="species-input"
            name="species"
            onChange={(evt) =>
              setProfileData({ ...profileData, species: evt.target.value })
            }
            required
          >
            <option value="Human">HUMAN</option>
            <option value="Zombie">ZOMBIE</option>
            <option value="Halfbie">HALFBIE</option>
          </select>
          
        </div>
        <label className="cp-label">DATE PREFERENCES</label>
        <div className="checkbox-input">
          <input
            type="checkbox"
            className="species-input"
            name="prefersZombie"
            value={profileData.prefersZombie}
            onChange={handleToggle}
          />
          ZOMBIE
          <input
            type="checkbox"
            className="species-input"
            name="prefersHuman"
            value={profileData.prefersHuman}
            onChange={handleToggle}
          />
          HUMAN
          <input
            type="checkbox"
            className="species-input"
            name="prefersHalfbie"
            value={profileData.prefersHalfbie}
            onChange={handleToggle}
          />
          HALFBIE
        </div>
        <div className="create-form">
        <label className="cp-label">HEIGHT</label>
          <input
            type="number"
            id="height-input"
            name="height"
            value={profileData.height}
            onChange={handleChange}
          />
        </div>
        <div className="create-form">
        <label className="cp-label">AGE</label>
          <input
            type="number"
            id="age-input"
            name="age"
            value={profileData.age}
            onChange={handleChange}
          />
        </div>
        <label className="cp-label">DO YOU EAT BRAIN?</label>
        <div className="checkbox-input">
          <input
            type="checkbox"
            className="brains-input"
            name="brains"
            value={profileData.brains}
            onChange={handleToggle}
          />
          YES
          <input
            type="checkbox"
            className="brains-input"
            name="brains"
            value={profileData.brains}
            onChange={handleToggle}
          />
          NO
        </div>
        <div className="create-form">
        <label className="cp-label">ABOUT ME</label>
          <textarea
            autoComplete="off"
            id="bio-input"
            name="bio"
            maxLength='200'
            value={profileData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="cp-btn">
          <Link to="/signup">
            <button className="return-btn">RETURN</button>
          </Link>
          <button type="submit" className="finish-btn" disabled={!validForm}>
            FINISH
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProfileForm;
