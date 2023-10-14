import React from 'react'
import logoFooter from "../Assets/images/footer-logo.svg"
import { footerSocialLinks } from '../Data/Data'
import { footerData } from '../Data/Data'

const Footer = () => {
  return (
    <div className=' bg-black w-full px-12 py-28  max-md:py-16  max-md:px-10'>
      <div className=' max-w-[1440px] m-auto grid grid-cols-4 gap-20 max-xl:gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-y-20'>
        <div className=' max-xl:col-span-2 max-lg:col-span-1'>
          <img src={logoFooter} alt="footerLogo" width={160} />
          <p className=' text-slate-300 my-8'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards.</p>
          <div className=' flex gap-5 items-center mt-8'>
            {footerSocialLinks.map((val)=>(
              <div key={val.alt} className=' w-12 h-12 rounded-full bg-white flex justify-center items-center hover:bg-orange-600 hover:scale-110 duration-300'>
                <val.link className=' text-black text-2xl hover:text-white'/>
              </div>
            ))}
          </div>
        </div>

        {footerData.map((val)=>(
          <div key={val.heading}>
          <h1 className=' text-2xl text-white'>{val.heading}</h1>

          <ul className=' mt-8'>
            {val.footerLinks.map((name)=>(
              <li key={name.link} className=' text-slate-300 text-lg mb-3 hover:text-slate-700 duration-300'><a href={name.href}>{name.link}</a></li>
            ))}
          </ul>
                       
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer