import React from 'react'
import Avatar from '@mui/material/Avatar';

// import driver from '../../assets/StoriesAvatars/driver.png'
export default function Story({photo, name}) {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"}}> 
      <Avatar alt="Remy Sharp" src={photo} style={{ border:"1px solid rgb(60, 221, 255)", padding:"10px"}}  />
      <span>{name}</span>
      

      
      </div>
     
  )
}
