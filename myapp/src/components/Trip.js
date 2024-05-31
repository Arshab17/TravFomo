import React, { useState } from 'react'
import "./TripStyle.css";
import TripData from './TripData';
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/6.jpg"
import Trip3 from "../assets/8.jpg"
import Data from './Main';


const Trip = () => {
  const [trips,setTrips] = useState(Data);
  return (
    <div className='trip'>
        <h1>Recent Trip</h1>
        <p>You can discover unique
            destination using google maps
         </p>
         <div className='tripcard'>
            <TripData
            image={Trip1}
            heading="Trip in malaysia"
            text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            />

            <TripData
            image={Trip3}
            heading="Trip in malaysia"
            text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            />

            <TripData
            image={Trip2}
            heading="Trip in malaysia"
            text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            />

            {trips.map((trip,index) =>(
              <TripData key={index} 
              image={trip.imgSrc}
              heading={trip.title}
              text = {trip.description}
              fees = {trip.fees}
              />
            ))}
         </div>
        </div>
  )
}

export default Trip