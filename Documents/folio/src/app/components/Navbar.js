"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#727D73] fixed w-full top-0 z-50 flex items-center justify-between p-4">
      {/* Logo */}
      <div className="w-50 md:w-60 lg:w-70">
        <Image src="/img/JSM_logo.png" width={190} height={50} alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex mr-4">
        <a href="#home" className="font-helvetica text-white hover:text-[#D0DDD0] mx-2 text-sm md:text-base lg:text-lg">
          Home
        </a>
        <a href="#about" className="font-helvetica text-white hover:text-[#D0DDD0] mx-2 text-sm md:text-base lg:text-lg">
          About
        </a>
        <a href="#project" className="font-helvetica text-white hover:text-[#D0DDD0] mx-2 text-sm md:text-base lg:text-lg">
          Projects
        </a>
        <a href="#contact" className="font-helvetica text-white hover:text-[#D0DDD0] mx-2 text-sm md:text-base lg:text-lg">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#727D73] p-5 space-y-4 text-center transition-transform ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <a href="#home" className="block font-helvetica text-white hover:text-[#D0DDD0] text-sm md:text-base lg:text-lg">
          Home
        </a>
        <a href="#about" className="block font-helvetica text-white hover:text-[#D0DDD0] text-sm md:text-base lg:text-lg">
          About
        </a>
        <a href="#project" className="block font-helvetica text-white hover:text-[#D0DDD0] text-sm md:text-base lg:text-lg">
          Projects
        </a>
        <a href="#contact" className="block font-helvetica text-white hover:text-[#D0DDD0] text-sm md:text-base lg:text-lg">
          Contact
        </a>
      </div>
    </nav>
  );
}
