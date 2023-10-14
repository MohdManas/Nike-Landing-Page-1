import React from 'react'

const Copyrights = () => {
  return (
    <div className=' bg-black text-white w-full px-12 py-10'>
        <div className=' max-w-[1440px] m-auto flex justify-between items-center gap-40 max-md:flex-col max-md:gap-1'>
            <p className=' text-slate-300 first-letter:text-xl tracking-wide'>&copy; Copyright.All rights reserved.</p>
            <p className=' text-slate-300'>Terms & Conditions.</p>
        </div>
    </div>
  )
}

export default Copyrights