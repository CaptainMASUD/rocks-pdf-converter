import React from 'react';
import masud from '../../images/masud.png';
import github from '../../images/github.png';

function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md"> {/* Reduced max width to md */}
      <div className="bg-[#704264] rounded-lg shadow-lg p-6 ">
        <div className="flex items-center justify-center flex-col  ">
          {/* Profile Image */}
          <img src={masud} alt="Masudul Alam" className="w-28 h-28 rounded-full shadow-lg mb-4 md:mb-0" /> {/* Reduced image size */}
          
          {/* Profile Details */}
          <div className="md:ml-6 text-center md:text-left ">
            <h2 className="text-2xl font-bold mb-2 text-center text-white">Masudul Alam</h2> {/* Reduced font size */}
            <p className="text-lg text-white text-center mb-2">Web Developer</p>
            <p className="text-lg text-white mb-4">Daffodil International University</p>
            
            <div className="flex justify-center  md:justify-center ">
              {/* GitHub Button */}
              <a href="https://github.com/CaptainMASUD" target="_blank" rel="noopener noreferrer" className="bg-gray-800 flex flex-row text-white font-bold py-2 px-4 rounded hover:bg-gray-900 mr-4">
                <img className='w-6 h-6' src={github} alt="" /> &nbsp; GitHub
              </a>
              {/* Contact Button */}
              <a href="mailto:masudulalam972@gmail.com" className="bg-[#824D74] text-white hover:bg-[#9B3922] duration-500 border border-white w-24 text-center hover:border-transparent drop-shadow-md font-bold py-2 px-4 rounded ">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
