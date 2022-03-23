import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  display:none;
  @media (max-width:779px){
    display:fixed;
    z-index:10;
    padding-top:10px;
    margin-left:75%;
  }
   @media (max-width:600px){
    display:fixed;
    z-index:10;
    padding-top:10px;
    margin-left:72%;
  }
  @media (max-width:548px){
      padding-top:0px;
      margin-left:69%;
  }
  @media (max-width:489px){
      padding-top:0px;
      margin-left:64%;
  }
  @media (max-width:345px){
      padding-top:0px;
      margin-left:70%;
  }
`
export const HamburgerImgIcon = styled.img`
  width:50px;
  margin-top:22px;
  float:right;

  @media (max-width:556px){
    width:40px;
    margin-top:27px;
    margin-right:25px;
  }
  @media (max-width:539px){
    margin-right:8px;
  }
  @media (max-width:400px){
    width:40px;
    margin-right:10px;
  }
  @media (max-width:329px){
    margin-right:20px;
  }
  @media (max-width:300px){
    width:35px;
    margin-top:28px;
    margin-right:40px;
  }

`