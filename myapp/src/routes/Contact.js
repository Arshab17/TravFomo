import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import contactImg from '../assets/1.jpg'
const Contact = () => {
  return (
    <>
      <Navbar/>

      <Hero cName="hero-mid" heroImg={contactImg}
        title="Contact" 
    
   
        btnClass = "hide"
    />
    </>
  )
}

export default Contact