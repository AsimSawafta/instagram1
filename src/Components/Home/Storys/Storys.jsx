
import Stack from '@mui/material/Stack';
import driver from '../../../assets/StoriesAvatars/driver.png'
import farmer from '../../../assets/StoriesAvatars/farmer-avatar.png'
import female from '../../../assets/StoriesAvatars/female-chef.png'
import flight from '../../../assets/StoriesAvatars/flight-attendant.png'
import graduated from '../../../assets/StoriesAvatars/graduated-student.png'
import saleswoman from '../../../assets/StoriesAvatars/saleswoman.png'
import Story from './Story';
export default function ImageAvatars() {
  return (

    <Stack style={{marginTop:"20px"  , color:"white" ,borderBottom:"1px solid rgb(53, 53, 53) " , paddingBottom:"10px",width:"100%"}} direction="row" spacing={2}>
     <Story  photo={driver} name={"asim"}/>
     <Story  photo={farmer} name={"asim"}/>
     <Story  photo={female} name={"asim"}/>
     <Story  photo={flight} name={"asim"}/>
     <Story  photo={graduated} name={"asim"}/>
     <Story  photo={saleswoman} name={"asim"}/>
     <Story  photo={driver} name={"asim"}/>
     <Story  photo={driver} name={"asim"}/>
    </Stack>
    
  );
}