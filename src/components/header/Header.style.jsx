import styled from 'styled-components';

export const Header_container = styled.div`
  display:flex;
  flex-direction: row;
  width:100%;
  justify-content:space-between;
  padding-left:13%;
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
  @media (max-width:480px){
    width:80%;
    margin-left:5%;
    padding-bottom:10px;
    margin-top: 10px;
  }
  
 

`
export const Header_logo = styled.img`
  width:60px;
  padding-top:30px;
  @media (max-width:400px){
    width:100px;
  }
   @media (max-width:767px){
     width:100px;
   }

`
export const Header_Wrapper_first = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  flex-wrap:nowrap;
  width:50%;
  margin-left:35%;
  margin-top:30px;
  color:whitesmoke;
  @media (max-width:1265px){
    margin-left:12%;
    width:60%;
    justify-content:space-around;
  }
  @media (max-width:829px){
    width:70%;

  }
   @media (max-width:771px){
    width:60%;
    flex-wrap: wrap;
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
  font-size:1.2rem;
  padding:10px;
  text-decoration:none;
  &:hover{
    border:1px solid skyblue;
    color:whitesmoke;
  }
`