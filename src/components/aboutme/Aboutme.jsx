import React from 'react';
import skills from '../../images/skills.png';
import JS from '../../images/js.png';
import ReactIcon from '../../images/react.png';
import TypeScriptLogo from '../../images/typescript.png';
import HTMLLogo from '../../images/html.jpg';
import CSSLogo from '../../images/css.png';
import framermotionLogo from '../../images/framermotion.png';
import { motion } from 'framer-motion'
import {
  AboutmeContainer,
  Title,
  SelfIntroduction,
  SkillsList,
  SkillsPair,
  AboutmeWrapper,
  List
} from './Aboutme.style'

const Aboutme = () => {
  return (
    <div id="aboutme">
      <AboutmeContainer
        as={motion.div}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.5 }} 
      >
        <Title><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span>About me<span style={{ color: 'rgba(77, 217, 248, 1)' }}> &#47;&#62; </span><hr style={{ borderColor: 'rgba(57, 55, 55, 1)'}} /></Title>
      <AboutmeWrapper>
        <SelfIntroduction>
          <p>Hello, I just finished my two years' education as a front-end developer, and I am looking for a further opportunity to put what i have learned into practice.</p>
          {/*<p>I am well-organised and self-displaned person,with ten years of experience in marketing and the sales field, 
                I am drilled to prioritize customer demands.</p> */}
          <p>Here are a few technologies I’ve been working with recently:</p>
        </SelfIntroduction>
          <SkillsList> 
            <SkillsPair>
              <List><span style={{ fontSize: '20px', color: 'rgba(77, 217, 248, 1)' }}>*</span> React </List>
              <List><span style={{ fontSize: '20px', color: 'rgba(77, 217, 248, 1)' }}>*</span> JavaScript</List>
              <List><span style={{ fontSize: '20px', color: 'rgba(77, 217, 248, 1)' }}>*</span> TypeScript</List>
              <List><span style={{ fontSize: '20px', color: 'rgba(77, 217, 248, 1)' }}>*</span> Figma </List>
            </SkillsPair>
            <SkillsPair>
              <List><span style={{ fontSize: '20px', color: 'rgba(77, 217, 248, 1)' }}>*</span> HTML</List>
              <List><span style={{ fontSize: '20px', color: 'rgba(77, 217, 248, 1)' }}>*</span> CSS</List>
              <List><span style={{ fontSize: '20px', color: 'rgba(77, 217, 248, 1)' }}>*</span> Framer Motion</List>
              <List><span style={{ fontSize: '20px', color: 'rgba(77, 217, 248, 1)' }}>*</span> Bootstrap</List>
            </SkillsPair> 
        </SkillsList>
      </AboutmeWrapper>
    </AboutmeContainer>
      
    </div>
  )
}

export default Aboutme
