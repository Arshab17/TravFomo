import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import contactImg from '../assets/1.jpg'
import Footer from '../components/Footer'
const Contact = () => {
  return (
    <>
      <Navbar/>

      <Hero cName="hero-mid" heroImg={contactImg}
        title="Contact" 
    
   
        btnClass = "hide"
    />
   <Footer/>
    </>
  )
}

export default Contact