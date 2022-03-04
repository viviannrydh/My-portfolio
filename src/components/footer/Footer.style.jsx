import styled from 'styled-components';

export const FooterWrapper = styled.div`
  color:whitesmoke;
  text-align:center;
  font-family:fantastic;
  font-size:1.2rem;
  margin-bottom: 15%;
  @media (max-width:1355px){
      width:58%;
      text-align:center;
      margin-left:30%;
  }
  @media (max-width:1033px){
    margin-left:38%;
  }
  @media (max-width:899px){
    margin-left:42%;
  }
  @media(max-width:770px){
    margin-left:80%;
  }
   @media(max-width:415px){
     width:90%;
     margin-left:90%;
   }
  
`