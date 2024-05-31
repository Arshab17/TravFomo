import React from 'react'
// import { HiFilter } from 'react-icons/hi';

const DestinationFilter = () => {
  return (
    <div className='cardDiv grid'>
        <div className='destinationInput'>
            <label htmlFor='city'>Search your destination:</label>
            <div className='input flex'>
                <input type='text' placeholder='Destination..'/>
                <i class="fa-solid fa-location-dot"></i>
            </div>
        </div>
        <div className='dateInput'>
            <label htmlFor='date'>Select your date:</label>
            <div className='input flex'>
                <input type='date' />
                <i class="fa-solid fa-calendar-days"></i>
            </div>
        </div>
        <div className='priceInput'>
            <div className='label_total flex'>
            <label htmlFor='price'>Max Price:</label>
            <h3 className='budget'>₹10000</h3>
            </div>
            <div className='input flex'>
                <input type='range' min='1000' max="10000"/>
                <i class="fa-solid fa-tag"></i>
            </div>
        </div>
        <div className='searchOption flex'>
            <div className="icon">
            <i class="fa-solid fa-filter"></i>
                <span>More Filter</span>
            </div>
        </div>
    </div>
  )
}

export default DestinationFilter