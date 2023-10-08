
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import instaImage from "../../assets/instagram-logo.png";
import {Avatar, List,ListItemButton,ListItemIcon,ListItemText,ListSubheader} from "@mui/material";
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import img from '../../assets/WhatsApp Image 2023-10-06 at 12.46.31_5690597c.jpg'
export default function IconsSide() {
  const [openModal, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false)
  }
console.log(openModal)
  return (
    <List 
      sx={{
        position: "sticky",
        borderRight:"1px solid rgb(53, 53, 53)",
        width: "100%",
        height: "100vh",
        maxWidth: 360,
        bgcolor: "black",
        color: "white",
        
        top:0,
    
        zIndex: 55,
    
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ backgroundColor: "black" }}
        >
          <img
            src={instaImage}
            alt="instagram"
            style={{
              backgroundColor: "black",
              width: "150px",
              marginTop: "10px",
            }}
          />
        </ListSubheader>
      }
    >
     <Link style={{textDecoration:"none", color:"white"}} to={""}>
      <ListItemButton>
       <ListItemIcon>{<HomeIcon style={{ color: "white" }} />}</ListItemIcon>
        <ListItemText primary="Home" />
        
      </ListItemButton>
      </Link>

      <Link style={{textDecoration:"none", color:"white"}} to={"Messages"}>
      <ListItemButton>
        <ListItemIcon>{<ChatIcon style={{ color: "white" }} />}</ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItemButton>
      </Link>

<Link to={"Explore"} style={{textDecoration:"none", color:"white"}}>
      <ListItemButton >
        <ListItemIcon>
          {<ExploreIcon style={{ color: "white" }} />}
        </ListItemIcon>
        <ListItemText primary="Explore" />
      </ListItemButton>
</Link>

      <ListItemButton >
        <ListItemIcon>{<SearchIcon style={{ color: "white" }} />}</ListItemIcon>
        <ListItemText primary="search" />
      </ListItemButton>


      <ListItemButton onClick={handleClick} >
        <ListItemIcon>
          {<AddCircleOutlineIcon style={{ color: "white" }} />}
        </ListItemIcon>
        <ListItemText primary="create" />
      </ListItemButton>
      
        <Modal openModal={openModal} close={closeModal}/>

      <ListItemButton >
        <ListItemIcon>
          {<SlideshowIcon style={{ color: "white" }} />}
        </ListItemIcon>
        <ListItemText primary="reals" />
      </ListItemButton>


      <ListItemButton >
        <ListItemIcon>
          {<FavoriteBorderIcon style={{ color: "white" }} />}
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItemButton>

      <Link style={{textDecoration:"none", color:"white"}} to={"Profile"}>
      <ListItemButton>
      <Avatar
          alt="Asim sawafta"
          sx={{ marginRight:3, width: 30, height:30  }}
          src={img}
          w
        />

        <ListItemText primary="Asim sawafta" />
        
      </ListItemButton>
      </Link>

      <ListItemButton
        onClick={handleClick}
        style={{ position: "absolute", bottom: "10px" }}
      >
        <ListItemIcon>{<MenuIcon style={{ color: "white" }} />}</ListItemIcon>
        <ListItemText primary="Menu" />
      </ListItemButton>


    </List>
  );
}

