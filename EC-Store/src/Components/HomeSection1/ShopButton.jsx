import React from 'react'
import { Link } from 'react-router-dom'

const ShopButton = () => {
  return (
    <div className="absolute bg-[#E8E7E3] bottom-10 left-6 md:bottom-22 md:left-20 flex items-center w-auto md:w-[30vw]">
      <button className="bg-black text-white lg:text-sm md:text-[2vw] h-10 w-28 md:w-29 uppercase">
        Shop Now
      </button>

      <div className="ml-6 md:ml-7 font-semibold">
        <Link
          to="/newArrival"
          className="uppercase lg:text-sm md:text-[2vw] underline"
        >
          explore new in
        </Link>
      </div>
    </div>
  )
}

export default ShopButton