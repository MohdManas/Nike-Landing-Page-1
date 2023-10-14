import React from 'react'
import { customers } from '../Data/Data'

import {BsFillStarFill} from "react-icons/bs"

const CustomerReviews = () => {
  return (
    <div  className=' bg-slate-100 w-screen max-sm:py-12 py-28 px-16 max-md:px-8'>
      <div className=' max-w-[1440px] m-auto'>
        <h1 className=' text-center text-5xl font-semibold mb-5 leading-[60px]'>What Our <span className=' text-orange-600'>Customers Say</span>?</h1>
        <p className=' text-center m-auto text-lg text-slate-500 max-w-md'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        
        <div className=' mt-28 flex justify-center items-center gap-6 max-lg:flex-col max-lg:gap-20'>
          {customers.map((val)=>(
            <div className='text-cente flex-1' key={val.label}>
              <img src={val.img} alt="customerImg" className=' w-32 h-32 rounded-full m-auto mb-8'/>
              <p className=' mb-3 text-center m-auto text-slate-500 text-lg max-w-md'>{val.desc}</p>
              <p className= 'flex justify-center items-center gap-3 text-xl text-slate-500'><BsFillStarFill className=' text-orange-600 text-2xl'/> ({val.rating})</p>
              <h1 className=' text-center mt-2 text-2xl font-semibold'>{val.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews