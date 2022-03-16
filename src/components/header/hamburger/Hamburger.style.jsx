import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  display:none;
  @media (max-width:779px){
    display:fixed;
    z-index:10;
    padding-top:10px;
    margin-left: 10px;
    margin-left:0%;
  }
  @media (max-width:548px){
      padding-top:0px;
  }
`
export const HamburgerImgIcon = styled.img`
  width:50px;
  margin-top:22px;
  margin-left:66%;
  @media(max-width:728px){
    margin-left:66%;
  }
  @media(max-width:649px){
    margin-left:62%;
  }
  @media (max-width:588px){
     padding-top:20px;
     margin-top:0px;
    margin-left:61%;
   }
   @media (max-width:500px){
     margin-left:59%;
     padding-top:22px;
   }
   @media (max-width:445px){
     margin-left:56%;
   }
   @media (max-width:405px){
     width:40px;
     padding-top:25px;
     margin-left:57%;
   }
  @media (max-width:329px){
    margin-left:54.5%;
  }
  @media(max-width:300px){
      width:35px;
      padding-top:26px;
      margin-left:60%;
  }


`