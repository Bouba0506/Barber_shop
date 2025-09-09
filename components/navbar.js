"use client";
import React, { useState } from "react";
import ButtonApp from "./buttonApp";
import { AlignLeft, X } from "lucide-react";

const navlinks = [
  { name: "Home", link: "#home" },
  { name: "Packages", link: "#packages" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex justify-between items-center px-8">
      <span className="text-2xl font-bold">Barber</span>
      <div className="w-full px-8 py-4 md:flex hidden items-center justify-between">
        <div className="flex items-center space-x-6 cursor-pointer">
          {navlinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.link}
                className="text-gray-50 cursor-pointer hover:text-gray-700 text-xl"
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <ButtonApp
          label={"Book An Appointment"}
          className={
            "flex object-center bg-[#fff] text-black font-bold p-2 rounded-4xl cursor-pointer"
          }
        />
      </div>
      <div
        onClick={toggleNavbar}
        className="md:hidden flex bg-black cursor-pointer"
      >
        {isOpen ? <X size={25} /> : <AlignLeft size={25} />}
      </div>
      {/* responsive navbar */}

      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0 "
        } absolute top-8 left-0 bg-white py-4  w-full flex flex-col items-center  space-y-4 text-lg transform transition-transform`}
        style={{ transition: "transform 0.5s ease, opacity 0.5s ease" }}
      >
        {navlinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-gray-300 text-lg"
          >
            {link.name}
          </a>
        ))}

        {/* <ButtonApp
          label={"Book An Appointment"}
          className={
            "bg-white text-black font-bold px-4 py-2 rounded-full cursor-pointer"
          }
        /> */}
      </div>
    </div>
  );
};

export default Navbar;
