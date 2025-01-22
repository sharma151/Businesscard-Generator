import "../style/Pages/barcode.scss";
import { useRef, useState } from "react";
import JsBarcode from "jsbarcode";
import DownloadButton from "../Components/DownloadButton";

const Barcode = () => {
  const [inputData, setInputData] = useState("");
  const barcodeRef = useRef(null);
  const cardRef = useRef(null);

  const truncateData = (data) => {
    const maxLength = 50;
    return data.length > maxLength ? data.substring(0, maxLength) : data;
  };

  const generateBarcode = () => {
    if (barcodeRef.current && inputData) {
      const processedData = truncateData(inputData);
      JsBarcode(barcodeRef.current, processedData, {
        format: "CODE39",
        width: 2,
        height: 60,
        displayValue: false,
      });
    }
  };

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  return (
    <div className="barcode-container">
      <div className="header">
        <h2>Barcode Generator</h2>
        <p>Generate a clean and scannable barcode in seconds!</p>
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter data (max 50 characters)"
          value={inputData}
          onChange={handleInputChange}
          className="barcode-input"
        />
        <button onClick={generateBarcode} className="generate-barcode-btn">
          Generate Barcode
        </button>
      </div>

      {barcodeRef && (
        <div className="barcode-output" ref={cardRef}>
          <svg ref={barcodeRef}></svg>
          <DownloadButton
            targetRef={cardRef}
            fileName="Barcode"
            className="qrcodestyle"
          />
        </div>
      )}
    </div>
  );
};

export default Barcode;
