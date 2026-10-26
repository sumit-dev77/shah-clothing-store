import React from 'react'
import HeroText2 from './HeroText2'

const HeroImg2 = () => {
  return (
    <div className='relative lg:h-[35vw] h-[60vw] w-full bg-[#C7C6C4] overflow-hidden'>
      <img className='absolute left-[25%] h-[55vw] lg:h-[36vw] lg:-mt-4 overflow-hidden mt-5' src="./photos/modelimg.png" alt=""/>
      <HeroText2/> 
    </div>
  )
}

export default HeroImg2
