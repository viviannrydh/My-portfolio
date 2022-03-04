import React from 'react';
import Malaga from '../../images/Malaga.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RingVolumeIcon from '@material-ui/icons/RingVolume';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import {
  ContactContainer,
  Title,
  ContactWrapper,
  MapImage,
  ContactInfoDiv,
  ContactItem,
  ContactIconBtn,
  ContactText
} from './Contact.style.jsx'

const Contact = () => {
  return (
    <ContactContainer>
      <Title><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span> Get in touch<span style={{ color: 'rgba(77, 217, 248, 1)' }}> &#47;&#62; </span><hr style={{ borderColor: ' rgba(57, 55, 55, 1)' }} /></Title>
      <ContactWrapper>
        <ContactInfoDiv>
          <ContactItem>
            <ContactIconBtn><LocationOnIcon style={{ color:'red', fontSize:'25px'}}/></ContactIconBtn>
            <ContactText> El Limonar, Malaga, Spain</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIconBtn><MailOutlineIcon style={{ color: 'rgba(8, 127, 214, 1)', fontSize: '20px' }}/></ContactIconBtn>
            <ContactText>rydh.vivian@gmail.com</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIconBtn><RingVolumeIcon style={{ color: 'rgba(216, 169, 4, 1)', fontSize: '20px' }}/></ContactIconBtn>
            <ContactText> +46763969361</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIconBtn><GitHubIcon style={{ color: 'black', fontSize: '20px' }} /></ContactIconBtn>
            <ContactIconBtn><LinkedInIcon style={{ color: 'blue', fontSize: '25px' }} /></ContactIconBtn>
            <ContactIconBtn><InstagramIcon style={{ color: 'purple', fontSize: '25px' }} /></ContactIconBtn>
          </ContactItem>
          
        </ContactInfoDiv>
        <MapImage src={Malaga} alt="" />
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact;
