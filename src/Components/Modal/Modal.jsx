
// import React, { useEffect, useRef, useState } from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   border: "1px solid #1D1D1D",
//   borderRadius: 5, 
//   boxShadow: 24,
//   p: 4,
//   color: "white",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "start",
//   bgcolor: "#1D1D1D",
//   ansition: "5s"
// };


// export default function MyModal({openModal ,close}) {

//     const [title,setTitle]= useState("");
//     const [body, setbody]= useState("");
    
//     const [post, setPost]=useState([]);
    


//     function postIt(){
//         setPost([...post,{title:title, body:body}]);
//         localStorage.setItem("post",JSON.stringify([...post,{title:title, body:body}]))
//         close();
//     }
    
//     useEffect(()=>{
//         if(localStorage.getItem("post")){
//           setPost(JSON.parse(localStorage.getItem("post")))
//         }
        
//          },[])

//   const modalRef = useRef(null);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//        close()
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);




//   return (
//     <div >
//       <Modal
//         open={openModal}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style} ref={modalRef}>
//           <Typography
//             sx={{ marginBottom: 3 }}
//             variant="h6"
//             component="h2"
//           >
//             create a new post
//           </Typography>
//           <form action="">
//           <label style={{ marginBottom: "5px" }}>title</label>
//           <input
//             style={{
//               width: "100%",
//               height: "25px",
//               borderRadius: "10px",
//               marginBottom: "15px",
//               backgroundColor: "#4D4D4D",
//               border: "1px solid #FFFFFF",
//               color: "white"
              
//             }}
//             onChange={(e) =>setTitle(e.target.value)}
//           />
//           <label style={{ marginBottom: "5px" }}>Body</label>
//           <textarea
//             style={{
//               width: "100%",
//               borderRadius: "10px",
//               height: "90px",
//               marginBottom: "15px",
//               backgroundColor: "#4D4D4D",
//               border: "1px solid #FFFFFF",
//               color: "white"

//             }}
//             onChange={(e) =>setbody(e.target.value)}
//          />
//                 <div style={{backgroundColor:"red",width:"200px",height:"200px"}}>
                  
//                   </div>      
//                   <Button
//             onClick={() => postIt()}
//             variant="contained"
//             sx={{ width: "50%", borderRadius: "20px", margin: "0 auto" }}
//           >
//             Post
//           </Button>
//           <Button
//             onClick={() => postIt()}
//             variant="contained"
//             sx={{ width: "50%", borderRadius: "20px", margin: "0 auto" }}
//           >
//             Post
//           </Button>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// ...


import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

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
  alignItems: "center", // Center everything horizontally and vertically
  bgcolor: "#1D1D1D",
  transition: "5s",
};

const buttonStyle = {
  width: "50%",
  borderRadius: "20px",
  margin: "10px 0", // Add space between the buttons vertically
};

export default function MyModal({ openModal, close ,setPosts}) {
  let formData=new FormData()


  const token = localStorage.getItem("token");
  const [description, setdescription] = useState("");
  
  const [imgCovered, setImgCovered] = useState(null);
  const [img,setImg]=useState(null)
  
  
  function postIt(e) {
    e.preventDefault();
    axios.post("http://16.170.173.197/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }).then((response) => {
      // console.log( response)
      setPosts((post) => [...post, response.data])
    }).catch((error) => {
      console.log(error)
    })
    close()
    setImgCovered(null)
    setImg(null)
    setdescription("")
  }


  const handledescriptionChange = (event) => {
    setdescription(event.target.value);
  };

 
  formData.append("description", description)
  formData.append("image", img)
  

const handleImagechange = (e) => {
const file=e.target.files[0];
setImg(file)
const reader = new FileReader();
reader.onload = () =>{
setImgCovered(reader.result)
}
reader.readAsDataURL(file)
}


  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        close();
        setImg(null)
        setImgCovered(null)
        setdescription("")
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
          <Typography sx={{ marginBottom: 3 }} variant="h6" component="h2">
            Create a new post
          </Typography>
          <form action="">
           <p style={{margin:"4px 0" ,fontSize:"13px"}}>Body</p>
          <label style={{ marginBottom: "5px" }}>
            <textarea
              style={{
                width: "300px",
                borderRadius: "10px",
                height: "90px",
                marginBottom: "15px",
                backgroundColor: "#4D4D4D",
                border: "1px solid #FFFFFF",
                color: "white",
              }}
              value={description}
              onChange={handledescriptionChange}
              
            />
            </label>
            {img?<div style={{ backgroundColor: "red", width: "150px", height: "150px", margin: "0 auto" }}>
              <img style={{width:"100%",height:"100%"}} src={imgCovered} alt="postPhoto" />
            </div>:<></>}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              
            <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="div"
              sx={buttonStyle }
              style={{padding:"5px 50px"}}
            >
            Image
            </Button>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={(event) =>handleImagechange(event)}
            style={{ display: "none" }}
          />
              <Button
              type="submit"
                onClick={ postIt}
                variant="contained"
                sx={buttonStyle}
              >
                Post
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

