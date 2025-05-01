"use client";

import { useState } from "react";
import Link from "next/link";
import { TfiHeart } from "react-icons/tfi";
import { IoCartOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-[#1d1515] p-4 px-5 fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left section (Cart, Wishlist) */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-white hover:text-amber-600 flex items-center">
            <IoCartOutline className="w-8 h-8" />
          </Link>
          <div className="w-px h-8 bg-white"></div>
          <Link href="/wishlist" className="text-white hover:text-amber-600 flex items-center">
            <TfiHeart className="w-8 h-8" />
          </Link>
        </div>

        {/* Center section (Logo and Navigation Links) */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-7">
          <Link href="/" className="text-white hover:text-amber-600">
            <h5 className="nav font-medium text-md">Home</h5>
          </Link>
          <Link href="/about" className="text-white hover:text-amber-600">
            <h5 className="nav font-medium text-md">About</h5>
          </Link>
          <Link href="/menu" className="text-white hover:text-amber-600">
            <h5 className="nav font-medium text-md">Menu</h5>
          </Link>
          <Link href="/team" className="text-white hover:text-amber-600">
            <h5 className="nav font-medium text-md">Team</h5>
          </Link>
          <Link href="/" className="text-2xl font-bold text-white">
            <img
              className="w-20 h-20 -mt-4"
              src="https://i.postimg.cc/NMZQb7yq/Screenshot-2025-01-16-233447-removebg-preview.png"
              alt="Logo"
            />
          </Link>
          <Link href="/gallery" className="text-white hover:text-amber-600">
            <h5 className="nav font-medium text-md">Gallery</h5>
          </Link>
          <Link href="/shop" className="text-white hover:text-amber-600">
            <h5 className="nav font-medium text-md">Shop</h5>
          </Link>
          <Link href="/blog" className="text-white hover:text-amber-600">
            <h5 className="nav font-medium text-md">Blog</h5>
          </Link>
          <Link href="/contact" className="text-white hover:text-amber-600">
            <h5 className="nav font-medium text-md">Contact</h5>
          </Link>
        </div>

        {/* Right section (Login) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="text-white hover:text-amber-600">
            <IoMdLogIn className="w-8 h-8" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white bg-[#1d1515] p-2 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden p-4 mt-2 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-300">
            <h5 className="nav font-medium text-md">Home</h5>
          </Link>
          <Link href="/about" className="block text-white hover:text-gray-300">
            <h5 className="nav font-medium text-md">About</h5>
          </Link>
          <Link href="/menu" className="block text-white hover:text-gray-300">
            <h5 className="nav font-medium text-md">Menu</h5>
          </Link>
          <Link href="/team" className="block text-white hover:text-gray-300">
            <h5 className="nav font-medium text-md">Team</h5>
          </Link>
          <Link href="/gallery" className="block text-white hover:text-gray-300">
            <h5 className="nav font-medium text-md">Gallery</h5>
          </Link>
          <Link href="/shop" className="block text-white hover:text-gray-300">
            <h5 className="nav font-medium text-md">Shop</h5>
          </Link>
          <Link href="/blog" className="block text-white hover:text-gray-300">
            <h5 className="nav font-medium text-md">Blog</h5>
          </Link>
          <Link href="/contact" className="block text-white hover:text-gray-300">
            <h5 className="nav font-medium text-md">Contact</h5>
          </Link>
          <Link href="/login" className="block text-white hover:text-gray-300">
            <IoMdLogIn className="inline-block mr-2" /> Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
