import { Dialog , Box , Typography,List,ListItem,styled} from "@mui/material";
import { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from 'jwt-decode';
import { AccountContext } from "../../context/AccountProvider";

import { addUser } from "../../services/Api";


const Component =styled(Box)
`
   display:flex;
`
const Container =styled(Box)
`
   padding: 50px 0px 50px 50px;
`

const QRCode = styled('img')({
    height:214,
    width:214,
    margin:'50px 0px 0px 50px',
})

const Title =styled(Typography)`

  font-size:20px;
  color:#525252;
  font-weight:300px;
  font-family:inherit;
  margin-bottom:25px;
`

const StyledList=styled(List)`

  & > li {
    padding: 0px;
    margin-top: 15px;
    font-size:14px;
    line-height:28px;
    color:black;
  }
`
const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width:'100%',
    maxwidth:'100%',
    maxheught:'100%',
    boxshadow:'none',
    overflow:'hidden'
}
const LoginDialog = ()=>{

  const {setAccount}=useContext(AccountContext);

  const onLoginSuccess= async(res)=>{
    const decoded=jwtDecode(res.credential);
    console.log(decoded);
    setAccount(decoded);
    await addUser(decoded);

  }

  const onLoginError=(res)=>{

    console.log("error",res);

  }

    return(
         <Dialog
           open={true}
           PaperProps={{sx:dialogStyle}}
           hideBackdrop={true}
         >
          <Component>
              <Container>
                  <Title>Use Whatapp in your Computer</Title>
                  <StyledList>
                    <ListItem>1. Open Whatapp on your Phone</ListItem>
                    <ListItem>2. Tap menu Setting and select whatapp web</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                  </StyledList>
              </Container>

              <Box style={{position:'relative',}}>
                    <QRCode src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="qr Code" />
                    <Box style={{position:'absolute',top:'50%',transform:'translateX(10%)',}}>
                       <GoogleLogin
                       
                         onSuccess={onLoginSuccess}
                         onError={onLoginError}
                         
                       />
                    </Box>
              </Box>
          </Component>
         </Dialog>
    )
}

export default LoginDialog;