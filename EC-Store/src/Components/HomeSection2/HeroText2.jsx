import React from 'react'
import { Link } from 'react-router-dom'

const HeroText2 = () => {
  return (
    <div className='lg:h-[20vw]  lg:w-[20vw] w-[40vw] lg:px-20 lg:py-10 lg:m-20 m-3'>
      <p className='uppercase text-lg tracking-widest font-[font2]'>new season</p>
      <h1 className='uppercase lg:text-[5vw] text-[9vw] lg:mt-6 mt-2 lg:mb-6 mb-2 tracking-widest lg:leading-18 leading-10 font-[font1]'>New vibes</h1>
      <p className='text-[1em] font-[font2]'>Discover everything new and now</p>
      <Link to="/newArrival"><button className='text-white hover:bg-gray-800 font-medium lg:text-sm text-[2.5vw] lg:mt-7 mt-4 bg-black lg:h-12 lg:w-55 h-10 w-32'>EXPLORE COLLECTION</button></Link>
    </div>
  )
}

export default HeroText2
