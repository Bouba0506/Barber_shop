'use client'
import React, { useState } from 'react'
import { Contactservice } from './contactservice'


const ButtonApp = ({label,className}) => {
  const [openpopup,setOpenpopup] = useState(false)

  return (
    <>
    <button className={`flexbg-[#fff]  ${className}`}
    onClick={()=>setOpenpopup(true)}
    >
        {label}
    </button>
    {
      openpopup && 
      <div className='fixed md:w-2/5 rounded-2xl py-4 bg-[#eae2e2] top-20 md:left-80 md:m-0 m-1 text-black font-bold z-50 px-4 flex flex-col space-y-4 items-center justify-center'>
        <div className='flex w-full items-center justify-between'>
          <h1>Hello</h1>
          <button onClick={()=>setOpenpopup(false)}>X</button>
        </div>
        <Contactservice/>
      </div>
    }
    </>
  )
}

export default ButtonApp