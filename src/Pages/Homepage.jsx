import "../style/Pages/homepages.scss";
import { Link } from "react-router-dom";
import { BsQrCodeScan } from "react-icons/bs";
import { BiBarcode } from "react-icons/bi";
import { TiBusinessCard } from "react-icons/ti";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to Generator Hub</h1>
      <p className="homepage-subtitle">
        Create QR Codes, Barcodes, and Business Cards in just a few clicks!
      </p>

      <div className="features-container">
        <div className="feature-card qr-code">
          <h2>QR Code Generator</h2>
          <p>Easily generate QR codes for URLs, text, and more!</p>
          <Link to="/qrcode" className="qrcode">
            <BsQrCodeScan size={20} /> <span> QR Code Generator </span>
          </Link>
        </div>

        <div className="feature-card barcode">
          <h2>Barcode Generator</h2>
          <p>Create barcodes in various formats with ease.</p>
          <Link to="/Barcode" className="barcode">
            <BiBarcode size={20} /> <span> Barcode Generator</span>
          </Link>
        </div>

        <div className="feature-card business-card">
          <h2>Business Card Generator</h2>
          <p>Design and download personalized business cards.</p>
          <Link to="/BusinessCard" className="businesscard">
            <TiBusinessCard size={20} />
            <span> Businesscard Generator</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
