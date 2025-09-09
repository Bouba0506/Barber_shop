import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { whtas } from "./assets";
import ButtonApp from "./buttonApp";

export const Footer = () => {
  return (
    <>
    <div className="flex items-start w-full justify-between flex-wrap mt-14 px-4 py-2">
      <div className="flex flex-col md:items-center space-y-3">
        <h1 className="text-xl font-bold">Barber Shop</h1>
        <p className="text-sm">
          Full-service men&apos;s hair and grooming salons in tilila, Agadir.
        </p>
        <span className="text-xs">7/7 Days: 11:00 AM- 1:00 AM</span>
      </div>
      <div className="flex flex-col md:items-center space-y-3">
        <h1 className="text-xl font-bold">Localisation</h1>
        <p className="text-sm">Cité Tilila, Agadir.</p>
        <span className="text-xs">Agadir 80000, Morocco</span>
        <span className="text-xs">barbershop@barber.com</span>
        {/* icons */}
        <div className="flex items-center gap-6 p-4 cursor-pointer ">
          <div className="hover:scale-200 transition-all duration-500 ease-in-out">
            <Facebook size={25} />
          </div>
          <div className="hover:scale-200 transition-all duration-500 ease-in-out">
            <Instagram size={25} />
          </div>
          <div className="hover:scale-200 transition-all duration-500 ease-in-out">
            <Twitter size={25} />
          </div>
          <div className="hover:scale-200 transition-all duration-500 ease-in-out">
            <Linkedin size={25} />
          </div>
          <div className="hover:scale-200 transition-all duration-500 ease-in-out">
            <Youtube size={25} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:items-center space-y-3">
        <Image src={whtas} alt="whatsapp" width={25} height={25}/>
        <p className="text-sm">
          Questions?
        </p>
        <span className="text-xs">Add us on WhatsApp & send questions to us to answer you.</span>
        <ButtonApp
        label={'+212 695 632 657'}
         className={'bg-[#fff] text-black font-bold p-2  cursor-pointer'}/>
      </div>
    </div>
    <div className="border-t border-white/50 w-full mt-10 py-4">
      <div className="flex items-center justify-center">
        <p className="text-xs">
          © 2025 Barber Shop. All rights reserved.
        </p>
      </div>

    </div>
    </>
  );
};
