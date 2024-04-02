import React from 'react';

const PdfConverter = ({ images }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Selected Images</h2>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="mt-2 mr-2 h-32 rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default PdfConverter;
