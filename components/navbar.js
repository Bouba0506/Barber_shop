"use client"
import React, { useState } from 'react'
import ButtonApp from './buttonApp'
import { AlignLeft, X } from 'lucide-react';


const navlinks=[
    {name:'Home',link:'#home'},
    {name:'Packages',link:'#packages'},
    {name:'About',link:'#about'},
    {name:'Contact',link:'#contact'},
]

const Navbar = () => {

    const [isOpen, setIsOpen]=useState(false)

    const toggleNavbar=()=>{
        setIsOpen(!isOpen)
    }

  return (
    <>
    <div className='w-full px-8 py-4 md:flex hidden items-center justify-between'>
        <span className='text-2xl font-bold'>Barber</span>
        <div className='flex items-center space-x-6 cursor-pointer'>
            {
                navlinks.map((link,index)=>{
                    return (
                        <a key={index} href={link.link} className='text-gray-50 cursor-pointer hover:text-gray-700 text-xl'>{link.name}</a>
                    )
                })
            }

        </div>
            <ButtonApp
            label={'Book An Appointment'}
            className={'flex object-center bg-[#fff] text-black font-bold p-2 rounded-4xl cursor-pointer'}
            />
            <div onClick={toggleNavbar} className='flexbg-black cursor-pointer'>
                {isOpen? <X size={25}/>:<AlignLeft size={25}/>}
            </div>
    </div>
    {/* responsive navbar */}
    
        {/* <div className={`${isOpen ? "opacity-0 top-1":"opacity-100 -top-1"} fixed inset-0 flex flex-col items-center justify-center bg-red-600 z-50  space-y-4`} >
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              onClick={() => setIsOpen(false)}
              className="text-gray-50 hover:text-gray-300 text-lg"
            >
              {link.name}
            </a>
          ))}

          <ButtonApp
            label={"Book An Appointment"}
            className={
              "bg-white text-black font-bold px-4 py-2 rounded-full cursor-pointer"
            }
          />
        </div> */}
      
    </>
  )
}

export default Navbar