import React from 'react'
import ButtonApp from './buttonApp'
import Image from 'next/image'
import { barber_1, barber_2 } from '@/components/assets'
import { Facebook, Instagram, Twitter,Linkedin,Youtube } from 'lucide-react';

const Homepage = () => {
  return (
    <section id='home' className='w-full my-32 flex items-center px-8 text-white justify-between'>
        <div className='flex flex-col gap-4 w-2/5'>
            <h1 className='text-4xl font-bold  uppercase'>
                The ultimate <br></br> Convenience <br></br> for busy people
            </h1>
            <p className='text-xl font-medium'>
                Experience The Convenience of Barber Services
            </p>
            <div className='my-6 flex items-center gap-8'>
                <ButtonApp
                label={'Book An Appointment'}
                className={'bg-[#fff] text-black font-bold p-2  cursor-pointer'}
                />
                <ButtonApp
                label={'Browse Services'}
                className={'bg-transparent border border-amber-50 text-white font-bold py-2 px-4 cursor-pointer'}
                />

            </div>
            {/* icons */}
            <div className='flex items-center gap-6 p-4 cursor-pointer '>
               <div className='hover:scale-200 transition-all duration-500 ease-in-out'>
                <Facebook size={25}/>
               </div>
               <div className='hover:scale-200 transition-all duration-500 ease-in-out'>
                <Instagram size={25}/>
               </div>
               <div className='hover:scale-200 transition-all duration-500 ease-in-out'>
                <Twitter size={25}/>
               </div>
               <div className='hover:scale-200 transition-all duration-500 ease-in-out'>
                <Linkedin size={25}/>
               </div>
               <div className='hover:scale-200 transition-all duration-500 ease-in-out'>
                <Youtube size={25}/>
               </div>
            </div>
        </div>
        <div className='relative flex md:-mt-20'>
        <div className='relative rounded-3xl z-50 w-[300px] h-[200px] '>
            <Image src={barber_2} alt={'barber'} className='rounded-4xl p-4 w-[300px] h-[200px] object-cover'/>
        </div>
        <div className='absolute top-20 -right-8  rounded-3xl  w-[300px] h-[200px]'>
            <Image src={barber_1} alt={'barber'} className='rounded-4xl p-4 w-[300px] h-[200px] object-cover'/>
        </div>
        </div>
    </section>
  )
}

export default Homepage