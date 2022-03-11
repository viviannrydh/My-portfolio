import styled from 'styled-components';

export const Header_container = styled.div`
  display:flex;
  flex-direction: row;
  width:87.8%;
  justify-content:space-between;
  padding-left:12%;
  margin-top:0px;
  padding-top:5px;
  position:fixed;
  background-color:rgb(32, 32, 33);
  padding-bottom:30px;
  border-bottom:0.5px solid rgba(49, 51, 52, 1);
 
  @media (max-width:1265px){
    justify-content: space-around;
    width:100%;
  }
  @media (max-width:770px){
   width:100%;
   justify-content:space-between;
   margin-left: 0%;
  }
  @media (max-width:548px){
    padding-bottom:0px;
    padding-top:10px
  }
  @media (max-width:480px){
    width:80%;
    margin-left:5%;
    padding-bottom:10px;
    margin-top: 0px;
  }
  @media(max-width:415px){
    margin-top:-30px;
  }
  @media(max-width:300px){
    margin-top:-30px;
  }
`
export const Header_logo = styled.img`
  width:60px;
  padding-top:30px;
  margin-right:10%;
 
   @media (max-width:767px){
     width:60px;
   }
   @media (max-width:548px){
     padding-top:25px;
   }
    @media (max-width:400px){
     width:50px;
     padding-top:25px;
   }
   @media(max-width:300px){
     width:40px;
     padding-top:30px;
     
   }

`
export const Header_Wrapper_first = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  flex-wrap:nowrap;
  width:60%;
  margin-left:38%;
  margin-top:30px;
  color:whitesmoke;
  @media(max-width:1390px){
    width:55%;
    margin-left:10%;
  }
  @media (max-width:1288px){
    margin-left:12%;
    width:60%;
    justify-content:space-around;
  }
  @media(max-width:1033px){
    width:70%;
    margin-left:1%;
  }
  @media (max-width:829px){
    width:70%;
    margin-left:0%;
   
  }
   @media (max-width:775px){
    width:70%;
    margin-left:0%;

    justify-content:center;
   }
  @media (max-width:770px){
    display:none
  }
    
`
export const HamburgerMenuWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:30%;
`
export const HamburgerHeaderWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:100px;
`
export const Header_Links = styled.a`
  color:whitesmoke;
  font-size:1.1rem;
  padding:10px;
  text-decoration:none;
  &:hover{
    border:1px solid skyblue;
    color:whitesmoke;
  }
`

export const HeaderLinkHref = styled.a`
  color:whitesmoke;
  text-decoration:none;
`