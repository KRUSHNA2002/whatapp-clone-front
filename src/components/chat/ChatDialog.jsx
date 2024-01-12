import { Dialog , Box ,styled} from '@mui/material';
import React from 'react'

// Components

import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';


const Component =styled(Box)`
   
  display:flex;


`

const LeftComponent =styled(Box)`
   
  min-width:400px;

`
const RightComponent =styled(Box)`
   
   width:73%;
  min-width:300px;
  height:100%;
   border-left:1px solid rgba(0,0,0,0.14);

`

const dialogStyle={
    height:'96%',
    width:'100%',
    maxWidth:'100%',
    borderRadius:'0px',
    boxshadow:'none',
    overflow:'hidden',
}

 const ChatDialog =()=>{

    return(

        <Dialog
         open={true}
         PaperProps={{sx:dialogStyle}}
         hideBackdrop={true}
         maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                   <Menu/>
                </LeftComponent>
                <RightComponent>
                    <EmptyChat/>
                </RightComponent>
            </Component>

        </Dialog>
    );
 }

 export default ChatDialog;
