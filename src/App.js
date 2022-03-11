import React, { useState } from 'react'
import Projects from './components/projects/Project.jsx'
import selfie from './images/selfie.jpg'
import Frontpage from './components/frontpage/Frontpage.jsx'
import Header from './components/header/Header'
import Aboutme from './components/aboutme/Aboutme.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import AnimateBG from './components/animateBG/AnimateBG.jsx'
import { motion } from 'framer-motion';
import Experience from './components/experience/Experience'
import { AppContainer } from './App.style.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx'

function App() {
  return (
    <>
    <Header />
      <div>
        <AnimateBG />
        <Frontpage />
        <Aboutme />
        <Projects />
        <Experience />
        <Contact /> 
        <Footer />
      </div>
      </>
  )
}

export default App;
