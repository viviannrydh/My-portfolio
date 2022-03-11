import React from 'react';
import { 
  MenuWrapper, 
  MenuItem
} from './Menus.style.jsx'

const Menus = () => {
  return (
    <MenuWrapper>
      <MenuItem>
        <button>01. </button>
        <button>About me</button>
       </MenuItem>
      <MenuItem>
        <button>02. </button>
        <button>Projects</button>  
      </MenuItem>
      <MenuItem>
        <button>03.</button>
        <button>Experience</button>  
      </MenuItem>
      <MenuItem>
        <button>04. </button>
        <button>Contact me</button>
      </MenuItem>
    </MenuWrapper>
  )
}

export default Menus
