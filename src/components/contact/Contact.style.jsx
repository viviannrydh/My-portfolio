import styled from 'styled-components';
export const ContactContainer = styled.div`
  width:60%;
  display:flex;
  flex-direction:column;
  margin-left:20%;
  margin-top:12%;
  margin-bottom: 10%;
  @media (max-width:1355px){
      width:80%;
      margin-left:10%;
      margin-top:7%;
      margin-bottom:20%;
  }
  @media (max-width:1033px){
      width:80%;
      margin-left:10%;
      margin-top:3%;
  }
  @media (max-width:829px){
    width:80%;
    margin-left:10%
  }
  @media(max-width:770px){
    flex-direction: column;
    width:80%;
    margin-left:10%;
  }
   @media (max-width:746px){
       width:80%;
       display:flex;
       flex-direction:column;
       margin-left:10%;
    }
    @media(max-width:606px){
        width:80%;
        margin-left:10%;
        margin-bottom:20%;
    }
     @media(max-width:548px){
       width:80%;
       margin-left:10%;
    }

`
export const Title = styled.h1`
  color: whitesmoke;
  font-size:1.8rem;
  @media(max-width:548px){
    font-size:1.4rem;
  }
   @media(max-width:400px){
    font-size:1.3rem;
  }
   @media(max-width:300px){
     font-size:1rem;
   }
`
export const ContactWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  border:2px ridge skyblue;
  padding:30px;
  @media(max-width:548px){
    flex-direction:column;
    justify-content:space-between;
    text-align:center;
    width:80%;
    margin-left:0%;
  }
   @media(max-width:300px){
     margin-left: -5%;
   }

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
  @media(max-width:548px){
    width:100%;
    margin-top: 10%;
  }
  @media(max-width:400px){
    width:100%;
  }
`
export const ContactItem = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  text-align:center;
  font-size:1.2rem;
  @media(max-width:548px){
    font-size: 1rem;
    justify-content:flex-start;
    margin:10px;
  }
  @media(max-width:400px){
    font-size:0.9rem;
  }
   @media(max-width:300px){
     font-size:0.8rem;
   }
`
export const ContactIconBtn = styled.button`
  width:38px;
  height:38px;
  border-radius:50%;
  margin-right: 15px;
  background-color:whitesmoke;
  border:none;
  text-align:center;
  @media(max-width:548px){
    width:30px;
    height:30px;
  }
   @media(max-width:300px){
     width:20px;
    height:20px;
   }
`
export const ContactText = styled.span`
  padding-top:8px;

`
export const ContactItemIcons = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
`