import React from 'react'
import offer from "../Assets/images/offer.svg"

const Special = () => {
  return (
    <div className=' w-screen max-sm:py-12 py-20 px-16 max-md:px-8'>
      <div className=' max-w-[1440px] m-auto flex justify-center items-center gap-10 max-lg:flex-col-reverse max-lg:items-start'>
        <div className=' flex-1'>
          <img src={offer} alt="offer-img" className=' object-cover w-full' />
        </div>
        <div className=' flex-1'>
          <h1 className=' text-5xl font-semibold mb-5'><span className=' text-orange-600'>Special</span> Offer</h1>
          <p className=' text-slate-500 text-lg max-w-md max-lg:max-w-full'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <p className=' text-lg text-slate-500 mt-7 max-w-md'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        
        <div className=' flex gap-4 mt-10 flex-wrap'>
          <button className=' button hover:bg-black duration-300'>View Details</button>
          <button className=' buttonNoBg hover:bg-black outline-0 hover:text-white'>Learn more</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Special