import React from 'react';
import { FaFilePdf, FaImages, FaEye, FaDownload, FaEdit, FaMousePointer } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Feature = () => {
  const featureData = [
    { title: "Convert Images to PDF", description: "Easily convert multiple images into a single PDF document with just a few clicks.", icon: FaFilePdf },
    { title: "Rename PDF", description: "Rename the generated PDF file to your preferred name before downloading it.", icon: FaEdit },
    { title: "View Selected Files", description: "View the list of selected images before converting them to PDF to ensure accuracy.", icon: FaEye },
    { title: "Download PDF", description: "Download the converted PDF document to your device for easy access and sharing.", icon: FaDownload },
    { title: "Drag and Drop Images", description: "User can drag and drop the images to add them.", icon: FaMousePointer },
  ];

  return (
    <div className="container mx-auto px-4 py-8 duration-500">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-white text-center"
      >
        Features
      </motion.h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.5 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-[#3e4d54] p-6 rounded-lg shadow-lg"
          >
            <feature.icon className="text-white text-3xl mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
            <p className="text-lg text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">How to Use</h2>
        <ul className="list-disc pl-6">
          <li>Upload or add images using the "Upload Images" button.</li>
          <li>Click on "Convert to PDF" button to convert the uploaded images into a PDF document.</li>
          <li>If needed, rename the PDF file by entering a new filename and clicking on the "Rename" button.</li>
          <li>Once the conversion is complete, click on the "Download PDF" button to download the generated PDF file.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Feature;
