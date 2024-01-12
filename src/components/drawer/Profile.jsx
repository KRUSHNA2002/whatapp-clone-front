
import {Box , Typography, styled} from '@mui/material';

import { useContext } from 'react';

import { AccountContext } from '../../context/AccountProvider';


const ImageContainer=styled(Box)`

   display:flex;
   justify-content:center;

`

const Image=styled('img')
(
    {
        borderRadius:'50%',
        height:'100px',
        width:'100px',
        padding:'15px 0px'

    }
)

const BoxWrapper=styled(Box)`

   background:#ffffff;
   padding:12px 30px 2px;
   box-shadow:0px 1px 4px rgba(0 , 0 , 0 , 0.08);

   & :first-child{
    font-size:13px;
    color:#009688;
    font-weight:200;
   }
   & :last-child{
     margin:7px 0px;
     color:#4A4A4A;
     font-size:15px
   }

`
const Descriptioncontainer=styled(Box)`
  padding:15px 20px 28px 30px;

  & > p{
    font-size:13px;
    color:#8696a0;
  }

`
const Profile=()=>{

    const {account}=useContext(AccountContext);
    return(

        <>
           <ImageContainer><Image src={account.picture} alt="" /></ImageContainer>
           <BoxWrapper>
              <Typography>Your Name</Typography>
              <Typography>{account.name}</Typography>
           </BoxWrapper>
           <Descriptioncontainer>
            <Typography>This is not your username or pin .This name will be visible to your whatapp contact .</Typography>
           </Descriptioncontainer>
           <BoxWrapper>
              <Typography>About Us</Typography>
              <Typography>Working Time ? Not Disturb !</Typography>
           </BoxWrapper>
        
        </>
    );
}
export default Profile;