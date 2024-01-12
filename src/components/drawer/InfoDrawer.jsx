import {Drawer , Typography,Box , styled} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';


const Header=styled(Box)`

   background-color:#008069;
   color:#ffffff;
   height:107px;
   display:flex;

   & > svg ,& > p {

     padding:15px;
     margin-top:auto;
     font-weight:700
   }

`
const Component=styled(Box)`

 background:#ededed;
 height:85%;
`
const InfoDrawer=({open,setopen})=>{

    const drawerstyle={

        top:30,
        left:22,
        height:'90%',
        width:'30%',
        boxShadow:'none'
    }
    const handleClose=()=>{
       
        setopen(false)
    }
    return(

      <Drawer
       open={open}
       onClose={handleClose}
       PaperProps={{sx:drawerstyle}}
       style={{zIndex:1500}}
      >
        <Header>
            <ArrowBack onClick={()=>setopen(false)}/>
            <Typography>Profile</Typography>
        </Header>
        <Component>
           <Profile/>
        </Component>

      </Drawer>
    );
}
export default InfoDrawer;