"use client";

import { useState } from "react";
import Link from "next/link";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    
      <nav className="bg-[#1d1515] p-4 px-5">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left section (Cart, Wishlist) */}
        <div className="flex space-x-4">
          <Link href="/cart" className="text-white hover:text-gray-300">
            Cart
          </Link>
          <Link href="/wishlist" className="text-white hover:text-gray-300">
            Wishlist
          </Link>
        </div>

        {/* Center section (Home, About, Menu, Logo, Gallery, Contact Us) */}
        <div className="flex-1 flex justify-center items-center space-x-7">
          <Link href="/" className="text-white hover:text-gray-300">
            <h5 className="nav font-medium text-md">Home</h5>
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
          <h5 className="nav font-medium text-md">About</h5>
          </Link>
          <Link href="/menu" className="text-white hover:text-gray-300">
          <h5 className="nav font-medium text-md">Menu</h5>
          </Link>
          <Link href="/team" className="text-white hover:text-gray-300">
          <h5 className="nav font-medium text-md">Team</h5>
          </Link>
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            <img className="w-24 h-14" src="https://demo.bravisthemes.com/hungrybuzz/wp-content/uploads/2023/06/logo.png" alt="" />
          </Link>
          <Link href="/gallery" className="text-white hover:text-gray-300">
          <h5 className="nav font-medium text-md">Gallery</h5>
          </Link>
          <Link href="/shop" className="text-white hover:text-gray-300">
          <h5 className="nav font-medium text-md">Shop</h5>
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-300">
          <h5 className="nav font-medium text-md">Blog</h5>
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
          <h5 className="nav font-medium text-md">Contact</h5>
          </Link>
        </div>

        {/* Right section (Login) */}
        <div className="flex space-x-4">
          <Link href="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars"></i> {/* You can use a burger icon here */}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <Link href="/" className="block text-white hover:text-gray-300 py-2">
          <h5 className="nav font-medium text-md">Home</h5>
          </Link>
          <Link href="/about" className="block text-white hover:text-gray-300 py-2">
          <h5 className="nav font-medium text-md">About</h5>
          </Link>
          <Link href="/menu" className="block text-white hover:text-gray-300 py-2">
          <h5 className="nav font-medium text-md">Menu</h5>
          </Link>
          <Link href="/gallery" className="block text-white hover:text-gray-300 py-2">
          <h5 className="nav font-medium text-md">Gallery</h5>
          </Link>
          <Link href="/contact" className="block text-white hover:text-gray-300 py-2">
          <h5 className="nav font-medium text-md">Contact Us</h5>
          </Link>
          <Link href="/login" className="block text-white hover:text-gray-300 py-2">
            Login
          </Link>
        </div>
      )}
    </nav>
    </>
  );
};

export default Nav;
