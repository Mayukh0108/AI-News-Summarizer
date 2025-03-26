import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
              Logo
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
            <a 
              href="#" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#" 
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md"
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md"
              >
                About
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md"
              >
                Services
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md"
              >
                Contact
              </a>
              <a 
                href="#" 
                className="bg-blue-600 text-white block px-3 py-2 rounded-md hover:bg-blue-700 text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;