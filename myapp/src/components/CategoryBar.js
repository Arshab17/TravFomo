import React from 'react'

const CategoryBar = () => {
  return (
    <div className='flex '>
        <div className='flex flex-col pt-8 ml-11 cursor-pointer'>
        <span class="material-symbols-outlined">
            pool
            </span>
            <h1 className=' hover:underline'>Swimming Pool</h1>
        </div>

        <div className='flex flex-col pt-8 ml-11 cursor-pointer'>
        <span class="material-symbols-outlined">
            cottage
            </span>
            <h1 className=' hover:underline'>Cottage</h1>
        </div>

        <div className='flex flex-col pt-8 ml-11 cursor-pointer'>
        <span class="material-symbols-outlined">
            king_bed
            </span>
            <h1 className=' hover:underline'>King Bed</h1>
        </div>

        <div className='flex flex-col pt-8 ml-11 cursor-pointer'>
        <span class="material-symbols-outlined">
            apartment
            </span>
            <h1 className=' hover:underline'>Hotel</h1>
        </div>


        <div className='flex flex-col pt-8 ml-11 cursor-pointer'>
        <span class="material-symbols-outlined">
            camping
            </span>
            <h1 className=' hover:underline'>Campsite</h1>
        </div>


        <div className='flex flex-col pt-8 ml-11 cursor-pointer'>
        <span class="material-symbols-outlined">
            kayaking
            </span>
            <h1 className=' hover:underline'>Kayaking</h1>
        </div>

        <div className='flex flex-col pt-8 ml-11 cursor-pointer'>
        <span class="material-symbols-outlined">
            castle
            </span>
            <h1 className=' hover:underline'>Castle</h1>
        </div>

        <div className='flex flex-col pt-8 ml-11 cursor-pointer'>
        <span class="material-symbols-outlined">
            trending_up
            </span>
            <h1 className=' hover:underline'>Trending</h1>
        </div>

        <div className='flex flex-col pt-8 ml-11 cursor-pointer'>
        <span class="material-symbols-outlined">
            details
            </span>
            <h1 className=' hover:underline'>A-Frames</h1>
        </div>

    </div>
  )
}

export default CategoryBar