import React from 'react';
import Todo from '../../images/todos.jpg';
import Math from '../../images/mathApp.jpg';
import Movie from '../../images/movieAPI.jpg';
import CanadaCountryRoad from '../../images/CanadaCountryRoad.jpg'
import Amazon from '../../images/amazon-clone.jpg';
import { motion } from 'framer-motion';
import {
  ProjectsContainer,
  ProjectWrapper,
  ProjectImg,
  ProjectImgRight,
  ProjectIntroduction,
  ProjectIntroductionLeft,
  Title,
  ProjectDescription,
  ProjectDescriptionLeft,
  ProjectLinksIcons,
  ProjectLinksIconsLeft
} from './Project.style';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Language';

const Project = () => {
  return (
    <ProjectsContainer>
      <Title><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span> Projects that I have built  <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62; </span><hr style={{ borderColor: 'rgba(57, 55, 55, 1)', borderWidth: '0.5px' }}/></Title>
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectImg src={Todo} alt="" />
        <ProjectIntroduction>
          <h1>Todo App</h1>
          <ProjectDescription>A Todo App that I created for my children to keep on track of their schedules. In the app,
          the Done key could be pressed to remove the completed task from the task list,
          or the task could be deleted directly from the task list by clicking on the trash button.</ProjectDescription>
          <span>React</span> 
          <ProjectLinksIcons>
            <GitHubIcon style={{fontSize:'30px'}}/>
            <WebIcon style={{ fontSize: '36px' }}/>
          </ProjectLinksIcons>
        </ProjectIntroduction>   
      </ProjectWrapper>
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectIntroductionLeft>
          <h1>Math App</h1>
          <ProjectDescriptionLeft>A Math App that I created for my children to practise on addition, subtraction, multiplication, division. 
          In the app, it also can calculate
          how many correct answers kids have got to motivate them to keep going.</ProjectDescriptionLeft>
          <span>React</span>
          <ProjectLinksIconsLeft>
            <GitHubIcon style={{ fontSize: '30px' }} />
            <WebIcon style={{ fontSize: '36px' }} />
          </ProjectLinksIconsLeft>
        </ProjectIntroductionLeft>
        <ProjectImgRight src={Math} alt="" />
      </ProjectWrapper>
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      
      >
        <ProjectImg src={Movie} alt="" />
        <ProjectIntroduction>
          <h1>IMDb API Movie App</h1>
          <ProjectDescription>A movie app was created for fetching and searching for movies. and all the data are from the IMDb Movie API, which was sourced in the website http://www.omdbapi.com ;</ProjectDescription>
          <span>React</span>
          <ProjectLinksIcons>
            <GitHubIcon style={{ fontSize: '30px' }} />
            <WebIcon style={{ fontSize: '36px' }} />
          </ProjectLinksIcons>
        </ProjectIntroduction>
      </ProjectWrapper>
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectIntroductionLeft>
          <h1>Commercial Website</h1>
          <ProjectDescriptionLeft>A commercial website that provides users with company information and services.</ProjectDescriptionLeft>
          <span>React</span>
          <ProjectLinksIconsLeft>
            <GitHubIcon style={{ fontSize: '30px' }} />
            <WebIcon style={{ fontSize: '36px' }} />
          </ProjectLinksIconsLeft>
        </ProjectIntroductionLeft>
        <ProjectImgRight src={CanadaCountryRoad} alt="" />
      </ProjectWrapper>
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectImg src={Amazon} alt="" />
        <ProjectIntroduction>
          <h1>Amazon Mini-clone</h1>
          <ProjectDescription>A movie app was created for fetching and searching for movies. and all the data are from the IMDb Movie API, which was sourced in the website http://www.omdbapi.com ;</ProjectDescription>
          <span>React</span>
          <ProjectLinksIcons>
            <GitHubIcon style={{ fontSize: '30px' }} />
            <WebIcon style={{ fontSize: '36px' }} />
          </ProjectLinksIcons>
        </ProjectIntroduction>
      </ProjectWrapper>
      
    </ProjectsContainer>
  )
}

export default Project
