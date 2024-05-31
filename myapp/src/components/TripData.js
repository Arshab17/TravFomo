import React from 'react'
import "./TripStyle.css"
import { HiOutlineLocationMarker } from "react-icons/hi";

const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img alt={props.heading} src={props.image}/>
            <h4>
            <HiOutlineLocationMarker className='icon'  />
              {props.heading}</h4>
            <h5>{props.fees}</h5>
            <p>{props.text}</p>
        </div>
        </div>
  )
}

export default TripData
