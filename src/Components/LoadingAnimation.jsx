import React from 'react';
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const LoadingAnimation = ({ progress }) => {
  const integerProgress = Math.round(progress);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4"
      >
        <motion.div
          className="text-indigo-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
        >
          <FaSpinner className="w-12 h-12" />
        </motion.div>
        <p className="text-indigo-500 text-base font-medium">Processing...</p>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-indigo-500 h-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-indigo-500 text-base font-medium">{integerProgress}%</p>
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
