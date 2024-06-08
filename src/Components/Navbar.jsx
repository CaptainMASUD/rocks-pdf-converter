import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaFilePdf, FaHome, FaList, FaInfoCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent md:shadow-md">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center py-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center"
          >
            <FaFilePdf className="w-9 h-9 mr-2 text-white" />
            <NavLink to="/" className="text-white text-xl" style={{ fontFamily: "Dancing Script, cursive" }}>RHM PDF Converter</NavLink>
          </motion.div>
          <div className="hidden md:flex">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <NavLink
                to="/"
                exact
                className={`flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded ${location.pathname === '/' ? 'bg-gray-700' : ''}`}
              >
                <FaHome className="mr-1" /> Home
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <NavLink
                to="/features"
                className={`flex items-center text-white ml-5 hover:bg-gray-700 px-3 py-2 rounded ${location.pathname === '/features' ? 'bg-gray-700' : ''}`}
              >
                <FaList className="mr-1" /> Features
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <NavLink
                to="/about"
                className={`flex items-center text-white ml-5 hover:bg-gray-700 px-3 py-2 rounded ${location.pathname === '/about' ? 'bg-gray-700' : ''}`}
              >
                <FaInfoCircle className="mr-1" /> About
              </NavLink>
            </motion.div>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-6 w-6"
                initial={{ rotate: 0 }}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isMenuOpen ? (
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </motion.div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid place-content-center md:hidden"
            >
              <NavLink
                to="/"
                exact
                className={`block border border-[#704264] text-center w-80 p-1 hover:border-transparent duration-500 rounded-full text-white ${location.pathname === '/' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome className="inline mr-1" /> Home
              </NavLink>
              <NavLink
                to="/features"
                className={`block border mt-2 border-[#704264] text-center w-80 p-1 hover:border-transparent duration-500 rounded-full text-white ${location.pathname === '/features' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaList className="inline mr-1" /> Features
              </NavLink>
              <NavLink
                to="/about"
                className={`block border mt-2 mb-3 border-[#704264] text-center w-80 p-1 hover:border-transparent duration-500 rounded-full text-white ${location.pathname === '/about' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaInfoCircle className="inline mr-1" /> About
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
