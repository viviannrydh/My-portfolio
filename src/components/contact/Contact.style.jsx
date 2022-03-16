import styled from 'styled-components';
export const ContactContainer = styled.div`
  width:60%;
  display:flex;
  flex-direction:column;
  margin-left:20%;
  margin-top:12%;
  margin-bottom: 0%;
  text-align:center;
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
       margin-left:0%;
    }
    @media(max-width:606px){
        width:80%;
        margin-left:5%;
        margin-bottom:20%;
    }
    @media(max-width:425px){
       width:80%;
       margin-left:5%;

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

export const MyWish = styled.h4`
      color: whitesmoke;
      font-size: 1.1rem;
      font-weight:normal;
      width:90%;
      margin-left:2%;
      line-height:1.8rem;
      margin-bottom:5%;
      text-align:left;
  @media (max-width:746px){
    width:90%;
    margin-left:2%;
  }
  @media(max-width:545px){
     margin-left:2%;
     width:95%;
  }
  @media(max-width:425px){
    width:85%;
    margin-left:10%;
  }
  
  `
export const ContactWrapper = styled.div`
  width:80%;
  margin-left:10%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  text-align:center;
  padding:30px;
  @media(max-width:1400px){
    flex-direction:column;
    justify-content:space-between;
    text-align:center;
  }
  @media(max-width:1072px){
    width:100%;
    margin-left:0%;
  }

`
export const ContactInfoDiv = styled.div`
  display:flex;
  width:40%;
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
   @media(max-width:1072px){
    margin-bottom:10px;
  }
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
  color:rgba(242, 250, 251, 1);
  font-size:1rem;
    @media (max-width:389px){
      margin-left:-9%;
      justify-content:center;
      text-align:center;
      font-size:0.8rem;
    }
     @media (max-width:300px){
      font-size:0.7rem;
     }

`
export const ContactItemIcons = styled.div`
  width:95%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  margin-top:15%;
  border:1px solid skyblue;
   @media(max-width:548px){
    width:95%;
    margin-left:2%;
  }
  @media(max-width:425px){
    width:85%;
    margin-left:6%;
  }
`
export const ContactItemIconsFristLine = styled.div`
  display:flex;
  width:80%;
  flex-direction:column;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom:5%;
  color:whitesmoke;
  line-height:2.5rem;
  margin-left:10%;
  padding-left:25%;
  padding-top:5%;
  @media (max-width:992px){
    flex-direction: column;
    margin-left:6%;
    justify-content: space-between;
    margin-bottom:4%;
    line-height:2.8rem;
    text-align:center;
  }
   @media (max-width:689px){
     width:100%;
     margin-left:0%;
     font-size:1rem;
   }
   @media (max-width:548px){
     margin-left:-4%;
   }
    @media (max-width:455px){
      margin-left:-15%;
      font-size:0.6rem;
    }
    @media (max-width:300px){
      margin-left:-18%;
      justify-content:center;
    }
`
export const ContactItemIconsSecondLine = styled.div`
  width:40%;
  margin-left:30%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top:5%;
  margin-bottom:5%;
 
   @media (max-width:992px){
    justify-content: flex-start;
    margin-left:35%;
    margin-top:1%;
  }
  @media(max-width:789px){
    margin-left:30%;
    justify-content: space-between;
  }
  @media(max-width:548px){
    margin-left:35%;
    justify-content: space-between;
  }
  @media (max-width:455px){
      margin-left:30%;

    }
  @media (max-width:345px){
    margin-left:22%;
  }
`
export const ContactForm = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  width:95%;
  color:whitesmoke;
  @media(max-width:648px){
    width:97%;
  }
  @media(max-width:545px){
    width:100%;
    margin-left:0%;

  }
  @media(max-width:425px){
    width:86%;
    margin-left:5%;
  }
`
export const NameandEmail = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  @media (max-width:746px){
    flex-direction: column;
  }
`
export const NameInputItem = styled.input`
  width:47%;
  margin-right:3%;
  height:45px;
  margin:5px;
  background-color:rgba(41, 42, 43, 1);
  border:none;
  padding-left:15px;
  font-size:0.9rem;
  @media (max-width:746px){
    width:94%;
  }
  @media(max-width:545px){
    width:92%;
  }
`
export const EmailInputItem = styled.input`
  width:47%;
  margin-left:5%;
  height:45px;
  margin:5px;
  background-color:rgba(41, 42, 43, 1);
  border:none;
  padding-left:15px;
  font-size:0.9rem;
  @media (max-width:746px){
    width:94%;
  }
  @media(max-width:545px){
    width:92%;
  }
`
export const InputItem = styled.input`
  height:45px;
  margin:5px;
  background-color:rgba(41, 42, 43, 1);
  border:none;
  padding-left:15px;
  font-size:1.1rem;
  @media(max-width:425px){
    width:92%;
  }
`
export const MessageTextArea = styled.textarea`
  height:80px;
  margin:5px;
  background-color:rgba(41, 42, 43, 1);
  border:none;
  padding-left:15px;
  font-size:1.1rem;
  @media(max-width:425px){
    width:92%;
  }
`
export const SubmitInput = styled.input`
  height:45px;
  background-color:rgba(41, 42, 43, 1);
  border:1px ridge skyblue;
  margin:5px;
  color:skyblue;
  font-size:1.1rem;
  @media(max-width:425px){
    font-size:0.8rem;
    width:98%;
  }

`