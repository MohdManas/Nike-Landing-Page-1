import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import shoe8 from "../Assets/images/shoe8.svg"

const SuperQuality = () => {
  return (
    <section id='aboutus' className=' w-screen max-sm:py-12 py-28 px-16 max-md:px-8'>
      <div className=' max-w-[1440px] m-auto grid grid-cols-2 gap-10 max-lg:grid-cols-1'>
        <div>
          <h1 className=" text-5xl font-semibold leading-[65px]">We Provide You
          <span className='text-orange-500'> Super <br /> Quality</span> Shoes
          </h1>

          <p className=' my-5 text-slate-500 text-lg max-lg:max-w-[100%] max-w-lg'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className=' my-5 text-slate-500 text-lg max-w-lg'>Our dedication to detail and excellence ensures your satisfaction</p>

          <button className='button mt-12 hover:bg-black duration-300'>Shop now <BsFillArrowRightCircleFill /></button>
        </div>
        

        <div>
          <img src={shoe8} alt="SuperShoe8" className=' m-auto'/>
        </div>
      </div>
    </section>
  )
}

export default SuperQuality