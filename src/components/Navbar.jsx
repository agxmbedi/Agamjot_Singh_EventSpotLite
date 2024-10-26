import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">EVENT SPOT</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/events" className="hover:text-gray-300">Shows</Link>
          <Link to="/artists" className="hover:text-gray-300">Artists</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-xl">🔍</button>
          <button className="text-xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
