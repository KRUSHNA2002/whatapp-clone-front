
import { useContext } from "react";
import { useState } from "react";

import {Box , styled} from '@mui/material';
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as MessageIcon } from '@mui/icons-material';
import DataUsageIcon from '@mui/icons-material/DataUsage';

// components

import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";


const Component=styled(Box)`

  height:45px;
  padding:8px 16px;
  background-color:#f2f2f0;
  display:flex;
  align-item:center;

`

const Wrapper=styled(Box)`

 margin-left:auto;

 & > * {
   margin-left:8px;
   padding:8px;
   color:black;
 }

 & :first-child{

    margin-right:8px;
    font-size:22px;
 }
  
`

const Image=styled('img')
({
    height:40,
    width:40
})


const Header = () =>{

    const {account} =useContext(AccountContext);

  const [openDrawer,setOpenDrawer]=useState(false);
  
  const toggleDrawer=()=>{
    setOpenDrawer(true);
  }

    return(
       <Component>
         <Image src={account.picture} alt="" style={{borderRadius:'50%'}} onClick={()=>toggleDrawer()} />
        <Wrapper>
            <DataUsageIcon/>
            <MessageIcon/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            <InfoDrawer open={openDrawer} setopen={setOpenDrawer}/>
        </Wrapper>
       </Component>
    );
}

export default Header;