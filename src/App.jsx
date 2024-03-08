import React, { useState } from 'react';
import QRCode from 'qrcode'; // Import the QRCode library
import QRCodeDisplay from './components/QRCodeDisplay';

function App() {
  const [text, setText] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrCodeColor, setQRCodeColor] = useState('#000000');
  const [qrCodeSize, setQRCodeSize] = useState(128); // Default size: 128x128
  const [error, setError] = useState('');

  const generateQRCode = async () => {
    if (!text) {
      setError('Please enter text for the QR code.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const qrData = await QRCode.toDataURL(text, { color: { dark: qrCodeColor }, width: qrCodeSize });
      setQRCodeData(qrData);
    } catch (error) {
      console.error('Error generating QR code:', error);
      setError('An error occurred while generating the QR code.');
    } finally {
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeData;
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 text-white py-4 text-center mb-4">
        <h1 className="text-3xl font-bold">QR Code Generator</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow lg:w-1/2 lg:mx-auto">
        <div className="container mx-auto p-6 bg-gray-800 shadow-md rounded-lg">
          <label htmlFor="textInput" className="block text-white font-semibold mb-2">
            Enter Text for QR Code:
          </label>
          <input
            type="text"
            id="textInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="E.g., Website URL, Text Message, etc."
            className="border border-gray-600 rounded-md px-4 py-2 mb-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
          />
          <label htmlFor="colorPicker" className="block text-white font-semibold mb-2">
            Select QR Code Color:
          </label>
          <input
            type="color"
            id="colorPicker"
            value={qrCodeColor}
            onChange={(e) => setQRCodeColor(e.target.value)}
            className="mb-4"
          />
          <label htmlFor="sizeInput" className="block text-white font-semibold mb-2">
            Select QR Code Size (pixels):
          </label>
          <input
            type="number"
            id="sizeInput"
            value={qrCodeSize}
            onChange={(e) => setQRCodeSize(parseInt(e.target.value))}
            className="border border-gray-600 rounded-md px-4 py-2 mb-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
            min="64" // Set a minimum size
            max="512" // Set a maximum size
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded w-full transition duration-300 ease-in-out transform hover:scale-105"
            onClick={generateQRCode}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate QR Code'}
          </button>
          {qrCodeData && (
            <div className="mt-8">
              <QRCodeDisplay data={qrCodeData} />
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4 w-full transition duration-300 ease-in-out transform hover:scale-105"
                onClick={downloadQRCode}
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>
      </main>
      <footer className="bg-gray-800 py-4 text-white text-center mt-4">
        <p>&copy; 2024 QR Code Generator</p>
      </footer>
    </div>
  );
}

export default App;
