import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Container } from '@mui/material'
import img1 from '../../../assets/WhatsApp Image 2023-10-06 at 12.46.31_5690597c.jpg'
import axios from 'axios'
import Modal from '../../Modal/Modal'
export default function Posts() {
  
  const token = localStorage.getItem("token")
  const[posts,setPosts]= useState([])

  useEffect(()=>{

    axios.get("http://16.170.173.197/posts",{
      headers: {
        Authorization:`Bearer ${token}`,
      },
    }).then((response)=>{
        // console.log(response.data.posts)
      setPosts(response.data.posts);
    }).catch((error)=>{
      console.error(error)
    })
    

  },[posts])




  return (
    <div  >
        <Container>
          <Post name={"asim sawafta"} body={"لا اله الا انت سبحانك اني كنت من الظالمين"} urlPhoto={img1} />
        {
         posts?posts.map((posts ,index)=><Post key={index} id={posts.id} title={"asim"} name={posts.user.userName} body={posts.description} urlPhoto={posts.image}/>
          ):""
        }
        <Modal data={setPosts}/>
        </Container>
    </div>
  )
}
  