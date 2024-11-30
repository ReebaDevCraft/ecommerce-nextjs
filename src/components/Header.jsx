'use client';
import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#134e4a] text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-2xl font-bold">TrendSphere</div>

        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Product</a>
          <a href="#" className="hover:text-gray-300">Testimonial</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300">
            <FaShoppingCart size={20} />
          </button>

          <button className="hover:text-gray-300">
            <FaUserCircle size={20} />
          </button>

          <button
            className="md:hidden hover:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-[#134e4a] mt-4">
          <ul className="space-y-4 text-center">
            <li>
              <a href="#" className="block text-lg hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="block text-lg hover:text-gray-300">Product</a>
            </li>
            <li>
              <a href="#" className="block text-lg hover:text-gray-300">Testimonial</a>
            </li>
            <li>
              <a href="#" className="block text-lg hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
