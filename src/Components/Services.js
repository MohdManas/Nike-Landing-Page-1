import React from 'react'
import { services } from '../Data/Data'

const Services = () => {
  return (
    <div id='superQuality' className=' w-screen max-sm:py-12 py-28 px-16 max-md:px-8'>
      <div className=' max-w-[1440px] m-auto grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-md:grid-cols-1'>
       {services.map((val)=>(
        <div key={val.label} className='px-10 py-16 rounded-3xl shadow-xl shadow-gray-300'>
          <div className=' bg-orange-600 w-12 h-12 rounded-full flex justify-center items-center'>
            <img src={val.icon} alt="service-ions" />
          </div>
          <h1 className=' text-2xl font-medium my-4'>{val.label}</h1>
          <p className=' text-slate-600 text-lg'>{val.desc}</p>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Services