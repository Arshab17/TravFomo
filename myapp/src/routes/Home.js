import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
import waterfall from '../assets/Desert.mp4'
import '../components/homeStyle.css'
import DestinationFilter from '../components/DestinationFilter'
const Home = () => {
  return (
    <>
    <Navbar/>

    <Hero cName="hero" heroImg={waterfall}
    text ="Choose Your Destination.." 
    buttonText ="Travel Plan"
    url = "/"
    btnClass = "show"
    
    />
    <DestinationFilter/>
  <Destination/>
  <Trip/>
  <Footer/>

    </>
  )
}

export default Home