import React, { useState } from "react";

const ImageUploader = ({ onImagesChange }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const newImagesArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages((prevImages) => [...prevImages, ...newImagesArray]);
    onImagesChange(selectedImages.concat(newImagesArray));
  };

  const removeImage = (index) => {
    const filteredImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(filteredImages);
    onImagesChange(filteredImages);
  };

  return (
    <div
      className="flex flex-wrap flex-row justify-center"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <label
        htmlFor="upload"
        className="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md mb-2 mr-2"
        style={{ fontFamily: "Cairo, sans-serif" }}
      >
        Upload Images{" "}&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
</svg>


      </label>
      <input
        type="file"
        id="upload"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleImageChange}
      />
      {selectedImages.map((image, index) => (
        <div key={index} className="relative mr-2 mb-2">
          <img
            src={image}
            alt={`Uploaded ${index}`}
            className="h-32 rounded-md"
          />
          <button
            className="absolute top-0 right-0 bg-gray-500 text-white duration-500 hover:bg-red-500 rounded-full text-xs w-6 h-6"
            onClick={() => removeImage(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageUploader;
