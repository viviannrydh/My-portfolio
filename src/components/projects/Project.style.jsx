import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width:60%;
  display:flex;
  flex-direction:column;
  margin-left:20%;
  margin-top:12%;
  @media (max-width:1355px){
      flex-direction:column;
      width:90%;
      margin-left:5%;
      margin-top:7%;
      margin-bottom:20%;
  }
  @media (max-width:1033px){
      flex-direction:column;
      width:80%;
      margin-left:10%;
      margin-top:3%;
  }
  @media (max-width:829px){
    width:80%;
    margin-left:10%;
  }
  @media(max-width:770px){
    flex-direction:column;
    width:90%;
    margin-left:5%;
  }
   @media (max-width:746px){
       width:90%;
      flex-direction:column;
       margin-left:5%;
    }
    @media(max-width:606px){
       flex-direction:column;
        width:90%;
        margin-left:5%;
        margin-bottom:20%;
    }
     @media(max-width:548px){
      flex-direction:column;
       width:90%;
       margin-left:5%;
    }
     @media(max-width:415px){
        width:90%;
        margin-left:5%;
        flex-direction:column;
     }
  @media (max-width:400px){
    width:80%;
    margin-left:10%;
    text-align:center;
    justify-content:space-around;
    margin-top:20%;
  }
`
export const Title = styled.h1`
  color:whitesmoke;
   font-size:1.8rem;
  @media (max-width:769px){
    font-size:1.6rem;
  }
  @media(max-width:548px){
    font-size: 1.4rem;
    text-align:center;
  }
   @media(max-width:400px){
    font-size:1.2rem;
  }
   @media(max-width:300px){
     font-size:0.9rem;
   }
`

export const ProjectWrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-between;
  margin-top:10%;
  @media(max-width:1033px){
    flex-direction:column;
  }
  @media (max-width:829px){
    flex-direction:column;
  }
  @media (max-width:769px){
    flex-direction:column;
    width:80%;
    margin-left:10%;
  }
  @media(max-width:548px){
        flex-direction:column;
        font-size:1rem;
     }
  @media (max-width:400px){
    width:100%;
    margin-left:0%;
    flex-direction:column;
    justify-content:center;
  }
`
export const ProjectWrapperSecond= styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-between;
  margin-top:10%;
  @media (max-width:1033px){
    flex-direction:column-reverse;
  }
  @media (max-width:829px){
    flex-direction:column-reverse;
  }
  @media (max-width:769px){
    flex-direction:column-reverse;
    width:80%;
    margin-left:10%;
  }
  @media(max-width:548px){
        flex-direction:column-reverse;
        font-size:1rem;
     }
   @media (max-width:400px){
    width:100%;
    margin-left:0%;
    flex-direction:column-reverse;
    justify-content:center;
  }
`

export const ProjectImg = styled.img`
  width:55%;
  @media (max-width:1033px){
    width:100%;
  }
  @media (max-width:829px){
    width:100%;
  }
  @media (max-width:769px){
    width:100%;
  }
  @media(max-width:548px){
    width:100%;
  }
`
export const ProjectImgRight = styled.img`
  width:55%;
  margin-left:-5%;
  z-index:-1;
   @media (max-width:1033px){
     margin-left:0;
    width:100%;
  }
  @media (max-width:829px){
    width:100%;
    margin-left:0%;
  }
  @media (max-width:769px){
    width:100%;
  }
  @media(max-width:548px){
    width:100%;
    margin-left:0%;
  }
`

export const ProjectIntroduction = styled.div`
  color:whitesmoke;
  text-align:right;
  
`
export const ProjectIntroductionLeft = styled.div`
  text-align:left;
  color:whitesmoke;
  text-align:left;

`
export const ProjectDescription = styled.p`
  background-color:rgba(41, 39, 39,0.7);
  padding:15px;
  margin-left:-10%;
  text-align:center;
  font-size:1.2rem;
  line-height:1.8rem;
  color:lightgray;
  @media(max-width:548px){
    margin-left:0%;
    margin-top:0%;
    font-size:1rem;
  }
   @media(max-width:300px){
     font-size:0.9rem;
   }
`
export const ProjectDescriptionLeft = styled.p`
  background-color:rgba(41, 39, 39,0.7);
  padding:10px;
  margin-left:0%;
  text-align:center;
  font-size:1.2rem;
  line-height:1.8rem;
  color:lightgray;
   @media(max-width:548px){
    font-size:1rem;
  }
   @media(max-width:300px){
     font-size:0.9rem;
   }
`
export const ProjectTitle = styled.h1`
  font-size:1.5rem;
@media(max-width:769px){
  font-size:1.3rem;
}
@media (max-width:548px){
  font-size:1.1rem;
  text-align:center
}
 @media(max-width:300px){
     font-size:1rem;
   }

`
export const ProjectLinksIcons = styled.div`
  width:20%;
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  @media(max-width:548px){
    width:30%;
  }
`
export const ProjectLinksIconsLeft = styled.div`
  width:20%;
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: auto;
   @media(max-width:548px){
    width:30%;
  }
`

export const GithubLink = styled.a`
  color:whitesmoke;
  text-decoration: none;
`
