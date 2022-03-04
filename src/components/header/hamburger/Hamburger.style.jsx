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
`
export const HamburgerImgIcon = styled.img`
  width:80px;
  margin-top:25px;

`