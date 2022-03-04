import React from 'react'
import HamburgerImg from '../../../images/hamburger.png';
import {
  HamburgerContainer,
  HamburgerImgIcon
} from './Hamburger.style'

const Hamburger = ({ isOpen}) => {
  return (

    <HamburgerContainer>
      <HamburgerImgIcon src={HamburgerImg} />
    </HamburgerContainer>

  )
}

export default Hamburger
