import React from 'react';
import Todo from '../../images/todos.jpg';
import Math from '../../images/mathApp.jpg';
import Movie from '../../images/movieAPI.jpg';
import CanadaCountryRoad from '../../images/CanadaCountryRoad.jpg'
import Amazon from '../../images/amazon-clone.jpg';
import Cookingbook from '../../images/cooking.png';
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
  GithubLink
} from './Project.style';

import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Language';

const Project = () => {
  return (
    <ProjectsContainer id="projects">
      <Title><span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#60;</span> Projects that I have built  <span style={{ color: 'rgba(77, 217, 248, 1)' }}>&#47;&#62; </span><hr style={{ borderColor: 'rgba(57, 55, 55, 1)', borderWidth: '0.5px' }}/></Title>
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectImg src={Todo} alt="Todo Web Image" />
        <ProjectIntroduction>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/Todo-App" target="_blank" >Todo App</GithubLink></ProjectTitle>
          <ProjectDescription>A Todo App that I created for my children to keep on track of their schedules. In the app,
          the Done key could be pressed to remove the completed task from the task list,
          or the task could be deleted directly from the task list by clicking on the trash button.</ProjectDescription>
          <span>React</span> 
          <ProjectLinksIcons>
            <GithubLink href="https://github.com/viviannrydh/Todo-App" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink> 
            <GithubLink href="https://viviannrydh.github.io/Todo-App/" target="_blank"><WebIcon style={{ fontSize: '36px' }} /></GithubLink>
          </ProjectLinksIcons>
        </ProjectIntroduction>   
      </ProjectWrapper>
      <ProjectWrapperSecond
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectIntroductionLeft>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/Math-app-for-kids" target="_blank">Math App</GithubLink></ProjectTitle>
          <ProjectDescriptionLeft>A Math App that I created for my children to practise on addition, subtraction, multiplication, division. 
          In the app, it also can calculate
          how many correct answers kids have got to motivate them to keep going.</ProjectDescriptionLeft>
          <span>React</span>
          <ProjectLinksIconsLeft>
            <GithubLink href="https://github.com/viviannrydh/Math-app-for-kids" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
            <GithubLink href="https://viviannrydh.github.io/Math-app-for-kids/" target="_blank"><WebIcon style={{ fontSize: '36px' }} /></GithubLink>
          </ProjectLinksIconsLeft>
        </ProjectIntroductionLeft>
        <ProjectImgRight src={Math} alt="" />
      </ProjectWrapperSecond>
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      
      >
        <ProjectImg src={Movie} alt="" />
        <ProjectIntroduction>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/movieapi" target="_blank">IMDb API Movie App</GithubLink></ProjectTitle>
          <ProjectDescription>A movie app was created for fetching and searching for movies. and all the data are from the IMDb Movie API, which was sourced in the website http://www.omdbapi.com ;</ProjectDescription>
          <span>React, API</span>
          <ProjectLinksIcons>
            <GithubLink href="https://github.com/viviannrydh/movieapi" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
            <WebIcon style={{ fontSize: '36px' }} />
          </ProjectLinksIcons>
        </ProjectIntroduction>
      </ProjectWrapper>
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
      <ProjectWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectImg src={Amazon} alt="" />
        <ProjectIntroduction>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/amazon-clone" target="_blank">Amazon Mini-clone</GithubLink></ProjectTitle>
          <ProjectDescription>A movie app was created for fetching and searching for movies. and all the data are from the IMDb Movie API, which was sourced in the website http://www.omdbapi.com ;</ProjectDescription>
          <span>React. Firebase</span>
          <ProjectLinksIcons>
            <GithubLink href="https://github.com/viviannrydh/amazon-clone" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
            <WebIcon style={{ fontSize: '36px' }} />
          </ProjectLinksIcons>
        </ProjectIntroduction>
      </ProjectWrapper>
      <ProjectWrapperSecond
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ProjectIntroductionLeft>
          <ProjectTitle><GithubLink href="https://github.com/viviannrydh/Cooking-API-AJAX-JSON/tree/main/Restaurant%20project" target="_blank">Cook-Book</GithubLink></ProjectTitle>
          <ProjectDescriptionLeft>A cookbook with data fetched from API on website https://www.themealdb.com/. Users could search for recipes through entering dish name, selecting main ingredients or cuisine.</ProjectDescriptionLeft>
          <span>React. API. AJAX</span>
          <ProjectLinksIconsLeft>
            <GithubLink href="https://github.com/viviannrydh/Cooking-API-AJAX-JSON/tree/main/Restaurant%20project" target="_blank"><GitHubIcon style={{ fontSize: '30px' }} /></GithubLink>
            <WebIcon style={{ fontSize: '36px' }} />
          </ProjectLinksIconsLeft>
        </ProjectIntroductionLeft>
        <ProjectImgRight src={Cookingbook} alt="" />
      </ProjectWrapperSecond>
      
    </ProjectsContainer>
  )
}

export default Project
