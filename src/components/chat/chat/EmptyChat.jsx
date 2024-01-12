import {Box ,Typography,styled,Divider} from '@mui/material';



const Image=styled('img')
({
    width:'400px ',
    marginTop:50
})

const SubTitle=styled(Typography)
`
  font-size:14px;
  color:#667781;
  font-family:inherite;
  font-weight:400
`

const Title=styled(Typography)
`
  font-size:32px;
  margin:25px 0px 10px 0px;
  font-family:inherit;
  font-weight:300;
  color:#41525d;
`

const Component=styled(Box)`
 background:#f8f9fa;
 padding:30px 0px;
 text-align:center;
 height:100vh;
 
`

const Container=styled(Box)
`
  padding:0px 200px;
`

const SubDivider=styled(Divider)
`
   margin:35px 0px;
   opacity:0.4;
`
const EmptyChat = () => {
return(
    <Component>
        <Container>
            <Image src='https://static.whatsapp.net/rsrc.php/v3/yR/r/y8-PTBaP90a.png' alt="image" />
            <Title>WhatApp Web</Title>
            <SubTitle>Now send and receved messages without keeping your phone online .</SubTitle>
            <SubTitle>Used whatapp on up to the 4 linked devices and 1 phone at the same time .</SubTitle>

            <SubDivider/>
        </Container>
    </Component>
);
}

export default EmptyChat;