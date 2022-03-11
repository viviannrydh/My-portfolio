import React from 'react';
import Malaga from '../../images/Malaga.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RingVolumeIcon from '@material-ui/icons/RingVolume';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import {
  ContactContainer,
  Title,
  ContactWrapper,
  MapImage,
  ContactInfoDiv,
  ContactItem,
  ContactIconBtn,
  ContactText,
  ContactItemIcons
} from './Contact.style.jsx'

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Title><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span> Get in touch<span style={{ color: 'rgba(77, 217, 248, 1)' }}> &#47;&#62; </span><hr style={{ borderColor: ' rgba(57, 55, 55, 1)' }} /></Title>
      <ContactWrapper>
        <ContactInfoDiv>
          <ContactItem>
            <LocationOnIcon style={{ color:'red', fontSize:'30px', marginRight:'10px'}}/>
            <ContactText> El Limonar, Malaga, Spain</ContactText>
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{ color: 'rgba(17, 244, 217, 1)', fontSize: '30px', marginRight: '10px' }}/>
            <ContactText>rydh.vivian@gmail.com</ContactText>
          </ContactItem>
          <ContactItem>
            <RingVolumeIcon style={{ color: 'yellow', fontSize: '30px', marginRight: '10px' }}/>
            <ContactText> +46763969361</ContactText>
          </ContactItem>
          <ContactItemIcons>
            <LinearScaleIcon />
            <GitHubIcon style={{ color: 'white', fontSize: '25px', marginRight: '10px' }} />
            <LinearScaleIcon />
            <LinkedInIcon style={{ color: 'rgba(10, 211, 255, 1)', fontSize: '30px', marginRight: '10px' }} />
            <LinearScaleIcon />
            <InstagramIcon style={{ color: 'rgba(203, 101, 252, 1)', fontSize: '30px', marginRight: '10px' }} />
            <LinearScaleIcon />
          </ContactItemIcons>
          
        </ContactInfoDiv>
        <MapImage src={Malaga} alt="" />
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact;
