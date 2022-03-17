import styled from 'styled-components';
import keyframes from 'styled-components';


export const AboutmeContainer = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align: flex-start;
  margin-left:20%;
  padding-left:10%;
  margin-top:0%;
  margin-bottom: 0%;
  font-family: Roboto;
  @media(max-width:1033px){
    margin-top:0%;
  }
  @media(max-width:915px){
    margin-top:-10%;
  }
  @media (max-width:829px){
    width:60%;
    margin-left:10%;
    margin-bottom:10%;
    margin-top:15%;
  }
   @media (max-width:769px){
       width:70%;
       margin-left:10%;
       padding-left:5%;
    }
    @media(max-width:606px){
        width:80%;
        margin-left:10%;
        margin-bottom:20%;
    }
     @media(max-width:548px){
       width:70%;
       margin-left:12%;
       font-size:1.1rem;
       margin-top:10%;
       text-align:center;
     }
    @media(max-width:400px){
      width:65%;
      margin-left:16%;
      font-size:1rem;
    }
     @media(max-width:300px){
       width:70%;
       margin-left:12%;
     }
`
export const Title = styled.h1`
  color:whitesmoke;
  font-size:1.8rem;
  @media (max-width:769px){
    font-size:1.6rem;
  }
  @media (max-width:548px){
    font-size:1.5rem;
  }
  @media(max-width:400px){
    font-size:1.3rem;
  }
   @media(max-width:300px){
     font-size:1.2rem;
     margin-top:10%;
   }
  
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
  font-size:1.3rem;
  line-height: 2rem;
  @media (max-width:829px){
    font-size:1.1rem;
  }
  @media(max-width:548px){
    font-size:1rem;
  }
  @media(max-width:300px){
    font-size:0.9rem;
  }
`
export const SkillsList = styled.ul`
  width:70%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  list-style-type:none;
  color:white;
  line-height:2rem;
  font-size:1.25rem;
  @media (max-width:548px){
    width:80%;
    margin-left: 0%;
    text-align:flex-start;
    font-size:1rem;
  }
  @media(max-width:400px){
      width:100%;
      margin-left:-20%;
      font-size:0.5rem;
    }
  @media(max-width:300px){
    font-size:0.6rem;
  }
  
  `

export const SkillsPair = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  font-size:1.2rem;
`
export const List = styled.li`
   font-size:1rem;
   @media(max-width:400px){
     font-size:0.9rem;
   }

`