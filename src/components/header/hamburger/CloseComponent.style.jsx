import styled from 'styled-components';

export const CloseIcon = styled.img`
  width:50px;
  margin-top:30px;
   @media (min-width:770px){
      display:none;
    }
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