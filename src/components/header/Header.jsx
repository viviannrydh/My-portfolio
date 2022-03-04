import React, { useState } from 'react';
import VR from '../../images/LOGOVR.png'
import { motion } from 'framer-motion';
import Hamburger from './hamburger/Hamburger'
import {
  Header_container,
  HamburgerHeaderWrapper,
  Header_Wrapper_first,
  Header_logo,
  Header_Links,
  HamburgerMenuWrapper
 
} from './Header.style'

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const toggleHamburger = ()=>{ 
    setHamburgerOpen(!hamburgerOpen)
  }
  return ( 
    <Header_container>
      <motion.div
        animate={{
          scale: [0, 1],
          rotate: [0, 0, 45, 45, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}>
        <a href="#"><Header_logo src={VR} alt="" /></a>
      </motion.div>
      <Header_Wrapper_first>
        <Header_Links><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span>About me <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62;</span></Header_Links>
        <Header_Links><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span>Projects <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62;</span></Header_Links>
        <Header_Links><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span>Experience <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62;</span></Header_Links>
        <Header_Links><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span>Contact <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62;</span></Header_Links>
      </Header_Wrapper_first>
      <HamburgerMenuWrapper>
        <div onClick={toggleHamburger}>
          <Hamburger />
        </div>
        <HamburgerHeaderWrapper style={{
          display: `${hamburgerOpen ? 'inline' : 'none'}`}}>
          <Header_Links>About me </Header_Links>
          <Header_Links>Projects </Header_Links>
          <Header_Links>Experience </Header_Links>
          <Header_Links>Contact </Header_Links>
        </HamburgerHeaderWrapper>
       
      </HamburgerMenuWrapper>
      
      
    </Header_container>
  )
}

export default Header
