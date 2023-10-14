import React from 'react'
import { products } from '../Data/Data.js'
import {BsFillStarFill} from "react-icons/bs"


const PopularProducts = () => {
  return (
    <section id='products' className=' w-screen max-sm:py-12 py-24 px-16 max-md:px-8'>
      <div className=" max-w-[1440px] m-auto">
        <h1 className=" text-5xl font-semibold">Our <span className='text-orange-500'>Popular</span> Products</h1>

        <p className=' mt-8 w-[38%] text-lg text-slate-600 mb-16 max-md:w-[100%]'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>

        <div className=' grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
          {products.map((val)=>(
            <div key={val.label}>
              <img src={val.img} alt={val.label} className=' object-cover object-center'/>

              <div className=' mt-8'>
                <p className=' flex gap-3 text-xl text-slate-500'><BsFillStarFill className=' text-orange-600 text-2xl'/> ({val.rating})</p>
                <h1 className=' text-[20px] leading-normal font-medium my-3'>{val.label}</h1>
                <p className=' text-orange-600 text-lg font-medium'>{val.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts