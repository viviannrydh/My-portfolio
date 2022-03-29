import React from 'react';
import selfie from '../../images/selfie-without-whitecircle.png';
import logo from '../../images/logo.png';
import AnimateBG from '../animateBG/AnimateBG';
import { motion } from 'framer-motion';
import LinkedInImg from '../../images/linkedin.webp';
import InstagramImg from '../../images/Instagram-Icon.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  Frontpage_container,
  NameTitle,
  Frontpage_wrapper,
  Description,
  CareerTitle,
  Contact_btn,
  Selfie_img,
  SelfieContainer,
  ContactInfoWrapper,
  ContactIcons
} from './Frontpage.style';
import Sidebar from '../sidebar/Sidebar';

const Frontpage = () => {
  
  return (
    <>
    <Frontpage_container> 
      <Frontpage_wrapper>
        <Description>Hello <span>&#128075; </span>. I'm </Description>
        <NameTitle> Viviann Rydh</NameTitle>
        <CareerTitle>Front-end web developer</CareerTitle>
          <Description>Passionate about building web applications with <strong style={{ color: '#61dafb' }}>&#x2764; React &#x2764;</strong>.</Description>
        {/*<Slogen>I am passionated about building web applications with React.</Slogen>*/}
        <ContactInfoWrapper>
          <Contact_btn>Contact me</Contact_btn>
          <ContactIcons>
            <a href="https://github.com/viviannrydh?tab=repositories" target="_blank"><GitHubIcon style={{ color: 'white', fontSize: '28px', marginTop: '20px' }} /></a>
            <a href="https://www.linkedin.com/in/viviann-wang-rydh-15503a42" target="_blank"><img src={LinkedInImg} style={{ width: '30px', marginTop: '20px' }} /></a>
          </ContactIcons>
        </ContactInfoWrapper>

      </Frontpage_wrapper>
      <SelfieContainer>
        <Selfie_img src={selfie} alt="" />
      </SelfieContainer>  
      
      </Frontpage_container>
    </>
  )
}

export default Frontpage

