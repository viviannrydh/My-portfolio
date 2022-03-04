import React from 'react';
import selfie from '../images/selfie.jpg';

const Aboutme = () => {
  return (
    <div className="wrapper" id="aboutme">
      
      <div className="aboutme-wrapper">
          <div className="aboutme-self-info">
          <h1>Hello. I am</h1>
          <h1 className="aboutme-title">Viviann Rydh</h1>
          <h1>Front-end web developer</h1>
          
        {/*<img src={selfie} alt="selfie" className="aboutme-selfie" />*/}
        </div>
      </div>
      </div>
  )
}

export default Aboutme
