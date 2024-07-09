import React from "react";
// import Signup from "./Signup";
import Navbar from "./Navbar";
import CategoryBar from "./CategoryBar";
// import img1 from "../assets/1.jpg";
import Data from './Main';
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

const Properties = () => {
  // const {hotels = [] } = props
  const [hotels,setHotels] = useState(Data);



  return (
    <>
      <Navbar />
      <div className="mt-24">
        <CategoryBar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {hotels.map((hotel) => (
    
<Link to="/details" state={{hotel:hotel}} key={hotel.id}>

<div className="  max-w-sm rounded-t-xl overflow-hidden shadow-lg w-72  mt-9 ml-11 mb-5">
        <img
          className="w-72 h-72 rounded-xl"
          src={hotel.imgSrc}
          alt="Sunset in the mountains"
        />
        <div clasNames="py-4">
          <div className="font-semibold  ">{hotel.title}</div>
          <p className="text-gray-700 text-sm"> {hotel.location}</p>
          <h1 className="text-gray-500">{hotel.description}</h1>
          <h1 className="font-semibold">{hotel.fees}</h1>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{hotel.grade}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div> 
      </Link>
      
    ))}
</div>
      
    </>
  );
};

export default Properties;
