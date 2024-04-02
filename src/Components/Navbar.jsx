import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation
import p from '../images/p.png';

const Navbar = () => {
  const location = useLocation(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent md:shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img className="w-9 h-9 mr-2" src={p} alt="" />
            <p className="text-white text-xl" style={{ fontFamily: "Dancing Script, cursive" }}>RHM PDF Converter</p>
          </div>
          <div className="hidden md:flex">
            <NavLink
              to="/"
              exact
              className={`text-white hover:bg-gray-700 px-3 py-2 rounded ${
                location.pathname === '/' ? 'bg-gray-700' : ''
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className={`text-white ml-5 hover:bg-gray-700 px-3 py-2 rounded ${
                location.pathname === '/features' ? 'bg-red-700' : ''
              }`}
            >
              Features
            </NavLink>
            <NavLink
              to="/about"
              className={`text-white ml-5 hover:bg-gray-700 px-3 py-2 rounded ${
                location.pathname === '/about' ? 'bg-gray-700' : ''
              }`}
            >
              About
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
  className={`grid place-content-center md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
>
  <NavLink
    to="/"
    exact
    className={`block border border-[#704264] text-center w-96 p-1 hover:border-transparent duration-500 rounded-full  text-white ${
      location.pathname === '/' ? 'bg-gray-700' : 'hover:bg-gray-700'
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    Home
  </NavLink>
  <NavLink
    to="/features"
    className={`block border mt-2 border-[#704264] text-center w-96 p-1 hover:border-transparent duration-500 rounded-full text-white ${
      location.pathname === '/features' ? 'bg-gray-700' : 'hover:bg-gray-700'
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    Features
  </NavLink>
  <NavLink
    to="/about"
    className={`block border mt-2 mb-3 border-[#704264] text-center w-96 p-1 hover:border-transparent duration-500 rounded-full text-white ${
      location.pathname === '/about' ? 'bg-gray-700' : 'hover:bg-gray-700'
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    About
  </NavLink>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
