import React from 'react';
import Close from '../../../images/close.png'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { 
  CloseIcon
} from './CloseComponent.style.jsx'

const CloseComponent = () => {
  return (
    <>
      <HighlightOffIcon style={{fontSize:"40px", color: "skyblue",marginTop:"28px"}} />
      {/*<CloseIcon src={Close} alt="close buttom" /> */} 
    </>
  )
}

export default CloseComponent
