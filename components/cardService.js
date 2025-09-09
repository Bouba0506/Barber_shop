import React from 'react'
import { cardlist } from './constant'
import Image from 'next/image'
import ButtonApp from './buttonApp'
import { barber_1, barber_2, barber_3 } from './assets'
import { SliderImage } from './sliderImage'

export const CardService = () => {
  return (
    <div className='my-10 mx-auto'>
        <div className='flex flex-col items-center flex-wrap w-full bg-white text-black py-10'>
            <div className='flex flex-col items-center md:w-2/5 mx-auto justify-center space-y-4'>
            <h1 className='text-3xl font-bold uppercase'>
                Browse our services
            </h1>
            <p className='text-xl text-center'>
            Need a service? We have a wide range of services to suit your needs. From haircuts to hair coloring, we have something for everyone.
            </p>
        </div>
        <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-8 mt-8'>
            {cardlist.map((items,index)=>
                <div key={index} className='flex items-center mx-auto gap-8 w-80 my-4'>
                    <div className='relative w-28 h-20'>
                        <Image src={items.image} alt='barber' className='object-cover md:w-20 h-20'/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-xl font-bold uppercase'>{items.title}</h1>
                        <p className='text-sm'>{items.description}</p>
                        <span className='text-xl font-bold'>{items.price} USD</span>
                    </div>


                </div>
            )}
    
        </div>
        <section id='contact' className='flex items-center justify-center w-full'>
            <ButtonApp label={'Book an Appointment'} className={'bg-[#000] text-white font-bold py-2 px-4 cursor-pointer rounded-full'} />
        </section>  

        
        </div>
      <div className='relative w-full'>
            <div className='w-full h-screen  '>
                <Image src={barber_3} alt='barber' className='object-cover w-full h-full'/>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-[#0b09092a] '>
               <div className='flex flex-col mt-32 items-center justify-center space-y-2 h-[200px]'>
                 <h4 className='text-2xl text-center uppercase'>The Ultimate Convenience for Busy People <br></br> Experience The Convenience of Barber Services</h4>
                <ButtonApp label={'Book an Appointment'} className={'bg-[#000] text-white font-bold py-2 px-4 cursor-pointer rounded-full'} />
               </div>
            </div>
        </div>
        {/* <SliderImage/> */}
    </div>
  )
}
