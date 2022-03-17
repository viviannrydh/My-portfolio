import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  display:none;
  @media (max-width:779px){
    display:fixed;
    z-index:10;
    padding-top:10px;
    margin-left:0%;
    float:right;
  }
  @media (max-width:548px){
      padding-top:0px;
  }
`
export const HamburgerImgIcon = styled.img`
  width:50px;
  margin-top:22px;
  float:right;
  @media (max-width:400px){
    width:40px;
  }
  @media (max-width:300px){
    width:35px;
    margin-top:28px;
  }

`