import img1 from '../assets/9.jpg';
import img2 from '../assets/8.jpg';
import img3 from '../assets/10.jpg';
import { useState ,useEffect} from "react";

import React from 'react'
import Properties from './Properties';

// const Main = () => {
       
// const[hotels,setHotels] = useState([])

// // <---API start--->
//   const getHotels = async () =>{
//     const url = 'https://airbnb13.p.rapidapi.com/search-geo?ne_lat=52.51&ne_lng=13.41&sw_lat=52.41&sw_lng=13.31&checkin=2025-01-12&checkout=2025-01-13&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
// const options = {
// method: 'GET',
// headers: {
// 'x-rapidapi-key': '695d0c090dmshc29ccfb07489950p1115dajsna36b57899e09',
// 'x-rapidapi-host': 'airbnb13.p.rapidapi.com'
// }
// };

// try {
// const response = await fetch(url, options);
// const data = await response.json();
// setHotels(data.results);
// } catch (error) {
// console.error(error);
// }
// }

// useEffect(() =>{
// getHotels()   
// },[])
// <---API end--->


const Data = [

    {
        id:1,
        imgSrc:img1,
        title:'Bora Bora',
        location:'New Zealand',
        grade:'Cultural Relax',
        fees:'₹1000',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text.',

    },

    {
        id:2,
        imgSrc:img2,
        title:'Bora Bora',
        location:'New Zealand',
        grade:'Cultural Relax',
        fees:'₹1000',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. ',

    },

    {
        id:3,
        imgSrc:img3,
        title:'Bora Bora',
        location:'New Zealand',
        grade:'Cultural Relax',
        fees:'₹1000',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. ',

    },
    {
        id:4,
        imgSrc:img3,
        title:'Bora Bora',
        location:'New Zealand',
        grade:'Cultural Relax',
        fees:'₹1000',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. ',

    }


    


]

//   return (
//     <div><Properties hotels={hotels}/></div>
//   )
// }



export default Data
 



