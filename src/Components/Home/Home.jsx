// Home.js

import React, { useState } from 'react';
import ImageUploader from '../ImageUploader';
import PdfConverter from '../PdfConverter';
import LoadingAnimation from '../LoadingAnimation'; 
import jsPDF from 'jspdf';

function Modal({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-gray-900 opacity-50 transition-opacity duration-500"></div>
      <div className="bg-[#704264] p-6 rounded-lg z-20 text-center">
        <p className="text-lg font-semibold text-white">{message}</p>
        <button onClick={onClose} className="bg-[#704264] text-white hover:bg-[#9B3922] duration-500 border border-white hover:border-transparent drop-shadow-md font-bold py-2 px-4 rounded-lg mt-4">Close</button>
      </div>
    </div>
  );
}

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [pdfFilename, setPdfFilename] = useState(null);
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [newPdfFilename, setNewPdfFilename] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleImagesChange = (newImages) => {
    setImages(newImages);
    setErrorMessage('');
  };

  const handleConvertToPdf = () => {
    if (images.length === 0) {
      setShowModal(true);
      return;
    }
  
    setLoading(true);
    let currentProgress = 0;
    const increment = 100 / images.length;
  
    const interval = setInterval(() => {
      currentProgress += increment;
      setProgress(Math.min(currentProgress, 100));
  
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          const doc = new jsPDF();
          images.forEach((image, index) => {
            if (index !== 0) {
              doc.addPage();
            }
            const imgWidth = doc.internal.pageSize.getWidth();
            const imgHeight = doc.internal.pageSize.getHeight();
            doc.addImage(image, 'JPEG', 0, 0, imgWidth, imgHeight, '', 'FAST', 0); // Set rotation to 0
          });
          const blob = doc.output('blob');
          setLoading(false);
          setPdfFilename('converted_images.pdf');
          setPdfBlob(blob);
        }, 1000);
      }
    }, 200);
  };
  

  const handleDownloadPdf = () => {
    if (pdfBlob && pdfFilename) {
      const url = window.URL.createObjectURL(new Blob([pdfBlob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', pdfFilename);
      document.body.appendChild(link);
      link.click();
    }
  };

  const handleRenamePdf = () => {
    if (newPdfFilename.trim() === '') {
      setErrorMessage('Please enter a valid filename.');
      return;
    }

    setPdfFilename(newPdfFilename.trim() + '.pdf');
    setNewPdfFilename('');
    setErrorMessage('');
  };

  return (
    <div className=''>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">Image to PDF Converter</h1>
        {!loading && <ImageUploader onImagesChange={handleImagesChange} />}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="bg-[#824D74] text-white hover:bg-[#9B3922] duration-500 border border-white hover:border-transparent drop-shadow-md font-bold py-2 px-4 rounded flex items-center"
            onClick={handleConvertToPdf}
            disabled={loading}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                {/* Insert SVG animation */}
              </svg>
            )}
            {loading ? 'Processing...' : 'Convert to PDF'}
          </button>
        </div>
       
        {pdfFilename && (
          <div className="mt-4 grid place-content-center ">
            <p className='text-white text-center mt-5 mb-3 font-bold'>PDF File Name: <span className='underline cursor-pointer'>{pdfFilename}</span></p>
            <div className="flex items-center mt-2">
              <input
                type="text"
                className="bg-gray-200 border border-gray-300 px-2 py-1 mr-2"
                placeholder="New filename"
                value={newPdfFilename}
                onChange={(e) => setNewPdfFilename(e.target.value)}
              />
              
              <button
                className="bg-[#824D74] text-white hover:bg-[#9B3922] duration-500 border border-white hover:border-transparent drop-shadow-md font-bold py-2 px-4 rounded"
                onClick={handleRenamePdf}
              >
                Rename
              </button>
             
            </div>
            {errorMessage && <p className="text-red-600 mt-2 text-center">{errorMessage}</p>}
          </div>
          
        )}
        {loading && <LoadingAnimation progress={progress} />} 
        {pdfFilename && !loading && (
          <div className="mt-4 grid place-content-center">
            <button
              className="bg-[#824D74] text-white flex flex-row hover:bg-[#9B3922] duration-500 border border-white hover:border-transparent drop-shadow-md font-bold py-2 px-4 rounded w-48 mt-2"
              onClick={handleDownloadPdf}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
              </svg>&nbsp;
              Download PDF
            </button>
          </div>
        )}
        {images.length === 0 && !loading && <p className="mt-4 text-center text-white">No images uploaded or added.</p>}
        {!loading && images.length > 0 && <PdfConverter images={images} />}
      </div>
      {showModal && <Modal message="Please upload or add images before converting to PDF." onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Home;
