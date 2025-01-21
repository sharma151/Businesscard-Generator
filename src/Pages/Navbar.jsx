import { TiBusinessCard } from "react-icons/ti";
import { PiIdentificationCardFill } from "react-icons/pi";
import { BiBarcode } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsQrCodeScan } from "react-icons/bs";
import "../style/Components/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="home">
          <PiIdentificationCardFill />
        </Link>
        <ul>
          <Link to="/Qrcode" className="qrcode">
            <BsQrCodeScan />
           
          </Link>
          <Link to="/Barcode" className="barcode">
            <BiBarcode />
        
          </Link>
          <Link to="/BusinessCard" className="businesscard">
            <TiBusinessCard />
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
