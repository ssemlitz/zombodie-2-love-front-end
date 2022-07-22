import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import "./DateCard.css";
import  ImgCard  from "../../assets/Zombodie2Love-1 (1).png"






const DateCard = ({ profile, handleLiked, handleDisliked, potentialMatch }) => {
  console.log(potentialMatch)

  return (
    <main className="body">
      <div className="card-img">
        <img src={ImgCard} alt="card-img"/>
      </div>
        <div className="date-cards">
          <div className="p-info">
            <div className="p-text">
              <h1 className="btn">
              <Link state={potentialMatch} className="link"
                    to={`/profiles/${potentialMatch._id}`}
                    >
                      {potentialMatch.name}
              </Link>
              </h1>
              <h2>
              {potentialMatch.age}
              </h2>
              <p> 
              {potentialMatch.bio}
              </p>

            </div>

          </div>
          <div className="btn-for-ld">
            <span>
              <button sx={{ color: "#FFE8E2" }} size="large" onClick={() => handleLiked(profile._id, potentialMatch)}>
                  <FavoriteIcon />
              </button>
            </span>

            <button sx={{ color: "#FFE8E2" }} size="large" onClick={() => handleDisliked(profile._id, potentialMatch)}>
                <ThumbDownRoundedIcon />
            </button>
          </div>
        </div>
    </main>
  );
};

export default DateCard;
