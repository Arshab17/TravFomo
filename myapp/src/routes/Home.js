import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
const Home = () => {
  return (
    <>
    <Navbar/>

    <Hero cName="hero" heroImg="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
    title="Your Journey Begins" 
    text ="Choose Your Destination.." 
    buttonText ="Travel Plan"
    url = "/"
    btnClass = "show"
    />
  <Destination/>

    </>
  )
}

export default Home