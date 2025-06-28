import { useRef, useState } from "react";
import JsBarcode from "jsbarcode";
import DownloadButton from "../Components/DownloadButton";

const Barcode = () => {
  const [inputData, setInputData] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const barcodeRef = useRef(null);

  const truncateData = (data) => {
    const maxLength = 50;
    return data.length > maxLength ? data.substring(0, maxLength) : data;
  };

  const generateBarcode = () => {
    if (barcodeRef.current && inputData.trim()) {
      const processedData = truncateData(inputData);
      JsBarcode(barcodeRef.current, processedData, {
        format: "CODE128",
        width: 2,
        height: 60,
        displayValue: false,
      });
      setIsGenerated(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Barcode Generator
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Generate a clean and scannable barcode in seconds!
        </p>

        <input
          type="text"
          placeholder="Enter data (max 50 characters)"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
            setIsGenerated(false);
          }}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <button
          onClick={generateBarcode}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Generate Barcode
        </button>

        <div
          className={`mt-8 flex flex-col items-center gap-4 ${
            isGenerated ? "block" : "hidden"
          }`}
        >
          <svg ref={barcodeRef} />
          <DownloadButton
            targetRef={barcodeRef}
            fileName="Barcode"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Barcode;
