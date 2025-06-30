import { TiBusinessCard } from "react-icons/ti";
import { PiIdentificationCardFill } from "react-icons/pi";
import { BiBarcode } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsQrCodeScan } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Home - always on left */}
      <Link to="/" className="flex items-center gap-2  font-semibold pl-5">
        <PiIdentificationCardFill size={30} />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center">
        <li>
          <Link
            to="/Qrcode"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <BsQrCodeScan size={20} />
            <span>Qrcode</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Barcode"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <BiBarcode size={20} />
            <span>Barcode</span>
          </Link>
        </li>
        <li>
          <Link
            to="/BusinessCard"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <TiBusinessCard size={20} />
            <span>BusinessCard</span>
          </Link>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <div
        className="md:hidden text-2xl text-gray-700 pr-3"
        onClick={toggleDropdown}
      >
        {dropdownOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown */}
      {dropdownOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md w-48 z-50">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link
                to="/Qrcode"
                onClick={toggleDropdown}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <BsQrCodeScan />
                <span>Qrcode</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Barcode"
                onClick={toggleDropdown}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <BiBarcode />
                <span>Barcode</span>
              </Link>
            </li>
            <li>
              <Link
                to="/BusinessCard"
                onClick={toggleDropdown}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <TiBusinessCard />
                <span>BusinessCard</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
