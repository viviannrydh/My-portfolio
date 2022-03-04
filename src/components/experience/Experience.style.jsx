import styled from 'styled-components';

export const ExperienceContainer = styled.div`
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
    width:110%;
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
  @media (max-width:400px){
    width:200%;
    margin-left:40%;
  }
`

export const Title = styled.h1`
  color:whitesmoke;
`

export const ExperienceWrapper = styled.div`
  display:flex;
  flex-direction: row;
  color:whitesmoke;
  justify-content:space-between;
  text-align: flex-start;
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const ExperienceBox = styled.div`
  display:flex;
  flex-direction: column;

`
export const ExperienceDiv = styled.div`
  padding-left:25px;

`
export const EducationDiv = styled.div`
  padding-right:20px;
  padding-top:25px;
`
export const DateForm = styled.span`
  font-style:ITALIC;
  font-size:1rem;
  margin-top:-15px;
`
export const EducationBtn = styled.button`
  background-color: rgb(32, 32, 33);
  color:whitesmoke;
  padding:8px;
  border: 0.3px inset rgba(77, 217, 248, 1);
  font-size:1rem;
`
export const LinktoSchool = styled.a`
  text-decoration: none;
  color:whitesmoke;
  cursor: pointer;
`