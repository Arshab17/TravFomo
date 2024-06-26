import React from 'react'
import "./HeroStyless.css"

const Hero = (props) => {
  return (
    <>
    <div className={props.cName}>
        <img alt="travel" src={props.heroImg} />
        <video src={props.heroImg} muted autoPlay loop type='video/mp4'></video>
   <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText} </a>
   </div>

 </div>
    </>
  )
}

export default Hero