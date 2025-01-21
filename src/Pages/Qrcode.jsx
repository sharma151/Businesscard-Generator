import "../style/Pages/Qrcode.scss";
import QRCode from "react-qr-code";
import { useState } from "react";

const Qrcode = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    setQrValue(inputValue);
  };

  return (
    <div className="qr-code-generator">
      <h1>QR Code Generator</h1>
      <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text, number, or paragraph..."
        rows="4"
        className="input-textarea"
      />
      <button onClick={handleGenerate} className="generate-button">
        Generate QR Code
      </button>
      {qrValue && (
        <div className="qr-code-display">
          <QRCode value={qrValue} className="qrCode" />
        </div>
      )}
    </div>
  );
};

export default Qrcode;
