
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import saleswoman from '../../../assets/StoriesAvatars/saleswoman.png'
import image from '../../../assets/ExplorePics/explorePic10.webp'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Container } from '@mui/material';
export default function RecipeReviewCard({name,body,urlPhoto}) {
  return (
    <Container style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"30px",marginBottom:"20px"}}>
    <Card sx={{ maxWidth: 450 ,bgcolor:"black" , color:"white" }}>
      <CardHeader
        avatar={
            <div style={{
     
                display:"flex",
               
                justifyContent:"center",
                
                alignItems:"center"}}> 
              <Avatar alt="Remy Sharp" src={saleswoman} style={{ border:"1px solid rgb(60, 221, 255)", padding:"2px"}}  />
              <span style={{marginLeft:"10px"}}>{name}</span>
              </div>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon sx={{color:"white"}} />
          </IconButton>
        }
     
        
      />
      <CardMedia
        component="img"
        height="350"
        width="450"
        image={`${urlPhoto}` }
        alt="post photo"
        style={{ width: '450px'}}
      />
       <CardActions style={{display:"flex", justifyContent:"space-between"}} disableSpacing>

         
          <div>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color:"white"}} />
        </IconButton>
        <IconButton >
          <ModeCommentOutlinedIcon  sx={{color:"white"}}/>
        </IconButton>
        </div>
        <div>
        <IconButton><TurnedInNotIcon sx={{color:"white"}}/></IconButton>
        </div>
        
      </CardActions>
      <span style={{display:"flex" , marginLeft:"15px"}}>700 likes</span>
      <CardContent>
        <Typography variant="body2" color="white" >
          <h4 style={{padding:"0",margin:"0" , marginBottom:"5px"}}>{name}</h4>
          {body}
        </Typography>
      </CardContent>
     
      
    </Card>
    </Container>
  );
}