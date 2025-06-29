import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import DownloadButton from "../Components/DownloadButton";

const Qrcode = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");
  const cardRef = useRef(null);

  const handleGenerate = () => {
    setQrValue(inputValue.trim());
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          QR Code Generator
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Create your personalized QR code in seconds.
        </p>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your information here..."
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <button
          onClick={handleGenerate}
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
        >
          Generate QR Code
        </button>

        {qrValue && (
          <div
            className="mt-8 bg-gray-100 p-6 rounded-lg flex flex-col items-center gap-4"
            ref={cardRef}
          >
            <QRCode value={qrValue} size={150} />
            <DownloadButton
              targetRef={cardRef}
              fileName="Qrcode"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Qrcode;
