import React from 'react';
import selfie from '../../images/selfie-without-whitecircle.png';
import logo from '../../images/logo.png';
import AnimateBG from '../animateBG/AnimateBG';
import { motion } from 'framer-motion';
import {
  Frontpage_container,
  NameTitle,
  Frontpage_wrapper,
  Description,
  CareerTitle,
  Contact_btn,
  Selfie_img,
  SelfieContainer,
} from './Frontpage.style';
import Sidebar from '../sidebar/Sidebar';

const Frontpage = () => {
  
  return (
    <>
    <Frontpage_container> 
      <Frontpage_wrapper>
        <Description>Hello <span>&#128075; &#128516;</span>. I'm </Description>
        <NameTitle> Viviann Rydh</NameTitle>
        <CareerTitle>Front-end web developer</CareerTitle>
        <Description>with a passion for building web applications with <strong style={{ color: '#61dafb' }}>&#x2764; React &#x2764;</strong>.</Description>
        {/*<Slogen>I am passionated about building web applications with React.</Slogen>*/}
        <Contact_btn>Check out my projects</Contact_btn>
      </Frontpage_wrapper>
      <SelfieContainer>
        <Selfie_img src={selfie} alt="" />
      </SelfieContainer>  
      
      </Frontpage_container>
    </>
  )
}

export default Frontpage

