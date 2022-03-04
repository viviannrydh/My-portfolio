import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations'
import { fadeIn } from 'react-animations'
import { flipInY } from 'react-animations'
import { slideInLeft } from 'react-animations'
import { fadeInUp } from 'react-animations'
import { fadeInRight } from 'react-animations'


const zoomInAnimation = keyframes`${zoomIn}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const flipInYAnimation = keyframes`${flipInY}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;


export const Frontpage_container = styled.div`
  width:70%;
  display:flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-left:15%;
  padding-top:7%;
  margin-bottom:8%;
  
  @media (max-width:1355px){
      width:100%;
      margin-left:15%;
      margin-top:7%;
      margin-bottom:20%;
  }
  @media (max-width:1033px){
      width:100%;
      margin-left:20%;
      margin-top:3%;
      margin-bottom:10%;
  }
  @media (max-width:829px){
      margin-left:22%;
  }
  @media(max-width:770px){
    flex-direction: row;
    width:102%;
    margin-left:25%;
  }
   @media (max-width:746px){
       width:100%;
       display:flex;
       flex-direction:column-reverse;
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
    display: flex;
    margin-left:29%;
    padding:10px;
    width:240%;
    margin-bottom:80%;
    margin-top: 40%;
  }
  
 
`


export const Frontpage_wrapper = styled.div`
    width:65%;
    margin-top:14%;
    color:lightgrey;
    line-height:2.8rem;
    animation: 2s ${fadeInUpAnimation};
     @media(max-width:1033px){
         width:55%;
     }
    @media (max-width:770px){
        width:60%;
        margin-left:0%;
    }
     @media (max-width:746px){
        width:80%;
        margin-top:5%;
        text-align: center;
        margin-left:22%;
    }
    @media(max-width:600px){
        width:90%;
        margin-top:5%;
        margin-left:18%;
        
    }
    @media(max-width:555px){
        width:100%;
        margin-top:15%;
        margin-left:13%;
    }
    @media(max-width:548px){
        margin-top:25%;
        margin-left:3%;
    }
    @media(max-width:415px){
        margin-left:10%;
     }
    @media (max-width:400px){
        width:100%;
        margin-left:0%;
        text-align:center;
        margin-top:15%;

    }
    
`

export const Description = styled.p`
    font-size:1.4em;


`
export const NameTitle = styled.h1`
   /* background-image: linear-gradient(to left, rgb(77, 43, 202),rgb(17, 134, 202),rgb(204, 97, 214), rgb(248, 88, 248), rgb(113, 186, 247),  rgb(136, 165, 247),rgb(9, 108, 201),rgb(135, 59, 235),rgb(174, 64, 238), rgb(102, 145, 224),rgb(141, 66, 226), rgb(119, 174, 247),rgb(10, 88, 190));
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;*/
    color:whitesmoke;
    font-size: 3.5rem;
    font-weight: 2000;
    margin-bottom: 1.2rem;
    margin-top:1rem;
    @media (max-width:1033px){
        font-size: 2.8rem;
    }
    @media (max-width:767px){
        font-size:2.2rem;
    }
`

export const CareerTitle = styled.h1`
    font-size: 3.5rem;
    color:rgba(196, 205, 207, 1);
    font-weight:2000;
    margin-top:0px;
    line-height:3.5rem;
    @media (max-width:1033px){
        font-size: 2.8rem;
    }
    @media (max-width:767px){
        font-size:2.0rem;
    }
`
export const Contact_btn = styled.button`
    height:50px;
    width:50%;
    padding:10px;
    background-color:rgb(36, 36, 37);
    color:white;
    border:1px solid rgb(77, 217, 248);   
    font-size:1.2rem;
    color:skyblue;
    margin-top:3%;
   
`
export const Slogen = styled.p`
    font-size:1.8rem;
    color:white;

`
export const SelfieContainer=styled.div`
    width:35%;  
    height:50vh;
    align-items: center;
    margin-top:12%;
    @media (max-width:1355px){
        width:30%;
        margin-left:0%;
    }
    @media(max-width:1033px){
       margin-left:10%;
   }
    @media(max-width:825px){
        margin-top:21%;
    }
    @media (max-width:770px){
            margin-top:20%;
            width:30%;
    }
    @media (max-width:746px){
         width:65%;
         margin-left:17%;
     }
     @media(max-width:600px){
         width:70%;
     }
     @media(max-width:555px){
         margin-left:15%;
     }
     @media(max-width:548px){
         width:60%;
         margin-left:10%;
     }  
     @media (max-width:480px){
        width:80%;
        margin-left:6%;
    }
    @media(max-width:415px){
        margin-left:6%;
     }
    @media (max-width:400px){
        width:70%;
        margin-left:10%;
    }


`
export const Selfie_img = styled.img`
   width:100%; 
   animation:2s ${fadeInRightAnimation};
   @media (max-width:1356px){
       width:100%;
       margin-left:-20%;
   }
    @media (max-width:1033px){
       margin-left:-15%;
       margin-top:7%;
   }
   @media(max-width:825px){
        width:100%;
  }
  @media(max-width:770px){
        width:110%;
  }
   @media (max-width:746px){
         width:90%;
         margin-left:20%;
         padding-left:5%;
     }
    @media (max-width:400px){
       width:80%;
       margin-left:10%;
       margin-top:-10%;
   }

`