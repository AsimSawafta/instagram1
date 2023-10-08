
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import img from "../../assets/instagram-logo.png"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
const style = {

  width: 350,
  border: "1px solid #1D1D1D",
  borderRadius: 5, 
  boxShadow: 24,
  p: 4,
  color: "white",
  flexDirection: "column",
  bgcolor: "#1D1D1D",
  height:"55%",
  marginBottom:"0",
 
};
const style2 = {
    width: 370,
    border: "1px solid #1D1D1D",
    borderRadius: 5, 
    boxShadow: 24,
    marginTop:"20px",
    padding:3,
    color: "white",
    flexDirection: "column",
    bgcolor: "#1D1D1D",
    alignItems:"center",
    justifyContent:"center",
    
  };


export default function MyModal() {

  return (
    <div style={{width:"100%", height:"100vh",display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center" }}>  
        <Box sx={style} style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}} >
        <img src={img} alt="insta" width={"55%"} style={{marginBottom:"25px"}} />
          
          
          
            

         
          
          <input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "5px",
              marginBottom: "18px",
              placeHolder: "Email",
              border: "1px solid #FFFFFF",
              
              
            }}
            placeHolder={"Mobile Number or Email"}
          />
        
        <input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "5px",
              marginBottom: "18px",
             
              border: "1px solid #FFFFFF",
              
              
            }}
            placeHolder={"Password"}
          />
          <Button
            
            variant="contained"
            sx={{ width: "107%", borderRadius: "10px",paddingLeft:"20px",paddingRight:"20px" ,marginTop:"10px" }}
          >
            LogIn
          </Button>
          <div className="or" style={{margin:"20px 0"}}>or</div>
          <Button variant="contained" style={{marginBottom:"25px" ,borderRadius:"10px",width:"100%", margin: "0 auto" }}>
           <FacebookOutlinedIcon style={{marginRight:"7px"}}/>
           Login with Facebook
            </Button>
          <Typography
            sx={{ marginTop:3,textAlign:"center" }}
            variant="h6"
            component="h6"
            fontSize={"14px"}
            width={"78%"}
            color={"rgb(149, 149, 149)"}
          >
           Forgot password?
          </Typography>
        </Box>
                
        
        <Box sx={style2} style={{color:"rgb(149, 149, 149)",display:"flex",marginBottom:"0",justifyContent:"center",alignItems:"center"}}><div>Don’t have an account?<span style={{color:"rgb(21, 101, 192)"}}> Sign Up?</span></div></Box>
         
    </div>
  );
}