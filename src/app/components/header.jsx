"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FiUser,
  FiSearch,
  FiHelpCircle,
  FiPhone,
  FiMenu,
  FiHome,
  FiX,
  FiTv,
  FiPower,
  FiCalendar,
} from "react-icons/fi";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full text-white shadow-md bg-black py-5 md:py-0">
      <div className="max-w-[1170px] mx-auto flex items-center justify-between px-5 md:px-0">
        
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/movex-logo-white.png"
            alt="Movex Logo"
            width={130}
            height={40}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-sm font-medium gap-3">
          <a href="movies" className="hover:text-red-500 hover:bg-white p-5 uppercase transition 1s ease-in">Movies</a>
          <a href="#" className="hover:text-red-500 hover:bg-white p-5 uppercase transition 1s ease-in">TV Shows</a>
          <a href="#" className="hover:text-red-500 hover:bg-white p-5 uppercase transition 1s ease-in">Trending</a>
          <a href="#" className="hover:text-red-500 hover:bg-white p-5 uppercase transition 1s ease-in">My List</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 md:gap-4">
          {/* Search (only on lg+) */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search movie..."
              className="bg-zinc-800 text-sm text-white rounded-md py-2 px-4 pl-10 outline-none focus:ring-1 focus:ring-red-500"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          </div>

          {/* Icons (always visible) */}
          <button title="Help" className="text-3xl md:text-xl hover:text-red-500 transition">
            <FiHelpCircle />
          </button>
          <button title="Contact" className="text-3xl md:text-xl hover:text-red-500 transition">
            <FiPhone />
          </button>
          <button title="Profile" className="text-3xl md:text-2xl hover:text-red-500 transition">
            <FiUser />
          </button>

          {/* Mobile Menu Toggle */}
          {/* <button
            className="md:hidden text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 text-sm font-medium flex flex-col gap-4 px-6 py-6 border-t border-zinc-800">
          <a href="#" className="hover:text-red-500 transition">Home</a>
          <a href="#" className="hover:text-red-500 transition">Movies</a>
          <a href="#" className="hover:text-red-500 transition">TV Shows</a>
          <a href="#" className="hover:text-red-500 transition">Trending</a>
          <a href="#" className="hover:text-red-500 transition">My List</a>
        </div>
      )} */}


      <div className="fixed bottom-0 w-full rounded-lg block md:hidden">
        <ul className="flex align-items-center justify-between bg-white rounded-[15px_15px_0_0] mx-auto p-3 py-0">
          <li className="translate-y-[-.5rem] flex flex-col rounded-lg text-center pt-2 border-t-8 border-red-800"><a href="/" className="bg-red-800 size-14 text-white rounded-full shadow-[0_1px_20px_red] flex justify-center mx-auto align-items-center text-2xl"><FiHome className="m-auto size-6" /></a>
          <span className="text-base text-black font-semibold mt-1">Home</span></li>
           <li className="translate-y-[-.5rem] flex flex-col rounded-lg text-center pt-2 border-t-8 border-transparent hover:border-red-800"><a href="/" className="bg-blue-800 size-14 text-white rounded-full shadow-[0_1px_20px_blue] flex justify-center mx-auto align-items-center text-2xl"><FiTv className="m-auto size-6" /></a><span className="text-base text-black font-semibold mt-1">TV</span></li>
           <li className="translate-y-[-.5rem] flex flex-col rounded-lg text-center pt-2 border-t-8 border-transparent hover:border-red-800"><a href="/" className="bg-blue-800 size-14 text-white rounded-full shadow-[0_1px_20px_blue] flex justify-center mx-auto align-items-center text-2xl"><FiPower className="m-auto size-6" /></a><span className="text-base text-black font-semibold mt-1">Power</span></li>
           <li className="translate-y-[-.5rem] flex flex-col rounded-lg text-center pt-2 border-t-8 border-transparent hover:border-red-800"><a href="/" className="bg-blue-800 size-14 text-white rounded-full shadow-[0_1px_20px_blue] flex justify-center mx-auto align-items-center text-2xl"><FiHelpCircle className="m-auto size-6" /></a><span className="text-base text-black font-semibold mt-1">Help</span></li>
           <li className="translate-y-[-.5rem] flex flex-col rounded-lg text-center pt-2 border-t-8 border-transparent hover:border-red-800"><a href="/" className="bg-blue-800 size-14 text-white rounded-full shadow-[0_1px_20px_blue] flex justify-center mx-auto align-items-center text-2xl"><FiCalendar className="m-auto size-6" /></a><span className="text-base text-black font-semibold mt-1">Calendar</span></li>
        </ul>
      </div>
    </header>
  );
}
