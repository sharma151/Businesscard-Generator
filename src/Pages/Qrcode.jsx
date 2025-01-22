import "../style/Pages/Qrcode.scss";
import QRCode from "react-qr-code";
import { useState } from "react";
import { useRef } from "react";
import DownloadButton from "../Components/DownloadButton";
const Qrcode = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");
  const cardRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    setQrValue(inputValue);
  };

  return (
    <div className="qr-code-generator">
      <div className="container">
        <h1>QR Code Generator</h1>
        <p className="description">
          Create your personalized QR code in seconds.
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your information here..."
          className="input-field"
        />
        <button onClick={handleGenerate} className="generate-button">
          Generate QR Code
        </button>
        {qrValue && (
          <div className="qr-code-display " ref={cardRef}>
            <QRCode value={qrValue} size={150} className="qrCode" />
            <div className="Qrcode-dbtn">
              <DownloadButton
                targetRef={cardRef}
                fileName="Qrcode"
                className="qrcodestyle"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Qrcode;
