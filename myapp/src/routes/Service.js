import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import serviceImg from '../assets/2.jpg'
const Service = () => {
  return (
    <>
    <Navbar/>

<Hero cName="hero-mid" heroImg={serviceImg}
    title="Serivce" 
    
   
    btnClass = "hide"
  />
    </>
  )
}

export default Service