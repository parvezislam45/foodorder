'use client'
import Link from 'next/link';
import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa6';
import { GrSkype } from 'react-icons/gr';
import { IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#1d1515] via-amber-900 to-amber-950 text-white py-10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d1515] to-transparent opacity-10 animate-pulse"></div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="">
            <Link href="/">
              <div className="flex items-center space-x-3">
                <img src="https://i.postimg.cc/NMZQb7yq/Screenshot-2025-01-16-233447-removebg-preview.png" alt="Restaurant Logo" className="w-44 h-40" />
                
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <Link href="/menu">
              <div className="hover:text-amber-500 transition duration-300 text-2xl font-bold seaHeading">Menu</div>
            </Link>
            <Link href="/about">
              <div className="hover:text-amber-500 transition duration-300 text-2xl font-bold seaHeading">About Us</div>
            </Link>
            <Link href="/contact">
              <div className="hover:text-amber-500 transition duration-300 text-2xl font-bold seaHeading">Contact</div>
            </Link>
            <Link href="/reservations">
              <div className="hover:text-amber-500 transition duration-300 text-2xl font-bold seaHeading">Reservations</div>
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center items-center">
            <div
              rel="noopener noreferrer"
              className="p-2 hover:text-amber-700 rounded-full transition duration-300"
            >
             
              <FaFacebook className="w-10 h-7"/>
            </div>
            <div
              rel="noopener noreferrer"
              className="p-2 hover:text-amber-700 rounded-full transition duration-300"
            >
              <AiFillTwitterCircle className='w-11 h-8' />
            </div>
            <div
              rel="noopener noreferrer"
              className="p-2 hover:text-amber-700 rounded-full transition duration-300"
            >
              <BiLogoInstagramAlt className='w-11 h-8 rounded-full' />
            </div>
            <div
              rel="noopener noreferrer"
              className="p-2 hover:text-amber-700 rounded-full transition duration-300"
            >
              <GrSkype className='w-10 h-7 rounded-full'/>
            </div>
            <div
              rel="noopener noreferrer"
              className="p-2 hover:text-amber-700 rounded-full transition duration-300"
            >
              <IoLogoLinkedin className='w-10 h-7 rounded-full' />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white"></div>

        {/* Bottom Section */}
        <div className="text-center text-white  text-md about">
          &copy; {new Date().getFullYear()} Full Web Site Design By Parvez Islam.
        </div>
        <div className="text-center text-white text-md about">
          Full Stack Web Developer
        </div>
      </div>
    </footer>
    );
};

export default Footer;