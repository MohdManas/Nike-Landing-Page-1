import React from 'react'

const Subscribe = () => {
  return (
    <div id='contactus' className=' w-screen px-16 py-28 max-md:px-8'>
      <div className=' max-w-[1440px] m-auto flex justify-center items-center max-lg:flex-col'>
        <div className=' flex-1'>
          <h1 className=" text-5xl font-semibold lg:max-w-lg max-lg:mb-12 leading-[70px]">Sign Up from <span className='text-orange-500'>Updates</span>  & Newsletter</h1>
        </div>
        <div className=' relative flex justify-end items-center flex-1 w-full'>
          <div className='h-[70px] w-[80%] max-lg:w-full'>
            <input type="text" placeholder='Subscribe@nike.com' className=' w-full h-full rounded-full px-8 border pr-40 border-gray-500 outline-none max-sm:pl-5 max-sm:pr-32'/>
          </div>
          <button className=' absolute right-2 bg-orange-600 text-xl text-white py-3 px-8 rounded-full max-sm:px-5 max-sm:text-lg hover:bg-black duration-300'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe