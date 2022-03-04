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
      margin-left:13%;
      margin-top:7%;
      margin-bottom:20%;
  }
  @media (max-width:1033px){
      flex-direction:column;
      width:100%;
      margin-left:10%;
      margin-top:3%;
  }
  @media (max-width:829px){
    width:109%;
    margin-left:17%;
  }
  @media(max-width:770px){
    flex-direction:column;
    width:109%;
    margin-left:25%;
  }
   @media (max-width:746px){
       width:100%;
      flex-direction:column;
       margin-left:15%;
    }
    @media(max-width:606px){
       flex-direction:column;
        width:100%;
        margin-left:25%;
        margin-bottom:20%;
    }
     @media(max-width:548px){
      flex-direction:column;
       width:160%;
       margin-left:22%;
    }
     @media(max-width:415px){
        width:170%;
        margin-left:44%;
        flex-direction:column;
     }
  @media (max-width:400px){
    width:200%;
    margin-left:40%;
    text-align:center;
    justify-content:space-around;
    margin-top:20%;
  }
`
export const Title = styled.h1`
  color:whitesmoke;
`

export const ProjectWrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:flex-between;
  margin-top:10%;
  @media (max-width:829px){
    width:100%;
  }
  @media(max-width:415px){
        flex-direction:column;
     }
   @media (max-width:400px){
    width:100%;
    margin-left:0%;
    flex-direction:column;
    justify-content:center;
  }
`

export const ProjectImg = styled.img`
  width:55%;
  @media(max-width:415px){
        width:100%;
     }
  @media (max-width:400px){
    width:100%;
    margin-left:0%;
  }
`
export const ProjectImgRight = styled.img`
  width:55%;
  margin-left:-5%;
  z-index:-1;
   @media(max-width:415px){
        width:100%;
     }
  @media (max-width:400px){
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
  background-color:rgb(41, 39, 39);
  padding:15px;
  margin-left:-10%;
  text-align:center;
  font-size:1.2rem;
  line-height:1.8rem;
  color:lightgray;
`
export const ProjectDescriptionLeft = styled.p`
  background-color:rgb(41, 39, 39);
  padding:10px;
  margin-left:0%;
  text-align:center;
  font-size:1.2rem;
  line-height:1.8rem;
  color:lightgray;
`

export const ProjectLinksIcons = styled.div`
  width:20%;
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
`
export const ProjectLinksIconsLeft = styled.div`
  width:20%;
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: auto;
`
