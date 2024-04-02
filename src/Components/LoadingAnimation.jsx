import React from 'react';

const LoadingAnimation = ({ progress }) => {
  // Convert progress to an integer
  const integerProgress = Math.round(progress);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow w-64 flex items-center">
        <svg className="animate-spin h-5 w-5 mr-3 text-indigo-500" viewBox="0 0 24 24">
          {/* SVG animation */}
        </svg>
        <p className="text-indigo-500">Processing...</p>
        <div className="bg-gray-200 h-2 ml-auto w-1/2 rounded-full mx-4">
          <div className="bg-indigo-500 h-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-indigo-500">{integerProgress}%</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
