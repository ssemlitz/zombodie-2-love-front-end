import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Logo from "../../assets/zombieapp-logo.png";
import { Typography, Button } from "@mui/material";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import "./DateCard.css";





const DateCard = ({ profile, handleLiked, handleDisliked, potentialMatch }) => {
  console.log(potentialMatch)

  return (
    <main className="body">
      <div className="date-cards">
      <Card sx={{ maxWidth: 345, marginTop: "200px" }} style={{backgroundColor: "#28706C"}}>
        <CardMedia component="img" height="140" image={Logo} alt="" />
        <CardContent >
          <Typography sx={{ color: "#FFE8E2" }} gutterBottom variant="h5" component="div">
            <button className="btn">
            <Link state={potentialMatch} className="link"
                  to={`/profiles/${potentialMatch._id}`}
                  >
                    {potentialMatch.name}
            </Link>
            </button>
          </Typography>
          <Typography sx={{ color: "#FFE8E2" }} gutterBottom variant="h5" component="div">
            {potentialMatch.age}
          </Typography>
          <Typography variant="body2" sx={{ color: "#FFE8E2" }}>
            {potentialMatch.bio}
          </Typography>
        </CardContent>
        <CardActions >
            <Button sx={{ color: "#FFE8E2" }} size="large" onClick={() => handleLiked(profile._id, potentialMatch)}>
              <FavoriteIcon />
            </Button>
          <Button sx={{ color: "#FFE8E2" }} size="large" onClick={() => handleDisliked(profile._id, potentialMatch)}>
            <ThumbDownRoundedIcon />
          </Button>
        </CardActions>
      </Card>
      </div>
    </main>
  );
};

export default DateCard;
