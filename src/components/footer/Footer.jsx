import React from 'react';
import { FooterWrapper} from './Footer.style'

const Footer = () => {
  return (
    <div>
      <hr style={{ borderColor:'rgb(80, 82, 82)', marginTop:'10%'}}/>
      <FooterWrapper>
        <h4>Designed & Built by  <span style={{ color: 'red' }}> &#10084;</span> Viviann Rydh <span style={{ color: 'red' }}>&#10084;</span></h4>
      </FooterWrapper>
    </div>
    
  )
}

export default Footer

