
import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "1px solid #1D1D1D",
  borderRadius: 5, 
  boxShadow: 24,
  p: 4,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  bgcolor: "#1D1D1D",
  ansition: "5s"
};

export default function MyModal({openModal ,close}) {

    const [title,setTitle]= useState("");
    const [body, setbody]= useState("");
    const [urlPhoto, setUrlPhoto]= useState("");
    const [post, setPost]=useState([]);
    


    function postIt(){
        setPost([...post,{title:title, body:body, urlPhoto:urlPhoto}]);
        localStorage.setItem("post",JSON.stringify([...post,{title:title, body:body, urlPhoto:urlPhoto}]))
        close();
    }
    
    useEffect(()=>{
        if(localStorage.getItem("post")){
          setPost(JSON.parse(localStorage.getItem("post")))
        }
        
         },[])

  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
       close()
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  return (
    <div>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} ref={modalRef}>
          <Typography
            sx={{ marginBottom: 3 }}
            variant="h6"
            component="h2"
          >
            create a new post
          </Typography>
          <label style={{ marginBottom: "5px" }}>title</label>
          <input
            style={{
              width: "100%",
              height: "25px",
              borderRadius: "10px",
              marginBottom: "15px",
              backgroundColor: "#4D4D4D",
              border: "1px solid #FFFFFF",
              color: "white"
              
            }}
            onChange={(e) =>setTitle(e.target.value)}
          />
          <label style={{ marginBottom: "5px" }}>Body</label>
          <textarea
            style={{
              width: "100%",
              borderRadius: "10px",
              height: "90px",
              marginBottom: "15px",
              backgroundColor: "#4D4D4D",
              border: "1px solid #FFFFFF",
              color: "white"

            }}
            onChange={(e) =>setbody(e.target.value)}
         />
          <label style={{ marginBottom: "5px" }}>image Url</label>
          <input
            style={{
              marginBottom: "20px",
              width: "100%",
              borderRadius: "10px",
              height: "25px",
              backgroundColor: "#4D4D4D",
              border: "1px solid #FFFFFF",
              color: "white"

            }}
            onChange={(e) =>setUrlPhoto(e.target.value)}
          />
          <Button
            onClick={() => postIt()}
            variant="contained"
            sx={{ width: "50%", borderRadius: "20px", margin: "0 auto" }}
          >
            Post
          </Button>
        </Box>
      </Modal>
    </div>
  );
}



