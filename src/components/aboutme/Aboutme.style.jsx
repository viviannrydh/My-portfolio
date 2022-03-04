import styled from 'styled-components';
import keyframes from 'styled-components';


export const AboutmeContainer = styled.div`
  width:40%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align: flex-start;
  margin-left:30%;
  margin-top:0%;
  margin-bottom: 0%;
  @media (max-width:1355px){
      width:80%;
      flex-direction:column;
      margin-left:20%;
      margin-top:7%;
      margin-bottom:20%;
  }
  @media (max-width:1033px){
      width:90%;
      margin-left:25%;
      margin-top:0%;
  }
   @media (max-width:829px){
     margin-left:30%;
   }
  @media(max-width:770px){
    flex-direction: column;
    width:80%;
    margin-left:40%;
  }
   @media (max-width:746px){
       width:100%;
       margin-left:15%;
    }
    @media(max-width:606px){
        width:100%;
        margin-left:25%;
        margin-bottom:20%;
    }
     @media(max-width:548px){
       width:110%;
       margin-left:45%;
    }
     @media(max-width:415px){
      width:150%;
      flex-direction:column;
      text-align:flex-start;
      margin-left:51%;
      padding-top:10%;
      margin-bottom:50%;
     }
  @media (max-width:400px){
    width:180%;
    text-align: flex-start;
    margin-top:0%;
    margin-left:60%;
    margin-bottom: 70%;

  }
`
export const Title = styled.h1`
  color:whitesmoke;
`
export const AboutmeWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:flex-start;
`

// Here we create a component that will rotate everything we pass in over two seconds
export const SkillsImg = styled.img`
  width:200px;
`;

export const SelfIntroduction = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  color:white;
  font-size:1.25rem;
  line-height: 2rem;
`
export const SkillsList = styled.ul`
  width:70%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  list-style-type:none;
  color:white;
  line-height:2em;
  font-size:1.25rem;
  @media (max-width:400px){
    width:50%;
    margin-left: 20%;
    text-align:flex-start;
  }`

export const SkillsPair = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  font-size:1.2rem;
`
export const List = styled.li`
   font-size:1rem;

`