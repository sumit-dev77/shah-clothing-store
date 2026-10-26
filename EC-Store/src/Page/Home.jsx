import React from 'react'
import HeroText from '../Components/HomeSection1/HeroText'
import HeroImg from '../Components/HomeSection1/HeroImg'
import HeroPara from '../Components/HomeSection1/HeroPara'
import ShopButton from '../Components/HomeSection1/ShopButton'
import HomeS2 from '../Components/HomeSection2/HomeS2'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className="relative w-screen h-[150vw] sm:h-[90vw] lg:h-[42vw] bg-[#E8E7E3] overflow-hidden">
        <HeroImg />
        <HeroPara />
        <ShopButton />
      </div>
      <HomeS2 />
    </div>
  )
}

export default Home