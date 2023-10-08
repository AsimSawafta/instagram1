import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Container } from '@mui/material'
import img1 from '../../../assets/WhatsApp Image 2023-10-06 at 12.46.31_5690597c.jpg'

export default function Posts() {
  const [post,setPost]= useState(JSON.parse(localStorage.getItem("post")))


  useEffect(()=>{
    if(localStorage.getItem("post")){
      setPost(JSON.parse(localStorage.getItem("post")))
    }
    
     },[])

  return (
    <div  >
        <Container>
          <Post title={"asim sawafta"} body={"لا اله الا انت سبحانك اني كنت من الظالمين"} urlPhoto={img1} />
        {
         post?post.map((post)=><Post title={post.title} body={post.body} urlPhoto={post.urlPhoto}/>
          ):""
        }
        </Container>
    </div>
  )
}
