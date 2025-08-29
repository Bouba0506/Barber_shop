'use client'
import React, { useEffect, useState } from 'react'
import { barber_1, barber_2, barber_3 } from './assets'
import Image from 'next/image'

const slider=[barber_1,barber_2,barber_1,barber_2,barber_3]
export const SliderImage = () => {
  const [curr,setCurr]=useState(0)

  // slider semi automatique
  
  const prev=()=>(
    setCurr((curr)=>(curr===0 ? slider.length-1:curr-1))
  )

  const next=()=>(
    setCurr((curr)=>(curr===slider.length-1?0:curr+1))
  )

// slider automatique
//  useEffect(()=>{
//   const interval=setInterval(()=>{
//     setCurr((curr)=>(curr===slider.length-1?0:curr+1))
//   },2000)
//   return ()=>clearInterval(interval)

//  },[])

  return (
    <div className='relative w-full my-10 px-8 flex overflow-hidden'>
      <div className='flex gap-2 overflow-hidden' >
        {
        slider.map((items,index)=>
          <div key={index} 
         className='w-full flex h-[400px] transition-transform ease-in-out duration-700 '
          style={{transform:`translateX(-${curr*100}%)`}}
          >
              <Image src={items} alt='barber'/>
          </div>
        )
      }

       {/* Boutons manuels */}
      <button 
        onClick={prev} 
        className='absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full'
      >
        ‹
      </button>
      <button 
        onClick={next} 
        className='absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full'
      >
        ›
      </button>
      </div>

    </div>
  )
}
