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
  padding-top:6%;
  margin-bottom:8%;
  font-family: Roboto;
 @media(max-width:1189px){
    width:80%;
    margin-left:10%;
 }
  @media(max-width:1033px){
      width:80%;
      margin-left:10%;
      padding-top:7%;
      margin-bottom:20%;
  }
  @media(max-width:829px){
     margin-bottom:0%; 
     padding-top:8%;
  }
  @media(max-width:779px){
       flex-direction:column-reverse;
       justify-content:center;
       text-align: center;
       width:80%;
       margin-left:10%;
       margin-bottom:0%;
  }
  @media(max-width:548px){
       flex-direction:column-reverse;
       justify-content:center;
       text-align: center;
       width:80%;
       margin-left:10%;
    }
    @media(max-width:415px){
        margin-top:7%;
    }
    @media(max-width:300px){
        width:80%;
    }
`

export const Frontpage_wrapper = styled.div`
    width:65%;
    margin-top:14%;
    color:lightgrey;
    line-height:2.8rem;
    animation: 2s ${fadeInUpAnimation};
     
    @media(max-width:1501px){
        width:60%;
    }
    @media(max-width:1281px){
        width:50%;
    }
    @media(max-width:1033px){
        width:55%;
    }
    @media(max-width:782px){
        width:80%;
        margin-left:10%;
        margin-bottom:15%;
        line-height:1.8rem;
    }
    @media(max-width:548px){
        width:100%;
        margin-top:0%;
        margin-left:0%;
        text-align:center;
        line-height:1.6rem;
    }
    @media(max-width:415px){
        margin-top:0%;
        line-height:1.6rem;
       
    }
    @media(max-width:400px){
        margin-top:0%;

    }
    @media(max-width:376px){
        margin-top:6%;
        line-height:1.6rem;
    }
    @media(max-width:300px){
        width:100%;
    }
    
`

export const Description = styled.p`
    font-size:1.5rem;
    @media(max-width:899px){
        font-size:1.3rem;
    }
    @media (max-width:782px){
        font-size:1.2rem;
    }
    @media (max-width:548px){
        font-size:1rem;
    }
    @media (max-width:349px){
        font-size:0.9rem;
    }


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
    @media (max-width:1499px){
        font-size:2.8rem;
    }
    @media (max-width:1299px){
        font-size:2.5rem;
    }
    @media (max-width:1235px){
        font-size: 2.3rem;
    }
    @media(max-width:899px){
        font-size:2rem;
    }
    @media (max-width:782px){
        font-size:1.6rem;
         line-height:1.1rem;
    }
    @media (max-width:400px){
        font-size:1.4rem;
    }
    @media(max-width:349px){
        font-size:1.2rem;
        line-height:1.1rem;
    }
`

export const CareerTitle = styled.h1`
    font-size: 3.5rem;
    color:rgba(196, 205, 207, 1);
    font-weight:2000;
    margin-top:0px;
    line-height:3.5rem;
    @media (max-width:1499px){
        font-size:2.8rem;
    }
    @media (max-width:1299px){
        font-size:2.5rem;
    }
    @media (max-width:1235px){
        font-size: 2.3rem;
    }
     @media(max-width:899px){
        font-size:2rem;
    }
    @media (max-width:782px){
        font-size:1.6rem;
        line-height:1.2rem;
    }
     @media (max-width:400px){
        font-size:1.4rem;
        line-height:1.2rem;
    }
    @media(max-width:349px){
        font-size:1.2rem;
        line-height:1.4rem;
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
    @media(max-width:1210px){
        width:60%;
    }
    @media(max-width:1033px){
        width:70%;
    }
    @media (max-width:767px){
        width:70%;
        font-size:1rem;
    }
     @media(max-width:400px){
        width:70%;
        font-size:0.9rem;
    }
    @media(max-width:345px){
        width:70%;
    }
    @media(max-width:300px){
        width:70%;
        font-size:0.8rem;
    }
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
    @media(max-width:1500px){
        margin-top:16%;
    }
   @media(max-width:1281px){
        width:40%;
        margin-top:16%;
        margin-left:5%;
   }
   @media(max-width:1033px){
       width:42%;
       margin-top:20%;
       margin-left:3%;
       margin-bottom:-30%;
   }
   @media(max-width:829px){
       margin-top:22%;
       width:40%;
   }
   @media(max-width:779px){
        width:60%;
        margin-left:20%;
        margin-bottom:-10%;
   }
   @media(max-width:640px){
       margin-bottom:-23%;
   }
    @media(max-width:548px){
        width:80%;
        margin-left:8%;
        margin-top:20%;
        margin-bottom: -18%;
    }
    @media(max-width:459px){
         width:80%;
         margin-left:8%;
         margin-top:30%;
         margin-bottom:-35%;
     }
     @media(max-width:400px){
         margin-bottom:-50%;
     }
     @media(max-width:345px){
         margin-bottom:-74%;
     }
     @media(max-width:300px){
        margin-bottom:-100%;
     }
       
`
export const Selfie_img = styled.img`
   width:100%; 
   animation:1s ${zoomInAnimation};

    @media (max-width:548px){
       width:80%;
       margin-left:10%;
   }
`