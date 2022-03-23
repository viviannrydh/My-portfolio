import React from 'react';
import { Link } from 'react-router-dom';
import Todo from '../../images/todos.jpg';
import Math from '../../images/mathApp.jpg';
import Movie from '../../images/movieAPI.jpg';
import CanadaCountryRoad from '../../images/CanadaCountryRoad.png'
import Amazon from '../../images/amazon-clone.jpg';
import Cookingbook from '../../images/cooking.png';
import SelfPortfolio from '../../images/ darkblue theme.png'
import { motion } from 'framer-motion';
import {
  ProjectsContainer,
  ProjectWrapper,
  ProjectWrapperSecond,
  ProjectImg,
  ProjectImgRight,
  ProjectIntroduction,
  ProjectIntroductionLeft,
  Title,
  ProjectTitle,
  ProjectDescription,
  ProjectDescriptionLeft,
  ProjectLinksIcons,
  ProjectLinksIconsLeft,
  GithubLink,
} from './Project.style';

import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Language';

const Project = () => {
  return (
    <ProjectsContainer id="projects">
      <Title><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span> Projects that I have built  <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62; </span><hr style={{ borderColor: 'rgba(57, 55, 55, 1)', borderWidth: '0.5px' }}/></Title>
      <a href="https://viviannrydh.github.io/Math-app-for-kids/" style={{ textDecoration: 'none' }} target="_blank">
      <ProjectWrapperSecond
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        
        <ProjectIntroductionLeft>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/Math-app-for-kids" target="_blank">Math App</GithubLink></ProjectTitle>
          <ProjectDescriptionLeft>A Math App that I created for my children to practise addition, subtraction, multiplication and division.
          the app will keep track of how many correct answers kids have got to motivate them to keep going.</ProjectDescriptionLeft>
          <span>React</span>
          <ProjectLinksIconsLeft>
            <GithubLink href="https://github.com/viviannrydh/Math-app-for-kids" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
            <GithubLink href="https://viviannrydh.github.io/Math-app-for-kids/" target="_blank"><WebIcon style={{ fontSize: '36px' }} /></GithubLink>
          </ProjectLinksIconsLeft>
        </ProjectIntroductionLeft>
        <ProjectImgRight src={Math} alt="" /> 
      </ProjectWrapperSecond>
      </a>

      <a href="https://viviannrydh.github.io/Todo-App/" style={{ textDecoration: 'none' }} target="_blank">
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectImg src={Todo} alt="Todo Web Image" />
        <ProjectIntroduction>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/Todo-App" target="_blank" >Todo App</GithubLink></ProjectTitle>
          <ProjectDescription>A Todo App that I created for my children to keep track of their schedules. In the app,
          the Done key could be pressed to remove the completed task from the task list,
          or the task could be deleted directly from the task list by clicking on the trash button.</ProjectDescription>
          <span>React</span> 
          <ProjectLinksIcons>
            <GithubLink href="https://github.com/viviannrydh/Todo-App" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink> 
            <GithubLink href="https://viviannrydh.github.io/Todo-App/" target="_blank"><WebIcon style={{ fontSize: '36px' }} /></GithubLink>
          </ProjectLinksIcons>
        </ProjectIntroduction>   
        </ProjectWrapper>
      </a>
      <a href="https://viviannrydh.github.io/My-portfolio/" style={{ textDecoration: 'none' }} target="_blank">
      <ProjectWrapperSecond
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectIntroductionLeft>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/Math-app-for-kids" target="_blank">Self-portfolio</GithubLink></ProjectTitle>
          <ProjectDescriptionLeft>My self-portfolio site with information about my skills, education background, work experience and projects that I have built.</ProjectDescriptionLeft>
          <span>React, framer motion, styled-component</span>
          <ProjectLinksIconsLeft>
              <GithubLink href="https://github.com/viviannrydh/My-portfolio" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
              <GithubLink href="https://viviannrydh.github.io/My-portfolio/" target="_blank"><WebIcon style={{ fontSize: '36px' }} /></GithubLink>
          </ProjectLinksIconsLeft>
        </ProjectIntroductionLeft>
          <ProjectImgRight src={SelfPortfolio} alt="" />
        </ProjectWrapperSecond>
      </a>
      <a href="https://github.com/viviannrydh/movieapi" style={{ textDecoration: 'none' }} target="_blank">
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      
      >
        <ProjectImg src={Movie} alt="" />
        <ProjectIntroduction>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/movieapi" target="_blank">IMDb API Movie App</GithubLink></ProjectTitle>
            <ProjectDescription>A movie app was created for fetching and searching for movies. and all the data are from the <a href="http://www.omdbapi.com" target="_blank" style={{ textDecoration: 'none', color: 'skyblue' }}>IMDb Movie</a> API;</ProjectDescription>
          <span>React, API</span>
          <ProjectLinksIcons>
            <GithubLink href="https://github.com/viviannrydh/movieapi" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
            {/* <WebIcon style={{ fontSize: '36px' }} />*/}
          </ProjectLinksIcons>
        </ProjectIntroduction>
        </ProjectWrapper>
      </a>
      <a href="https://canada-immigration.herokuapp.com/" style={{ textDecoration: 'none' }} target="_blank">
      <ProjectWrapperSecond
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectIntroductionLeft>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/canada-country-road-immigration" target="_blank">Commercial Website</GithubLink></ProjectTitle>
          <ProjectDescriptionLeft>A commercial website that provides users with company information and services.</ProjectDescriptionLeft>
          <span>React</span>
          <ProjectLinksIconsLeft>
            <GithubLink href="https://github.com/viviannrydh/canada-country-road-immigration" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
            <GithubLink href="https://canada-immigration.herokuapp.com/" target="_blank"><WebIcon style={{ fontSize: '36px' }} /></GithubLink>
          </ProjectLinksIconsLeft>
        </ProjectIntroductionLeft>
        <ProjectImgRight src={CanadaCountryRoad} alt="" />
        </ProjectWrapperSecond>
      </a>
      <a href="https://github.com/viviannrydh/amazon-clone" style={{ textDecoration: 'none' }} target="_blank">
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
       
        <ProjectImg src={Amazon} alt="" />
        <ProjectIntroduction>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/amazon-clone" target="_blank">Amazon Mini-clone</GithubLink></ProjectTitle>
          <ProjectDescription>A movie app was created for fetching and searching for movies. and all the data are from the <a href="http://www.omdbapi.com" target="_blank">IMDb Movie</a> API;</ProjectDescription>
          <span>React. Firebase</span>
          <ProjectLinksIcons>
            <GithubLink href="https://github.com/viviannrydh/amazon-clone" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
            {/*<WebIcon style={{ fontSize: '36px' }} />*/}
          </ProjectLinksIcons>
        </ProjectIntroduction>
        </ProjectWrapper>
      </a>
      <a href="https://github.com/viviannrydh/Cooking-API-AJAX-JSON/tree/main/Restaurant%20project" style={{ textDecoration: 'none' }} target="_blank">
      <ProjectWrapperSecond
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectIntroductionLeft>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/Cooking-API-AJAX-JSON/tree/main/Restaurant%20project" target="_blank">Cook-Book</GithubLink></ProjectTitle>
            <ProjectDescriptionLeft>Recipe collection built on top of the <a href="https://www.themealdb.com/" style={{ textDecoration: 'none', color:'skyblue' }} target="_blank">mealDB</a> API. Users can search for recipes BY name, ingredients or country of origin.</ProjectDescriptionLeft>
          <span>React. API. AJAX</span>
          <ProjectLinksIconsLeft>
            <GithubLink href="https://github.com/viviannrydh/Cooking-API-AJAX-JSON/tree/main/Restaurant%20project" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
            <WebIcon style={{ fontSize: '36px' }} />
          </ProjectLinksIconsLeft>
        </ProjectIntroductionLeft>
        <ProjectImgRight src={Cookingbook} alt="" />
      </ProjectWrapperSecond>
      </a>
    </ProjectsContainer>
  )
}

export default Project
