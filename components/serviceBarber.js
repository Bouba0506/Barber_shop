import Image from 'next/image'
import React from 'react'
import { barber_1, barber_2 } from './assets'
import { CardService } from './cardService'

const ServiceBarber = () => {
  return (
    <section>
        <div className='px-8 flex items-center justify-between py-10'>
        <div className=' flex flex-col space-y-4 w-1/4'>
            <h1 className='text-3xl leading-8 font-bold uppercase'>
                Your personal  Barber Service at your home
            </h1>
            <p className='text-xm font-medium'>
                Experience The Convenience of Barber Services at your home and enjoy the convenience of your home
            </p>
           
        </div>
        <div className='relative flex items-center'>
        <div className='relative w-[400px] h-[400px] '>
            <Image src={barber_2} alt='barber' className='object-cover w-[400px] h-[400px]'/> 
        </div>
        <div className='flex flex-col w-24 p-2 rounded-bl-2xl uppercase bg-white text-black absolute top-0 right-0'>
            <span className='text-xl font-bold'>10 +</span>
            <span className='text-xs font-bold'> Years EXPERIENCE</span>      
        </div>
        <div className='flex flex-col w-24 p-2 rounded-tr-2xl uppercase bg-white text-black absolute bottom-0 left-0'>
            <span className='text-xl font-bold'>99%</span>
            <span className='text-xs font-bold'> customer</span>
            <span className='text-xs font-bold'>Satisfaction</span>      

        </div>
        </div>

    </div>
    <CardService/>
    </section>
  )
}

export default ServiceBarber