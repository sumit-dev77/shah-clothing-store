import React from 'react'
import { Link } from 'react-router-dom'

const BlackCom = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 lg:gap-16 xl:gap-24'>
     <div className='text-white flex lg:w-[25vw] w-full lg:gap-8 gap-14'>
            <img className='lg:h-[13vw] h-[35vw] lg:w-[10vw] w-[25vw] object-cover' src="https://img.freepik.com/premium-photo/ecommerce-photo-black-tshirt-man_969419-951.jpg" alt=''/>
    
       <div className=''>
         <h2 className='text-3xl font-semibold'>MEN</h2>
        <p className='font-normal text-xl mt-4 lg:mb-6 mb-3 '>Elevated everyday essentials</p>
        <Link to="/men" className='lg:text-[1.2vw] text-xl font-semibold uppercase'>Shop Men </Link>
        <div className='h-[0.1vw] w-24 bg-white mt-1'></div>
       </div>
      </div>
     
      <div className='text-white flex lg:w-[25vw] w-full lg:gap-8 gap-14'>
            <img className='lg:h-[13vw] h-[35vw] lg:w-[10vw] w-[28vw] object-cover' src="https://thumbs.dreamstime.com/b/fashion-style-model-black-shirt-pants-posing-studi-studio-gray-background-80528899.jpg" alt=''/>
    
       <div className=''>
         <h2 className='text-3xl font-semibold'>WOMEN</h2>
        <p className='font-normal text-xl mt-4 lg:mb-6 mb-3 '>Effertless style for every you</p>
        <Link to="/women" className='lg:text-[1.2vw] text-xl font-semibold uppercase'>Shop women </Link>
        <div className='h-[0.1vw] w-33 bg-white mt-1'></div>
       </div>
      </div>
      <div className='text-white flex lg:w-[25vw] w-full lg:gap-8 gap-14'>
            <img className='lg:h-[13vw] h-[35vw] lg:w-[10vw] w-[26vw] object-cover' src="https://www.creativefabrica.com/wp-content/uploads/2023/07/03/Kid-Wearing-Black-Tshirt-Mockup-Graphics-73574971-1.png" alt=''/>
    
       <div className=''>
         <h2 className='text-3xl font-semibold'>KIDS</h2>
        <p className='font-normal text-xl mt-4 lg:mb-6 mb-3 '>Comfort meet cool everyday</p>
        <Link to="/kids" className='lg:text-[1.2vw] text-xl font-semibold uppercase'>Shop kids </Link>
        <div className='h-[0.1vw] w-25 bg-white mt-1'></div>
       </div>
      </div>
      
      
    </div>
  )
}

export default BlackCom
