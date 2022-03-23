import styled from 'styled-components';

export const ExperienceContainer = styled.div`
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
     @media(max-width:300px){
       width:90%;
       margin-left:5%;
    }
`

export const Title = styled.h1`
  color:whitesmoke;
  font-size:1.8rem;
  @media (max-width:769px){
    font-size:1.6rem;
  }
  @media(max-width:548px){
    font-size:1.3rem;
    text-align:flex-start;
  }
   @media(max-width:400px){
    font-size:1.2rem;
  }
   @media(max-width:300px){
     font-size:0.9rem;
   }
`
export const EETitle = styled.h2`
  font-size:1.4rem;
  margin-bottom:2.5rem;
  text-align:center;
  @media(max-width:548px){
    font-size:1.2rem;
  }
   @media(max-width:300px){
     font-size:0.9rem;
   }
`
export const BreakLineHr = styled.hr`
  border-color:rgb(81, 81, 85);
  @media(min-width:549px){
    display:none;
    margin-bottom: 10px;
  }
`
export const ExperienceWrapper = styled.div`
  display:flex;
  flex-direction: row;
  color:whitesmoke;
  justify-content:space-between;
  text-align: flex-start;
  font-size: 1.2rem;
  line-height: 1.8rem;
  @media (max-width:769px){
    display:flex;
    flex-direction: column;
    text-align:flex-start;
    width:100%;
    font-size:1rem;
  }
   @media(max-width:300px){
     width:100%;
     font-size:0.9rem;
   }
`
export const ExperienceBox = styled.div`
  display:flex;
  flex-direction: column;
  

`
export const ExperienceDiv = styled.div`
  padding-left:25px;
  padding-top:25px;
  @media(max-width:769px){
    padding-left:0px;
  }
  @media(max-width:415px){
    padding-left:0px;
  }
  @media(max-width:300px){
     padding-left:0px;
     padding-top:5px;
   }

`
export const EducationDiv = styled.div`
  padding-right:20px;
  padding-top:25px;
  @media(max-width:300px){
     font-size:0.9rem;
     padding-right:5px;
    padding-top:5px;
   }
`
export const DateForm = styled.span`
  font-style:ITALIC;
  font-size:1rem;
  margin-top:-15px;
`
export const EducationBtn = styled.button`
  background-color: rgb(32, 32, 33);
  color:whitesmoke;
  border:none;
  padding:8px;
  border-bottom: 0.3px solid rgba(77, 217, 248, 1);
  font-size:1.1rem;
  font-weight:bold;
`
export const LinktoSchool = styled.a`
  text-decoration: none;
  color:whitesmoke;
  cursor: pointer;
`