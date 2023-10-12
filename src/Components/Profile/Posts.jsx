
import { Button, Container, ImageList, ImageListItem, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Post.css'; 
import DehazeIcon from '@mui/icons-material/Dehaze';
export default function Posts() {
  const token = localStorage.getItem('token');
  const [posts, setPosts] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  async function Delete(id){
    console.log(id);
   await axios.delete(`http://16.170.173.197/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  
    
    setAnchorEl(null);
  }
  const handleClose = () => {
    
  };
  useEffect(() => {
    axios
      .get(`http://16.170.173.197/posts/${localStorage.getItem('myID')}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
       
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [Delete]);
 
  return (
    <Container maxWidth={'sm'}>
      <ImageList sx={{ width: '100%', height: '96%' }} cols={3} space={5}>
        {posts.map((item,index) => (
          <div key={index} className="image-container">
            <div className="hover-div">
            <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DehazeIcon style={{color:"white"}}/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=>Delete(item.id)}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>

      </Menu>
           </div>
            </div>
            <ImageListItem >
              <img style={{ height: '200px' }} src={item.image} alt="myPost" />
            </ImageListItem>
          </div>
        ))}
      </ImageList>
    </Container>
  );
}
