import React, { useState } from 'react'
import Logo from "../Assets/images/header-logo.svg"
import {NavLinks} from "../Data/Data"
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"

const NavBar = () => {

  const [openNavBar,setOpenNavBar] =useState(false)

  return (
    <header className=' w-full fixed top-0 left-0 z-20 bg-white'>
      <nav className=' flex justify-between items-center max-w-[1440px] m-auto px-16 py-8 max-sm:py-5 relative max-md:px-8'>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>

        <ul className={`flex flex-1 justify-center gap-16 max-lg:flex-col max-lg:w-full max-lg:absolute top-0 left-0 max-lg:bg-white max-lg:text-center max-lg:mt-[68px] max-lg:pb-10 ${openNavBar ? "max-lg:translate-x-0" : "max-lg:translate-x-[100%]"} max-sm:gap-9 max-lg:pt-10`}>
          {NavLinks.map((link)=>(
            <li key={link.label}>
              <a href={link.href} className=' hover:text-orange-500 text-gray-500 text-lg'>{link.label}</a>
            </li>
          ))}
        </ul>
        <div onClick={()=>setOpenNavBar(!openNavBar)}>
          {openNavBar ? <AiOutlineClose className=' text-3xl lg:hidden'/> : <FiMenu className=' text-3xl lg:hidden' />}
        </div>
      </nav>
    </header>
  )
}

export default NavBar