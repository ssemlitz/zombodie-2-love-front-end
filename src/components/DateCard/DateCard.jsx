import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Logo from "../../assets/zombieapp-logo.png";
import { IconButton, Typography, Button } from "@mui/material";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import { useState } from "react";
import { Link } from "react-router-dom";

const DateCard = ({ profile, handleLiked, handleDisliked, potentialMatch }) => {
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);

  // const handleLiked = async () => {
  //   handleLiked(profile._id, likedId);
  // };

  // const handleDisliked = () => {
  //   console.log("Disliked!");
  // };

  return (
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
        <IconButton>
          <Button size="small" onClick={() => handleLiked(profile._id, potentialMatch)}>
            <ThumbUpAltRoundedIcon />
          </Button>
        </IconButton>
        <Button size="small" onClick={() => handleDisliked(profile._id, potentialMatch)}>
          <ThumbDownRoundedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default DateCard;
