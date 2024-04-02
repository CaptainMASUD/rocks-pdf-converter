// import React, { useState } from 'react';
// import ImageUploader from './Components/ImageUploader';
// import PdfConverter from './Components/PdfConverter';
// import LoadingAnimation from './Components/LoadingAnimation'; 
// import Navbar from './Components/Navbar';
// import jsPDF from 'jspdf';
// import Footer from './Components/Footer';

// function App() {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [pdfBlob, setPdfBlob] = useState(null); // State to store the generated PDF blob
//   const [pdfFilename, setPdfFilename] = useState(null); // State to store PDF filename
//   const [progress, setProgress] = useState(0); // State to store conversion progress

//   const handleImagesChange = (newImages) => {
//     setImages(newImages);
//   };

//   const handleConvertToPdf = () => {
//     setLoading(true);
//     let currentProgress = 0;
//     const increment = 100 / images.length;

//     const interval = setInterval(() => {
//       currentProgress += increment;
//       setProgress(Math.min(currentProgress, 100));

//       if (currentProgress >= 100) {
//         clearInterval(interval);
//         setTimeout(() => {
//           const doc = new jsPDF();
//           images.forEach((image, index) => {
//             if (index !== 0) {
//               doc.addPage();
//             }
//             doc.addImage(image, 'JPEG', 10, 10, 190, 150);
//           });
//           const blob = doc.output('blob');
//           setLoading(false);
//           setPdfFilename('converted_images.pdf'); // Set the filename when conversion is complete
//           setPdfBlob(blob);
//         }, 1000); // Simulating conversion delay
//       }
//     }, 200); // Simulating progress update interval
//   };

//   const handleDownloadPdf = () => {
//     if (pdfBlob && pdfFilename) {
//       const url = window.URL.createObjectURL(new Blob([pdfBlob]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', pdfFilename);
//       document.body.appendChild(link);
//       link.click();
//     }
//   };

//   return (
//     <>
//     <div>
//       <Navbar/>
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Image to PDF Converter</h1>
//       <ImageUploader onImagesChange={handleImagesChange} />
//       <div className="flex justify-center mt-4">
//         <button
//           type="button"
//           className="bg-indigo-500 text-white font-bold py-2 px-4 rounded flex items-center"
//           onClick={handleConvertToPdf}
//           disabled={loading}
//         >
//           {loading && (
//             <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
//               {/* Insert SVG animation */}
//             </svg>
//           )}
//           {loading ? 'Processing...' : 'Convert to PDF'}
//         </button>
//       </div>
//       {loading && <LoadingAnimation progress={progress} />} {/* Render the LoadingAnimation component when loading is true */}
//       {pdfFilename && !loading && (
//         <div className="mt-4">
//           <p>PDF file: {pdfFilename}</p>
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             onClick={handleDownloadPdf}
//           >
//             Download PDF
//           </button>
//         </div>
//       )}
//       {images.length > 0 && !loading && <PdfConverter images={images} />}
//     </div>
//     <Footer/>
//     </div>
//     </>
//   );
// }

// export default App;
