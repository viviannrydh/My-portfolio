import React from 'react';
import { 
  MenuWrapper, 
  MenuItem,
  HeaderLinkA
} from './Menus.style.jsx'

const Menus = () => {
  return (
    <MenuWrapper>
        <HeaderLinkA href="#aboutme">01. About me</HeaderLinkA> 
        <HeaderLinkA href="#projects">02. Projects</HeaderLinkA>  
        <HeaderLinkA href="#experience">03. Experience</HeaderLinkA>  
        <HeaderLinkA href="#contact">04. Contact me</HeaderLinkA>
    </MenuWrapper>
  )
}

export default Menus
