import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  display:none;
  @media (max-width:770px){
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
  margin-top:25px;
  @media (max-width:548px){
     padding-top:25px;
     margin-top:0px;
   }
   @media (max-width:400px){
     width:40px;
     padding-top:25px;
   }
  @media(max-width:300px){
      width:35px;
      padding-top:30px;
  }


`