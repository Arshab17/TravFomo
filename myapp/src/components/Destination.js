import React from 'react'
import Dest1 from '../assets/1.jpg'
import Dest2 from '../assets/2.jpg'
import Dest3 from '../assets/4.jpg'
import Dest4 from '../assets/5.jpg'
import "./DestinationStyle.css";
import DestinationData from './DestinationData';
const Destination = () => {
  return (
 
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Traveling gives you the opportunity</p>

       <DestinationData
       className = "first-des"
       heading = "Taal Volcano, Batangas" 
       text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
       img1={Dest1}
       img2={Dest2}
       />

    <DestinationData
       className="first-des-reverse"
       heading = "Mt. Daguldul, Batanagas" 
       text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
       img1={Dest3}
       img2={Dest4}
       />
    </div>
    
  
  )
}

export default Destination