import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/night.jpg'
import Footer from '../components/Footer'
const About = () => {
  return (
  <>
    <Navbar/>

    <Hero cName="hero-mid" heroImg={AboutImg}
        title="About" 
        
       
        btnClass = "hide"
      />
      <Footer/>

  </>
  )
}

export default About