import React from 'react';

function QRCodeDisplay({ data }) {
    return (
      <div className="flex flex-col items-center">
        <img src={data} alt="QR Code" className="mt-8" />
      </div>
    );
  }
export default QRCodeDisplay;
