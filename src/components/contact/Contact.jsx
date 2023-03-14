import React, { useRef } from 'react';
import Malaga from '../../images/Malaga.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RingVolumeIcon from '@material-ui/icons/RingVolume';

import LinearScaleIcon from '@material-ui/icons/LinearScale';

import emailjs from 'emailjs-com';
import {
  ContactContainer,
  Title,
  ContactWrapper,
  MapImage,
  ContactInfoDiv,
  ContactItem,
  ContactIconBtn,
  ContactText,
  ContactItemIcons,
  ContactForm,
  InputItem,
  NameandEmail,
  NameInputItem,
  EmailInputItem,
  MessageTextArea,
  SubmitInput,
  ContactItemIconsFristLine,
  ContactItemIconsSecondLine,
  MyWish
} from './Contact.style.jsx'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nas57nq', 'template_ganeihk', e.target, 'sMPWfcotUiBtmM9hR')
      .then((result) => {
        alert('Thank you.');
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <ContactContainer id="contact">
      <Title><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span> Get in touch<span style={{ color: 'rgba(77, 217, 248, 1)' }}> &#47;&#62; </span><hr style={{ borderColor: ' rgba(57, 55, 55, 1)' }} /></Title>
      <ContactWrapper>
        <MyWish>Thank you for visiting my website. Hope I am the candidate you are looking for &#128516;. My inbox is always open, whether you have any question or just want to say Hi,  I am just one click away.</MyWish>
        <ContactItemIcons>
          <ContactItemIconsFristLine>
            <ContactItem>
            <LocationOnIcon style={{ color: 'skyblue', fontSize: '25px', marginRight: '25px', marginTop:'15px' }} />
            <ContactText>Malaga, Spain</ContactText>
            </ContactItem>
            <ContactItem>
              <MailOutlineIcon style={{ color: 'skyblue', fontSize: '25px', marginRight: '25px', marginTop: '15px' }} />
              <ContactText>rydh.vivian@gmail.com</ContactText>
            </ContactItem>
            <ContactItem>
              <RingVolumeIcon style={{ color: 'skyblue', fontSize: '25px', marginRight: '25px', marginTop: '15px' }} />
              <ContactText> +46763969361 / +34623416147</ContactText>
            </ContactItem>
          </ContactItemIconsFristLine>
        </ContactItemIcons>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact;
