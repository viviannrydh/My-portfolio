import styled from 'styled-components';
export const ContactContainer = styled.div`
  width:60%;
  display:flex;
  flex-direction:column;
  margin-left:20%;
  margin-top:12%;
  margin-bottom: 10%;
  @media (max-width:1355px){
      width:90%;
      margin-left:15%;
      margin-top:7%;
      margin-bottom:20%;
  }
  @media (max-width:1033px){
      width:100%;
      margin-left:15%;
      margin-top:3%;
  }
  @media (max-width:829px){
    width:100%;
    margin-left:20%
  }
  @media(max-width:770px){
    flex-direction: column;
    width:100%;
    margin-left:25%;
  }
   @media (max-width:746px){
       width:100%;
       display:flex;
       flex-direction:column;
       margin-left:15%;
    }
    @media(max-width:606px){
        width:100%;
        margin-left:25%;
        margin-bottom:20%;
    }
     @media(max-width:548px){
       width:160%;
       margin-left:22%;
    }
     @media(max-width:415px){
         margin-left:35%;
     }
  @media(max-width:400px){
    width:200%;
    margin-left: 40%;
  }
`
export const Title = styled.h1`
  color: whitesmoke;
`
export const ContactWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  border:5px ridge skyblue;
  padding:30px;

`
export const ContactInfoDiv = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  text-align:flex-start;
  color:whitesmoke;
`
export const MapImage = styled.img`
  width:55%;
`
export const ContactItem = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  text-align:center;
  font-size:1.2rem;
`
export const ContactIconBtn = styled.button`
  width:38px;
  height:38px;
  border-radius:50%;
  margin-right: 15px;
  background-color:whitesmoke;
  border:none;
  text-align:center;
`
export const ContactText = styled.span`
  padding-top:8px;

`