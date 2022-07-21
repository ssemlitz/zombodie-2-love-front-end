import DateCard from "../../components/DateCard/DateCard";
import { Link } from "react-router-dom";
import * as profileService from "../../services/profileService"
import { createChat } from "../../services/chatService";

const Profiles = (props) => {
  const { profile, profiles } = props;
  const removeSelf = (p) => p._id !== profile._id;
  const brainPreference = (p) => p.brains === profile.brains;
  const speciesPreference = (p) => {
    if (profile.prefersZombie && p.species === "zombie") return true;
    if (profile.prefersHuman && p.species === "human") return true;
    if (profile.prefersHalfbie && p.species === "halfbie") return true;
    return false;
  };
  const filter = profiles.filter(
    (p) => brainPreference(p) && speciesPreference(p) && removeSelf(p)
  );
  const handleLiked = async (profileId, potentialMatch) => {
    const res = await profileService.liked(profileId, potentialMatch._id) 
    console.log(res) 
    props.setProfile(res.myProfile)

    if (res.likedProfile.liked.includes(profileId)) {
      const chat = await createChat({
        senderId: profileId,
        receiverId: potentialMatch._id
      })
      console.log(chat)
    }

  }

  console.log("THIS IS THE PROFILE HAYDEE", profile);
  console.log(filter);
  return (
    <>
      <h1>Potential Matches</h1>
      {filter.length ? (
        <>
          {filter.map((p) => (
            <div key={p._id}>
              <DateCard potentialMatch={p} handleLiked={handleLiked} profile={profile} />
            
            </div>
          ))}
        </>
      ) : (
        <p>No Matches Yet!</p>
      )}
    </>
  );
};

export default Profiles;
