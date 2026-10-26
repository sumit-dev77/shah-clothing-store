import React from 'react'
import HeroText from './HeroText'

const HeroImg = () => {
  return (
    <>
      <div className="absolute lg:top-4 top-48 left-0 w-full flex justify-center z-0">
        <HeroText />
      </div>

      <div className="absolute top-[60px] sm:top-[25px] left-1/2 -translate-x-1/2 sm:left-[40%] sm:translate-x-0 z-10">
  <img
    className="lg:h-[40vw] h-[120vw] lg:w-auto object-contain "
    src="./photos/heroIMG.png"
    alt="Background"
  />
</div>
    </>
  )
}

export default HeroImg