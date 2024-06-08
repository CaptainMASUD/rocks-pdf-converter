import React from 'react';
import github from '../../images/github.png';
import { FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const masud = "https://avatars.githubusercontent.com/u/108082819?v=4";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-8 max-w-md duration-500"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-[#704264] rounded-lg shadow-lg p-6"
      >
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <img
            src={masud}
            alt="Masudul Alam"
            className="w-28 h-28 rounded-full shadow-lg mb-4"
          />
          
          {/* Profile Details */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 text-white">Masudul Alam</h2>
            <p className="text-lg text-white mb-2">Web Developer</p>
            <p className="text-lg text-white mb-4">Daffodil International University</p>
            
            <div className="flex justify-center space-x-4">
              {/* GitHub Button */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/CaptainMASUD"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 flex items-center text-white font-bold py-2 px-4 rounded hover:bg-gray-900"
              >
                <img className="w-6 h-6 mr-2" src={github} alt="GitHub" />
                GitHub
              </motion.a>
              {/* Contact Button */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:masudulalam972@gmail.com"
                className="bg-[#824D74] flex items-center text-white hover:bg-[#9B3922] duration-500 border border-white text-center hover:border-transparent drop-shadow-md font-bold py-2 px-4 rounded"
              >
                <FaEnvelope className="mr-2" />
                Contact
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
