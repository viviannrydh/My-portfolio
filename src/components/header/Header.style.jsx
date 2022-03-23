import styled from 'styled-components';

export const Header_container = styled.div`
  display:flex;
  flex-direction: row;
  width:87.8%;
  justify-content:space-between;
  padding-left:5%;
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
  @media (max-width:779px){
   width:80%;
   justify-content:space-between;
   margin-left: 5%;
  }
  @media (max-width:548px){
    padding-bottom:0px;
    padding-top:10px;
    margin-left: 2%;
  }
  @media (max-width:480px){
    width:85%;
    margin-left:0%;
    padding-bottom:10px;
    margin-top: 0px;
  }
  @media(max-width:415px){
    margin-top:-30px;
  }
  @media(max-width:329px){
    width:80%;
  }
  @media(max-width:300px){
    width:80%;
    margin-top:-30px;
  }
`
export const Header_logo = styled.img`
  width:60px;
  padding-top:30px;
 
   @media (max-width:767px){
     width:60px;
     margin-left:35%;
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
  width:500%;
  margin-left:20%;
  margin-top:30px;
  color:whitesmoke;
  @media(max-width:1390px){
    width:280%;
    margin-left:8%;
  }
  @media (max-width:1288px){
    margin-left:9%;
    width:250%;
    justify-content:space-between;
  }
  @media(max-width:1033px){
    width:320%;
    margin-left:10%;
  }
  @media (max-width:945px){
    width:350%;
    margin-left:10%;
  }
   @media (max-width:896px){
    width:500%;
    margin-left:8%;
    justify-content:space-between;
   }
  @media (max-width:779px){
    display:none
  }
    
`
export const HamburgerMenuWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    padding-left:15%;
    @media(max-width:310px){
      width:100%;
    }
`
export const HamburgerHeaderWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:80%;
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
  @media (max-width:829px){
    font-size:1rem;
  }
`

export const HeaderLinkHref = styled.a`
  color:whitesmoke;
  text-decoration:none;
`