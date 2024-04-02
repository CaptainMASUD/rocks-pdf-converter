import React from 'react';

function Feature() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Feature 1: Convert images to PDF */}
        <div className="bg-[#824D74] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Convert Images to PDF</h3>
          <p className="text-lg text-gray-300">
            Easily convert multiple images into a single PDF document with just a few clicks.
          </p>
        </div>
        {/* Feature 2: Rename PDF */}
        <div className="bg-[#824D74] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Rename PDF</h3>
          <p className="text-lg text-gray-300">
            Rename the generated PDF file to your preferred name before downloading it.
          </p>
        </div>
        {/* Feature 3: View Selected Files */}
        <div className="bg-[#824D74] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">View Selected Files</h3>
          <p className="text-lg text-gray-300">
            View the list of selected images before converting them to PDF to ensure accuracy.
          </p>
        </div>
        {/* Feature 4: Download PDF */}
        <div className="bg-[#824D74] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Download PDF</h3>
          <p className="text-lg text-gray-300">
            Download the converted PDF document to your device for easy access and sharing.
          </p>
        </div>
        {/* Feature 5: darg and drop PDF */}
        <div className="bg-[#824D74] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Drag and Drop Images</h3>
          <p className="text-lg text-gray-300">
            User can drag and drop the images to add them.
          </p>
        </div>
      </div>
      <div className="mt-8 text-white">
        <h2 className="text-3xl font-bold mb-4">How to Use</h2>
        <ul className="list-disc pl-6">
          <li>Upload or add images using the "Upload Images" button.</li>
          <li>Click on "Convert to PDF" button to convert the uploaded images into a PDF document.</li>
          <li>If needed, rename the PDF file by entering a new filename and clicking on "Rename" button.</li>
          <li>Once the conversion is complete, click on "Download PDF" button to download the generated PDF file.</li>
        </ul>
      </div>
    </div>
  );
}

export default Feature;
