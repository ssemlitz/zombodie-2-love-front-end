import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Logo from '../../assets/zombieapp-logo.png'
import { IconButton, Typography, Button } from '@mui/material'
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';

const DateCard = ({profile}) => {
  return ( 
    <Card sx={{ maxWidth: 345, marginTop: "200px" }}>
      <CardMedia
        component="img"
        height="140"
        image={Logo}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {profile.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Button size="small">
            <ThumbUpAltRoundedIcon />
          </Button>
        </IconButton>
        <Button size="small">
          <ThumbDownRoundedIcon />
        </Button>
      </CardActions>
    </Card>

  )
}

export default DateCard