import { Container, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import img1 from '../../assets/ExplorePics/explorePic1.avif'
import img2 from '../../assets/ExplorePics/explorePic2.avif'
import img3 from '../../assets/ExplorePics/explorePic3.avif'
import img4 from '../../assets/ExplorePics/explorePic4.avif'
import img5 from '../../assets/ExplorePics/explorePic5.avif'
import img6 from '../../assets/ExplorePics/explorePic6.avif'

const itemData = [img1,img2,img3,img4,img5,img6];

export default function Posts() {
  return (
    <Container maxWidth={"sm"} >
      <ImageList sx={{ width: "100%", height: "96%" }} cols={3} space={3} >
{itemData.map((item)=>{
  return (
   <ImageListItem>
   <img
     style={{height:"200px"}}
     src={item}
     alt="explore"
     
   />
   
 </ImageListItem>)
})}
</ImageList>
    </Container>
  )
}