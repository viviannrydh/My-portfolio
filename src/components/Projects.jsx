import React, { useState} from 'react';
import photochatapp from '../images/photochatapp.png';
import photochatlogin from '../images/photochatlogin.png';
import mathapp from '../images/mathApp.jpg';
import movieAPI from '../images/movieAPI.jpg'
import theShoeStore from '../images/the shoe store.jpg'
import canadaCountryRoad from '../images/CanadaCountryRoad.jpg';
import todos from '../images/todos.jpg'
import amazon from '../images/amazon-clone.jpg'


const Projects = () => {
  const [showFirst, setShowFirst] = useState(false);
  const handleClickFirst = () => {
    setShowFirst(!showFirst)
    console.log('it is clicked')
  }
  return (
    <div className="project-container" id="projects">
      
      <div className="project-wrapper">
        <h1 className="project-title">Projects</h1>
        <div className="project-card first" >
          <div className="project-images">
            <a href="https://github.com/viviannrydh/ProjectLeverans"><img src={theShoeStore} alt="shoeStore" className="project-img" /></a>
          </div>
          {/*<button className="more-btn" onClick={() => handleClickFirst()}>...</button>*/}
          {/*<ToggleDisplay show={showFirst} className="project-intro">*/}
          <div className="project-intro">
            {/*<div className="project-links">
              <button>View Live</button>
              <button>Github</button>
            </div>*/}
            <h3>E-commerce Web Application</h3>
            <p>An e-commerce website with our own backend. Group project in school;</p>
            {/*<p>React,Node.js,Electron,Jest,MongoDB Atlas,DigitalOcean</p>*/}
          </div>
          {/*</ToggleDisplay>*/}
        </div>
        <div className="project-card second ">
          <a href="https://github.com/viviannrydh/Photonic">
            <div className="project-images">
              <img src={amazon} alt="amazon" className="project-img"/>
              {/*<img src={photochatlogin} alt="photochatapp" className="project-img" />
              <img src={photochatapp} alt="photochatapp" className="project-img" /> */}
            </div>
          </a>
          <div className="project-intro">

            {/*<div className="project-links">
              <button>View Live</button>
              <button><a href="https://github.com/viviannrydh/Photonic">Github Page</a></button>
            </div>*/}
            <h3>Social Media Application</h3>
            <p>A social photo sharing app with our own backend.</p>
            {/*<h5>React,Node.js, MongoDB Atlas</h5>*/}
          </div>
        </div>
        <div className="project-card third">
          <div className="project-images">
            <a href="https://canada-immigration.herokuapp.com/"><img src={canadaCountryRoad} alt="canada-country-road" className="project-img" /></a>
          </div>
          <div className="project-intro">

            {/* <div className="project-links">
              <button><a href="https://canada-immigration.herokuapp.com/">View Live</a></button>
              <button><a href="https://github.com/viviannrydh/canada-country-road-immigration">Github Page</a></button>
            </div>*/}
            <a href="https://canada-immigration.herokuapp.com/"><h3> Service Web Application</h3></a>
            <p>A company website built with React and deployed on hiroku.</p>
            {/*<h5>React</h5>*/}
          </div>
        </div>
      </div>
      <div className="project-wrapper second-wrapper">
        <div className="project-card fourth">
          <div className="project-images">
            <a href="https://github.com/viviannrydh/Todo-App"><img src={todos} alt="todoapp" className="math-img" /></a>
          </div>
          <div className="project-intro">

            {/*<div className="project-links">
              <button>View Live</button>
              <button><a href="https://github.com/viviannrydh/Math-app-for-kids">Github Page</a></button>
            </div>*/}
            <a href="https://github.com/viviannrydh/Todo-App"><h3>Todo App</h3></a>
            <p>A todo app that I built with React for my children to plan their daily life.</p>
            {/*<h5>React</h5>*/}
          </div>
        </div>
        <div className="project-card fifth">
          <div className="project-images">
            <a href="https://github.com/viviannrydh/Math-app-for-kids"><img src={mathapp} alt="mathapp" className="math-img" /></a>
          </div>
          <div className="project-intro">
            {/*<div className="project-links">
              <button>View Live</button>
              <button>Github Page</button>
            </div>*/}
            <a href="https://github.com/viviannrydh/Math-app-for-kids"><h3> Math Web App</h3></a>
            <p>A math web application that I built with React for my children to learn multiplication，division，addition and subtraction.</p>
            {/*<h5>React</h5>*/}
          </div>
        </div>
        <div className="project-card sixth">
          <div className="project-images">
            <a href="https://github.com/viviannrydh/movieapi"><img src={movieAPI} alt="movieapp" className="math-img" /></a>
          </div>
          <div className="project-intro">

            {/*<div className="project-links">
              <button>View Live</button>
              <button>Github </button>
            </div>*/}
            <a href="https://github.com/viviannrydh/movieapi"><h3> IMDb API Movie App</h3></a>
            <p>This project is a practice for fetching data from http://www.omdbapi.com ;</p>
            {/*<h5>React, IMDb API</h5>*/}
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Projects
