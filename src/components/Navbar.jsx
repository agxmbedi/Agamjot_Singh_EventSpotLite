import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">EVENT SPOT LITE</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/events" className="hover:text-gray-300">Shows</Link>
          {/* <Link to="/artists" className="hover:text-gray-300">Artists</Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</Link>
            <Link to="/events" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Shows</Link>
            {/* <Link to="/artists" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Artists</Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
