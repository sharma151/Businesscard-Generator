import "../style/Pages/barcode.scss";
import { useRef, useState } from "react";
import JsBarcode from "jsbarcode";

const Barcode = () => {
  const [inputData, setInputData] = useState(""); // State to store user input
  const barcodeRef = useRef(null); // Reference to the barcode SVG

  const truncateData = (data) => {
    // Limit barcode data length to 20 characters
    const maxLength = 20;
    return data.length > maxLength ? data.substring(0, maxLength) : data;
  };

  const generateBarcode = () => {
    if (barcodeRef.current && inputData) {
      const processedData = truncateData(inputData); // Process input data
      JsBarcode(barcodeRef.current, processedData, {
        format: "CODE128",
        lineColor: "#000",
        width: 1.5,
        height: 40,
        displayValue: false,
      });
    }
  };

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  return (
    <div className="barcode-container">
      <h2>Barcode Generator</h2>
      <input
        type="text"
        placeholder="Enter data for barcode"
        value={inputData}
        onChange={handleInputChange}
        className="barcode-input"
      />
      <button onClick={generateBarcode} className="generate-barcode-btn">
        Generate Barcode
      </button>
      <div className="barcode-output">
        <svg ref={barcodeRef}></svg>
      </div>
    </div>
  );
};

export default Barcode;
