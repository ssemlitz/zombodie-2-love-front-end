import React from "react";
import * as profileService from "../../services/profileService.js";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import "./EditProfile.css";

function EditProfile(props) {
  const formElement = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [validForm, setValidForm] = useState(false);
  console.log(location);
  const [profileData, setProfileData] = useState(location.state.profile);

  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [profileData]);

  const handleChange = (evt) => {
    setProfileData({ ...profileData, [evt.target.name]: evt.target.value });
  };

  const handleToggle = (evt) => {
    setProfileData({ ...profileData, [evt.target.name]: !!evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const data = await profileService.update(profileData);
    console.log(data);
    navigate("/profiles");
  };

  return (
    <main className="edit-body">
      <h1>EDIT PROFILE</h1>
      <form
        className="edit-profile-form"
        autoComplete="off"
        ref={formElement}
        onSubmit={handleSubmit}
      >
        <div>
          <div >
            <label className="sp">
              <b>SPECIES</b>
              <select
                type="text"
                className="create-form"
                id="species-input"
                name="species"
                onChange={handleChange}
                required
              >
                <option value={(profileData.species = "Human")}>HUMAN</option>
                <option value={(profileData.species = "Halfbie")}>
                  HALFBIE
                </option>
                <option value={(profileData.species = "Zombie")}>ZOMBIE</option>
              </select>
            </label>
            <label className="check-input">
              <b>PREFERENCES</b>
              <input
                type="checkbox"
                className="create-form"
                id="species-input"
                name="prefersHuman"
                value={profileData.prefersHuman}
                onChange={handleToggle}
                checked={profileData.prefersHuman}
              />
              HUMAN
              <input
                type="checkbox"
                className="create-form"
                id="species-input"
                name="prefersHalfbie"
                value={profileData.prefersHalfbie}
                onChange={handleToggle}
                checked={profileData.prefersHalfbie}
              />
              HALFBIE
              <input
                type="checkbox"
                className="create-form-type"
                id="species-input"
                name="prefersZombie"
                value={profileData.prefersZombie}
                onChange={handleToggle}
                checked={profileData.prefersZombie}
              />
              ZOMBIE
            </label>
          </div>
          <div>
            <label className="edit-height">
              <b>HEIGHT</b>
              <input
                type="text"
                className="create-text"
                id="height-input"
                name="height"
                value={profileData.height}
                onChange={handleChange}
                placeholder="INCHES"
              />
            </label>
          </div>
          <div>
            <label className="check-input">
              <b>DO YOU EAT BRAINS?</b>
              <input
                type="checkbox"
                className="create-form"
                id="brains-input"
                name="brains"
                value={profileData.brains}
                onChange={handleToggle}
              />
              YES
              <input
                type="checkbox"
                className="create-form"
                id="brains-input"
                name="brains"
                value={profileData.brains}
                onChange={handleToggle}
              />{" "}
              NO
            </label>
          </div>
          <div className="edit-about">
            <label className="edit-bio">
              <b>ABOUT ME</b>
              <textarea
                autoComplete="off"
                className="create-form"
                id="bio-input"
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="edit-btns">
            <Link to="/profiles">
              <button className="btn-cancel">CANCEL</button>
            </Link>

            <button type="submit" className="btn-finish" disabled={!validForm}>
              UPDATE
            </button>
          </div>
          <div className="delete-profile">
            <h2> I FOUND ZOMBODIE 2 LOVE .... </h2>
            <button
              className="delete-btn        "
              onClick={() => props.handleDeleteProfile(profileData._id)}
            >
              DELETE PROFILE
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default EditProfile;
