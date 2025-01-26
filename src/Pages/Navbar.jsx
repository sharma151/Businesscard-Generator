import { TiBusinessCard } from "react-icons/ti";
import { PiIdentificationCardFill } from "react-icons/pi";
import { BiBarcode } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsQrCodeScan } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for toggling the dropdown
import { useState } from "react";
import "../style/Components/Navbar.scss";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className="nav-link" id="Home">
        <PiIdentificationCardFill size={30} />
        <span>Home</span>
      </Link>

      <ul className="menu">
        <li>
          <Link to="/Qrcode" className="nav-link" onClick={toggleDropdown}>
            <BsQrCodeScan size={20} />
            <span>Qrcode</span>
          </Link>
        </li>
        <li>
          <Link to="/Barcode" className="nav-link" onClick={toggleDropdown}>
            <BiBarcode size={20} />
            <span>Barcode</span>
          </Link>
        </li>
        <li>
          <Link
            to="/BusinessCard"
            className="nav-link"
            onClick={toggleDropdown}
          >
            <TiBusinessCard size={20} />
            <span>BusinessCard</span>
          </Link>
        </li>
      </ul>
      <div className="menu-toggle" onClick={toggleDropdown}>
        {dropdownOpen ? <FaTimes /> : <FaBars />}
      </div>
      {dropdownOpen && (
        <div className="dropdown">
          <ul className="dropdown-menu">
            <li>
              <Link to="/Qrcode" className="nav-link" onClick={toggleDropdown}>
                <BsQrCodeScan />
                <span>Qrcode</span>
              </Link>
            </li>
            <li>
              <Link to="/Barcode" className="nav-link" onClick={toggleDropdown}>
                <BiBarcode />
                <span>Barcode</span>
              </Link>
            </li>
            <li>
              <Link
                to="/BusinessCard"
                className="nav-link"
                onClick={toggleDropdown}
              >
                <TiBusinessCard />
                <span>BusinessCard</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
