import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Logo from "../../assets/zombieapp-logo.png";
import { Typography, Button } from "@mui/material";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import { Link } from "react-router-dom";

const DateCard = ({ profile, handleLiked, handleDisliked, potentialMatch }) => {

  return (
    <div className="date-cards">
    <Card sx={{ maxWidth: 345, marginTop: "200px" }}>
      <CardMedia component="img" height="140" image={Logo} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link
            to={`/profiles/${potentialMatch._id}`}
          >
            {potentialMatch.name}
          </Link>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {potentialMatch.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {potentialMatch.bio}
        </Typography>
      </CardContent>
      <CardActions>
          <Button size="small" onClick={() => handleLiked(profile._id, potentialMatch)}>
            <ThumbUpAltRoundedIcon />
          </Button>
        <Button size="small" onClick={() => handleDisliked(profile._id, potentialMatch)}>
          <ThumbDownRoundedIcon />
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default DateCard;
