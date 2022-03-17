import React, { useState } from 'react';
import VR from '../../images/LOGOVR.png'
import { motion } from 'framer-motion';
import Hamburger from './hamburger/Hamburger';
import Menus from './hamburger/Menus';
import CloseComponent from './hamburger/CloseComponent'
import {
  Header_container,
  HamburgerHeaderWrapper,
  Header_Wrapper_first,
  Header_logo,
  Header_Links,
  HamburgerMenuWrapper,
  HeaderLinkHref
} from './Header.style'

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const toggleHamburger = ()=>{ 
    setHamburgerOpen(!hamburgerOpen)
  }
  return ( 
    <Header_container>

      <a href="#"><Header_logo src={VR} alt="" /></a>
      <Header_Wrapper_first>
        <Header_Links><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span><HeaderLinkHref href="#aboutme">About me</HeaderLinkHref><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62;</span></Header_Links>
        <Header_Links><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span><HeaderLinkHref href="#projects">Projects</HeaderLinkHref><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62;</span></Header_Links>
        <Header_Links><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span><HeaderLinkHref href="#experience">Experience</HeaderLinkHref><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62;</span></Header_Links>
        <Header_Links><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span><HeaderLinkHref href="#contact">Contact</HeaderLinkHref><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62;</span></Header_Links>
      </Header_Wrapper_first>
      <HamburgerMenuWrapper>
        <div onClick={toggleHamburger}>
          {hamburgerOpen ? <CloseComponent/> :<Hamburger />} 
        </div>
        <HamburgerHeaderWrapper style={{
          display: `${hamburgerOpen ? 'inline' : 'none'}`}}>
         <Menus />
        </HamburgerHeaderWrapper>
       
      </HamburgerMenuWrapper>
      
      
    </Header_container>
  )
}

export default Header
