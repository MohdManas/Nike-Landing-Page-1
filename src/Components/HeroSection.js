import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import {heroData} from "../Data/Data.js"
import heroShoe from "../Assets/images/big-shoe1.png"

const HeroSection = () => {
  return (
    <section id='home' className=' w-full min-h-screen overflow-x-hidden mt-[76px] pt-28 max-sm:pt-14'>
      <div className='herosectionGrid max-xl:gap-y-10 '>
        <div className=' max-xl:px-16 px-16  max-md:px-8'> 
          <p className=' text-orange-500 text-xl'>Our Summer collections</p>
          <h1 className='herosectionH1'>
            <span className=' bg-white pr-10'>The New Arrival</span>
            <br />
            <span className=' text-orange-500'>Nike</span> Shoes
          </h1>

          <p className=' my-8 text-lg text-gray-500 leading-8 w-[60%] max-md:w-[100%]'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

          <button className='button hover:bg-black duration-300'>Shop now <BsFillArrowRightCircleFill /></button>

          <div className=' mt-20 w-full flex gap-12 flex-wrap'>
           {heroData.map((val)=>(
            <div key={val.label}>
              <h1 className=' text-4xl font-bold'>{val.number}</h1>
              <p className=' text-slate-600'>{val.label}</p>
            </div>
           ))}
          </div>

        </div>

        <div className=' h-[100%] bg-heroShowcase flex justify-center items-center'>
          <img src={heroShoe} alt="hero-shoe" className=' object-cover object-center'/>
        </div>
      </div>
    </section>
  )
}

export default HeroSection