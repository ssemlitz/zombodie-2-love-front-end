import DateCard from "../../components/DateCard/DateCard";
import * as profileService from "../../services/profileService"
import { createChat } from "../../services/chatService";

const Profiles = (props) => {
  const { profile, profiles } = props;
  const removeSelf = (p) => p._id !== profile._id;
  const notInDisliked = (p) => !profile.disliked.includes(p._id)
  const notInLiked = (p) => !profile.liked.includes(p._id)
  const brainPreference = (p) => p.brains === profile.brains;
  const speciesPreference = (p) => {
    if (profile.prefersZombie && p.species === "Zombie") return true;
    if (profile.prefersHuman && p.species === "Human") return true;
    if (profile.prefersHalfbie && p.species === "Halfbie") return true;
    return false;
  };
  const filter = profiles.filter(
    (p) => brainPreference(p) && speciesPreference(p) && removeSelf(p) && notInDisliked(p) && notInLiked(p)
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

  const handleDisliked = async (profileId, potentialMatch) => {
    const res = await profileService.disliked(profileId, potentialMatch._id)
    console.log("MY UPDATED PROFILE", res)
    props.setProfile(res)
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
              <DateCard potentialMatch={p} handleLiked={handleLiked} handleDisliked={handleDisliked} profile={profile} />
            
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
