import React from 'react'

const HeroPara = () => {
  return (
    <>
      <div className="absolute z-20 left-4 lg:top-4 sm:left-6 top-10 md:left-[10vw] md:top-10">
        <p className="uppercase lg:text-lg text-xl md:text-lg leading-tight">
          Fashion <br /> that moves <br /> with you.
        </p>
        <div className="h-[1px] w-8 mt-1 bg-black"></div>
      </div>

      <div className="absolute z-20 lg:bottom-10 right-4 bottom-30 sm:right-6 md:bottom-20 md:right-44">
        <p className="uppercase lg:text-lg text-lg md:text-lg leading-tight">
          New <br /> collection <br /> 2026
        </p>
        <div className="h-[1px] w-8 mt-1 bg-black"></div>
      </div>
    </>
  )
}

export default HeroPara